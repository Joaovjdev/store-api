import { AuthRepository } from "../repository/auth.repository.js";


export class AuthService {
    private authRepository: AuthRepository;

    constructor() {
        this.authRepository = new AuthRepository();
    }

    async register(email: string, username: string, password: string) {
        const existingAuth = await this.authRepository.findByEmail(email);
        if (existingAuth) {
            throw new Error('User already exists');
        }

        return { message: 'User registered successfully', email, username };

    }

}