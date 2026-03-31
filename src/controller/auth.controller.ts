import type { Request, Response } from "express";
import { AuthService } from "../service/auth.service.js";


export class AuthController {
    private authService: AuthService;

    constructor() {
        this.authService = new AuthService();
    }

    async register(req: Request, res: Response) {
        try {
            const { email, username, password } = req.body;

            const result = await this.authService.register(email, username, password);
            
            return res.status(201).json(result);
        } catch (error) {
            return res.status(500).json({ message: 'Error registering user', error });
        }
        
    }
}