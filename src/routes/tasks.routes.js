import Router from 'express'

const router = Router();

router.get('/', (req,res) => {
    res.json({
        message: 'Welcome to my application'
    });
});

router.get('/tasks',(req,res) => {
    res.send('Tasks');
});

router.post('/',(req,res) => {
    res.json('saving a new task');
})

export default router;