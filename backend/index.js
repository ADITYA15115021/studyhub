
import express from "express";
import { PrismaClient } from "@prisma/client";
import { usernameSchema,emailSchema,passwordSchema } from "./validate.js";
import  jwt  from "jsonwebtoken";
import cors from "cors";

const app = express();
const port = 3000;
const prisma = new PrismaClient();
const secret_key = "aditya5021";

app.use(express.json());
app.use(cors());


function validateInput(req,res,next){
    const {username,email,password} = req.body;

    const username_check = usernameSchema.safeParse(username);
    if( !username_check.success){
        return res.status(400).json( {msg : "username length can't exceed 50 !"}  );
    }

    const email_check = emailSchema.safeParse(email);
    if( !email_check.success){
        return res.status(400).json({msg : "email is invalid !" });
    }

    const password_check = passwordSchema.safeParse(password);
    if( !password_check.success){
       let error_array = [];
       password_check.error.errors.forEach( error => error_array.push(error.message)  );
       return res.status(400).json( { msg : error_array } );
    } 

    next();
}

app.post("/signup", validateInput , async ( req,res )=>{

    const {username,email,password} = req.body;

    try{

        const response =  await prisma.userDetails.create({
            data: {
                username : username,
                email: email,
                password:password
            }

        })
        console.log(response);

        const payload = { id:toString(response.id) , username:response.username };
        
        const token = jwt.sign(payload,secret_key);
        console.log(token);

        return res.json( { token : token, userId : response.id});

    }catch(error){
        console.log(error);
    }

    //retur a jwt token;



})

 //login route 

 app.post("/login",validateInput, async (req,res)=>{

    const {email,password} = req.body;

    try {

        const response = await prisma.userDetails.findUnique({
            where : { email : email }
        })

        console.log(response);
        
        const payload = { id:toString(response.id) , username:response.username };
        const token = jwt.sign(payload,secret_key);
        console.log(token);
        return res.json( { token : token, userId : response.id});
        
    } catch (error) {
        console.log(error);
    }

 } )

app.get("/fetch", async (req,res)=>{
    const { limit,course} = req.query; 
    console.log(limit);

    try {
        const response = await prisma.network.findMany({take: parseInt(limit), }); 
        console.log(response);
        return res.json( { data : response});
    } catch (error) {
        console.log(error);
    }

    
})

app.listen(port,()=>{console.log(`server running on port ${port}`)})