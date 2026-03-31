import type { Auth } from "../entity/auth.entity.js";


export interface IAuthRepository {
    findByEmail(email: string): Promise<Auth | null>;
}