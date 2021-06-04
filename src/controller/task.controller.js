import Task from '../models/Task'

export const saveTask = async (req,res) => {

    if(!req.body.tittle){
        return res.status(400).json({
            message: 'Content cannot be empty!'
        });
    }
    try{
        const newTask = new Task ({
            tittle: req.body.tittle,
            description: req.body.description,
            done: req.body.done ? req.body.done : false
        }) ;
        const task = await newTask.save();
        res.json(task);
    }catch(e){
        res.status(500).json({
            message: e.message || 'Something goes wrong saving the task'
        })
    }
}

export const findAllTasks = async (req,res) => {
    try{
        const tasks = await Task.find();
        res.json(tasks);
    }catch(e){
        res.status(500).json({
            message: e.message || 'Something goes wrong retrieving the tasks'
        })
    }

}

export const findTaskById = async (req,res) => {
    try{
        const task = await Task.findById(req.params.id);
        res.json(task);
    }catch(e){
        res.status(500).json({
            message: e.message || 'Something goes wrong retrieving the task'
        })
    }

}

export const deleteTaskById = async (req,res) => {
    try{
        await Task.findByIdAndDelete(req.params.id);
        res.json('Task was deleted successfully!');
    }catch(e){
        res.status(500).json({
            message: e.message || 'Something goes wrong deleting the task'
        })
    }

}

export const updateTaskById = async (req,res) => {

    if(!req.body.tittle){
        return res.status(400).json({
            message: 'Content cannot be empty!'
        });
    }

    try{
        const newTask = await Task.findByIdAndUpdate(req.params.id, req.body);
        res.json(newTask);
    }catch(e){
        res.status(500).json({
            message: e.message || 'Something goes wrong updating the task'
        })
    }

}

export const findAllDoneTasks = async (req,res) =>{
    try{
        await Task.find({done: true});
        res.json('Task was updated successfully!');
    }catch(e){
        res.status(500).json({
            message: e.message || 'Something goes wrong retrieving the tasks'
        })
    }

}

export const findAllUndoneTasks = async (req,res) =>{
    try{
        const tasks = await Task.find({done: false});
        res.json(tasks);
    }catch(e){
        res.status(500).json({
            message: e.message || 'Something goes wrong retrieving the tasks'
        })
    }

}

