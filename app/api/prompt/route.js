import { prisma } from "@/app/lib/db";

export const GET = async (request) =>{
    try{
        const prompts = await prisma.prompt.findMany({
            include: {
                creator: true
            }
        })
        
        return new Response(JSON.stringify(prompts), {status: 200})
    }catch(err){
        return new Response("Failed to fetch all prompts", { status: 500 })
    }
}