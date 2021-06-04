import express from 'express';
import tasksRoutes from './routes/tasks.routes'
import morgan from 'morgan'//permite ver las peticiones que van llegando
import cors from 'cors'

const app = express();
//settings
app.set('port', process.env.PORT || 3000);

//middlewares
//It is necesary to read properly the body of the request 
app.use(morgan('dev'));
app.use(cors());//cualquier servidor puede realizar peticiones en la aplicacion
app.use(express.json());
app.use(express.urlencoded({extended: false}));//permite entender las peticiones a traves de formularios html


app.use('/api/task',tasksRoutes);

export default app;