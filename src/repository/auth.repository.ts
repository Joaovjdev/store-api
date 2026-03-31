import type { IAuthRepository } from "./IAuthRepository.js";
import type { Auth } from "../entity/auth.entity.js";
import { prisma } from "../config/database.js";

export class AuthRepository implements IAuthRepository {
    async findByEmail(email: string): Promise<Omit<Auth, "password"> | null> {
        const auth = await prisma.auth.findUnique({
            where: { email },
            select: {
                id: true,
                email: true,
                username: true,
                createdAt: true,
                updatedAt: true,
            },
        });

        return auth;
    }
}