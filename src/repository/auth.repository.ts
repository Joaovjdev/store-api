import type { IAuthRepository } from "./IAuthRepository.js";
import type { Auth } from "../entity/auth.entity.js";
import { prisma } from "../config/database.js";

export class AuthRepository implements IAuthRepository {
    async findByEmail(email: string): Promise<Auth | null> {
        const auth = await prisma.auth.findUnique({ where: { email } });
        return auth;
    }
}