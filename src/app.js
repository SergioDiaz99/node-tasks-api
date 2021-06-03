import express from 'express';
import tasksRoutes from './routes/tasks.routes'

const app = express();

app.set('port', process.env.PORT || 3000);

app.use('/api',tasksRoutes);

export default app;