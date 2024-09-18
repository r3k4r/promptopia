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

export const PATCH = async (request) =>{
    const { isTwoFactorEnabled, id } = await request.json();

    try{
        const updatingTwoFactorColumn = await prisma.user.update({
            where : {
                id
            }, 
            data : {
                isTwoFactorEnabled : isTwoFactorEnabled
            }
        })

        return new Response(JSON.stringify(updatingTwoFactorColumn), { status: 200 })

    }catch(err){
        return new Response("Failed to update two-factor status", { status: 500 })
    }
}