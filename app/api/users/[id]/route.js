import { prisma } from "@/app/lib/db";


export const GET = async(request, {params})=>{
    try{
        const user = await prisma.user.findMany({
            where : {
                id : params.id
            }
        })

        return new Response(JSON.stringify(user), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch prompts created by user", { status: 500 })
    }
}