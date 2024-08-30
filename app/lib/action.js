import { PrismaClient } from "@prisma/client";
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
 
const prisma = new PrismaClient();


 
