
import express from "express";
import { PrismaClient } from "@prisma/client";
import { usernameSchema,emailSchema,passwordSchema } from "./validate.js";
import  jwt  from "jsonwebtoken";
import cors from "cors";
import sendEmail from "./helper/sendVerificationEmail.js"
import bcrypt from "bcrypt";
import e from "cors";


const app = express();
const port = 3000;
const prisma = new PrismaClient();
const secret_key = "aditya5021";

app.use(express.json());
app.use(cors());


function validateInput(req,res,next){
    const {username,email,password} = req.body;
    
    console.log("validating input",username,email,password);

    const username_check = usernameSchema.safeParse(username);
    if( !username_check.success){
        return res.status(400).json( {msg : "username length can't exceed 50 !"}  );
    }

    const email_check = emailSchema.safeParse(email);
    if( !email_check.success){
        console.log("email invalid");
        return res.status(400).json({msg : "email is invalid !" });
    }

    const password_check = passwordSchema.safeParse(password);
    if( !password_check.success){
        console.log("error in password!");
       let error_array = [];
       password_check.error.errors.forEach( error => error_array.push(error.message)  );
       return res.status(400).json( { msg : error_array } );
    } 

    next();
}

app.get("/",(req,res)=>{
    console.log("Request received!")
    return res.json({
        msg : "hello!"
    })
})



app.post("/signup", validateInput , async ( req,res )=>{

    console.log("signup request received!");

    const {username,email,password} = req.body;
    const verifyCode = Math.floor(100000+Math.random()*900000).toString();

    try{

        console.log(username,email,password);

        const userExist = await prisma.users.findUnique({
            where : { email: email }
        });

        if( userExist ){
            if( userExist.isVerified ){
                return res.json(
                    {status:400},
                    {success:false,
                    message:"user already exist with the provided email !"}
                    
                )
            }else{
              const hashedPassword = await bcrypt.hash(password,10);
              const codeExpiry =  new Date(Date.now() + 3600000 );
              const dbResponse = await prisma.users.create({
                data:{
                    username:username,
                    email:email,
                    password:hashedPassword,
                    verificationCode:verifyCode,
                    codeExpiry:codeExpiry
                }
              })
                console.log(dbResponse);
                 
            }
        }else{
            //case, when the email is unique 
            console.log("new insertion!");
            const hashedPassword = await bcrypt.hash(password,10);
            const codeExpiry = new Date();
            codeExpiry.setHours(codeExpiry.getHours()+1);
            const dbResponse = await prisma.users.create({
              data:{
                  username:username,
                  email:email,
                  password:hashedPassword,
                  verificationCode:verifyCode,
                  codeExpiry:codeExpiry
              }
            })

            console.log(dbResponse);

        }

         //sending verification email;

         const emailResponse = await sendEmail({username:username,email:email,verifyCode:verifyCode});
        
         if(!emailResponse.success){
             return res.json({
               success:false,
               message : emailResponse.message      
             },{status:400})
         }

         //when using,json,the status code is set to 200 automa
         return res.status(201).json(
            { success:true, message:"user registered successfully! verify your email"},
         )    
    
            // const payload = { id:toString(response.id) , username:response.username };
            // const token = jwt.sign(payload,secret_key);
            // console.log(token);
            // return res.json( { token : token, userId : response.id});

    }catch(error){
        //error while making the first db search query! 
        console.log(error);
    }

    



})



app.post("/verify-code",async (req,res)=>{
    const { email, verificationCode } = req.body;

    //first,verify for the code expiration,if expired, return the code expired message;
    //else ,compare the verification code from the db and received from the user
    
    const current = new Date();

    try {
        const dbResponse = await prisma.users.findUnique({
            where : {
                email : email
            }
        })

       
        if(!dbResponse){
            return res.status(400).json( {msg : "email does not exist!"} );
        }

        console.log("email found in db!");
        console.log(dbResponse);


        const expiryDate = dbResponse.codeExpiry instanceof Date ? dbResponse.codeExpiry : new Date(dbResponse.codeExpiry);
        if(current > expiryDate ){
           console.log("verification code expired!");
           return res.json({
             success : false,
             message : "verification code expired!"
           } )
        }else{
            if( dbResponse.verificationCode === verificationCode ){
                console.log("verification code is valid");
                //update the isVerified field in the db to true,
                try {

                    const response = await prisma.users.update({
                        where: { email:email }, 
                        data: { isVerified:true }
                    });
                    console.log(response);

                    //send the jwt;
                    const payload = { id:toString(response.id) , username:response.username };
                    const token = jwt.sign(payload,secret_key);
                    console.log("jwt",token);
                    return res.json( {success :true, message : "verifaction successfull!", token : token, userId : response.id});
                    
                    // return res.status(200).json({
                    //     status : "success",
                    //     message : "code verification successfull!"
                    // })

                    

                    
                } catch (error) {
                    console.log(error);
                    return res.status(500).json({ success: false, message: "Could not verify user!" });
                }
               
            }else{

               return res.json({
                success:false,
                message :"invalid verification code!"
               })
            }
        }


    } catch (error) {
        console.log(error);
    }


})




app.post("/login", async (req, res) => {

    console.log("login request receiveed !");
    const { email, password } = req.body;
  
    const user = await prisma.users.findUnique({
        where: {
            email:email
        }
    })
    if (!user) {
        console.log("user does not exist!");
      return res.status(400).json({ success:false,message: 'Email does not exist' });
    }
  
    const isValid = bcrypt.compare(password,user.password);
    if (!isValid) {
        console.log("password is invalid!");
      return res.status(401).json({ success:false,message: 'Incorrect password' });
    }

    //generating jwt token

    const payload = { id:toString(user.id) , username:user.username };
    const token = jwt.sign(payload,secret_key);
    console.log("jwt",token);
    return res.json( {success :true, message : "verifaction successfull!", token : token});
    
  });
  



 
app.get("/fetch", async (req,res)=>{
    const { limit,subject} = req.query; 
    console.log(limit);

    try {
       
        const response = await prisma.question.findMany({
            where: {
              subject:subject
            },
            take: parseInt(limit)
          });
          
        console.log(response);
        return res.json( { data : response});
    } catch (error) {
        console.log(error);
    }

    
})

app.listen(port,()=>{console.log(`server running on port ${port}`)})