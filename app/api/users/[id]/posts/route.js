import { prisma } from "@/app/lib/db";


export const GET = async (request, { params }) => {
    try {

        const prompts = await prisma.prompt.findMany({
            where : {
                userId : params.id
            },
            include : {
                creator : true
            }
        })
        return new Response(JSON.stringify(prompts), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch prompts created by user", { status: 500 })
    }
} 