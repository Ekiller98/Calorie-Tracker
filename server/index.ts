import express, { Request, Response } from 'express';
import authRoutes from './routes/auth';
import cors from 'cors';


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON request bodies
app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3000', // allow your frontend
  credentials: true // optional if you plan to send cookies
}));

// Mount auth routes at /api
//The /login route inside authRoutes becomes /api/login
app.use('/api', authRoutes);


// Test route to check if server works
app.get('/', (req: Request, res: Response) => {
  res.send('API is running...');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});