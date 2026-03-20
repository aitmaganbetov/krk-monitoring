import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'OK', timestamp: new Date() });
});

// API Routes placeholder
app.get('/api/v1/teachers', (req: Request, res: Response) => {
  res.json({ message: 'List teachers endpoint', data: [] });
});

app.post('/api/v1/evaluations', (req: Request, res: Response) => {
  res.json({ message: 'Create evaluation endpoint', status: 'pending' });
});

app.get('/api/v1/kpi', (req: Request, res: Response) => {
  res.json({ message: 'Get KPI data endpoint', data: {} });
});

// Start server
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
