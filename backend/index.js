
import express from "express";
import { PrismaClient } from "@prisma/client";
import { usernameSchema,emailSchema,passwordSchema } from "./validate";
import { jwt } from "jsonwebtoken";

const app = express();
const port = 3000;
const prisma = new PrismaClient();
const secret_key = aditya5021;

app.use(express.json(req,res,next));

function validateInput(req,res,next){
    const [username,email,password] = req.body;

    const username_check = usernameSchema.safeParse(username);
    if( !username_check.success){
        return res.json( {msg : "username length can't exceed 50 !"}  );
    }

    const email_check = emailSchema(email);
    if( !email_check.success){
        return res.json({msg : "email is invalid !" });
    }

    const password_check = passwordSchema.safeParse(password);
    if( !password_check.success){
       let error_array = [];
       password_check.error.errors.forEach( error => error_array.push(error)  );
       return res.json( { msg : error_array } );
    } 

    next();
}

app.post("/signup", validateInput , async ( req,res )=>{

    const [username,email,password] = req.body;

    try{

        const response =  await prisma.userDetails.create({
            data: {
                username : username,
                email: email,
                password:password
            }

        })
        const userId = 
        console.log(response);
        const token = jwt.sign()

    }catch(error){
        console.log(error);
    }

    //retur a jwt token;



})

app.listen(port,()=>{console.log(`server running on port ${port}`)})