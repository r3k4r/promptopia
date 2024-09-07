import { prisma } from "@/app/lib/db";

export const ForUpdatingPrompt = async (prevstate, formData, req) => {
    const text_area = formData.get("text_area");
    const tag = formData.get("tag");
    
    const url = new URL(req.url);
    const id = url.searchParams.get('id');

    try {
        const prompt = await prisma.prompt.update({
            where: {
                id: id 
            },
            data: {
                prompt: text_area,
                tags: tag
            }
        });

        return new Response(JSON.stringify(prompt), { status: 200 });
    } catch (err) {
        console.log(err);
        return new Response('Internal Server Error', { status: 500 });
    }
};