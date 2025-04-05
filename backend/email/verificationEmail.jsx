

import { Html,Head,Row,Section,Text,Button,Preview, Heading } from "@react-email/components";



export default function VerificationEmail({username,otp}){
   return (
    
    <Html>
        <Head>
            
        </Head>
        <Preview>
                
        </Preview>
        <Section>
            <Row>
               <Heading>Hello {username},</Heading> 
            </Row>
            <Row>
               <Text>
                Thank you for registration. Please use the following verification code 
                 to complete your registration 
               </Text>
            </Row>
            <Row>
                <Text>{otp}</Text>
            </Row>
            <Row>
                <Text>
                    if you did not request this code, please ignore this email 
                </Text>
            </Row>
        </Section>
    </Html>
   )
}