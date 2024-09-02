// import GitHub from "next-auth/providers/github"
// import  Google  from 'next-auth/providers/google';
import Credentials from "next-auth/providers/credentials" 
import { getUserByEmail } from "./data/user";
import bcrypt from 'bcrypt'

export default {
  providers: [
    Credentials({
      async authorize(credentials){
        const { email, password } = credentials;
        const validate = password >= 8 ;
        
        if(validate){
          const user = await getUserByEmail(email);
          const passwordMatch = await bcrypt.compare(password, user.password);

          if(!user || !user.password) return null;

          if(passwordMatch){
            return user;
          }
        }
        
      }
      
    })
  ],
}

function validateEmail(email) {
  // Email validation logic here
  // You can use a regular expression or any other method to validate the email format
  // Example regular expression for email validation:
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePassword(password) {
  // Password validation logic here
  // You can use a regular expression or any other method to validate the password format
  // Example regular expression for password validation:
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
} 