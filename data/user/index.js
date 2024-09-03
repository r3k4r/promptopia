import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getUserByEmail(email) {
    const user = await prisma.user.findUnique({
        where: {
            email,
        },
    });
    return user;
}
export async function getUserById(id) {
    const user = await prisma.user.findUnique({
        where: {
            id,
        },
    });
    return user;
}

