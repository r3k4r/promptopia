import { prisma } from "@/app/lib/db";


export const GET = async (request, { params }) => {
    try {
        const prompt = await prisma.prompt.findUnique({
            where: {
                id: params.id
            },
            include: {
                creator: true
            }
        })
        return new Response(JSON.stringify(prompt), { status: 200 })
    }catch(error) {
        return new Response("Failed to fetch prompt", { status: 500 })
}

}
export const DELETE = async (request, { params }) => {
    try {
        
        await prisma.prompt.delete({ where: { id: params.id } })

        return new Response("Prompt deleted successfully", { status: 200 });
    } catch (error) {
        return new Response("Error deleting prompt", { status: 500 });
    }
};




