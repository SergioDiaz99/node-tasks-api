import Router from 'express'
import * as taskController from '../controller/task.controller' // es necesario * ya que sino el IDE no nos muestra los metodos de la clase

const router = Router();

/*router.get('/home', (req,res) => {
    res.json({
        message: 'Welcome to my application'
    });
});*/

router.post('/', taskController.saveTask);

router.get('/', taskController.findAllTasks);

//done y undone van primero ya que sino quiere hacer match con el metodo que recibe un id y tira error
router.get('/done', taskController.findAllDoneTasks);

router.get('/undone', taskController.findAllUndoneTasks);

router.get('/:id', taskController.findTaskById);

router.delete('/:id', taskController.deleteTaskById);

router.put('/:id', taskController.updateTaskById);


export default router;