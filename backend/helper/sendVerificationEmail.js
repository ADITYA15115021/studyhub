

import { Resend } from 'resend';
const resend = new Resend("re_YmSEErJB_4poVMTAWhSAahz6hNBnRzETc");

export default async function sendEmail({username,email,verifyCode}){
    try {


    console.log(username,email,verifyCode);
    console.log("sending email!");

    const response = await resend.emails.send({
        from: 'no-reply@ak-backend1.xyz',
        to: email,
        subject: 'verification code',
        html: `<p>Hello ${username}, Thanks for registration. Verify your email !<strong>${verifyCode}</strong>!</p>`
    })
    ; 
    console.log(response);
    return {success:true,message:"verification email send successfully!"}
    
    } catch (error) {
        console.log(error);
        return {success:false,message:"failed to send verifiaction email"}
    }

}




//sendEmail();