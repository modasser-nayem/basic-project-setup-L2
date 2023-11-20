import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/modules/student/student.route';
const app: Application = express();

// parser use
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Application Routes
app.use('/api/v1/students', StudentRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to project 0');
});

export default app;
