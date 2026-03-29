import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { database } from './config/database.js';
import { userRoutes } from './routes/user.routes.js';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);

const startServer = async () => {
    try {
        await database.sync();
        console.log('Database synced successfully');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Error starting server:', error);

    }
}