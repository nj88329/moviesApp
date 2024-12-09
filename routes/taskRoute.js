const router = require('express').Router();
const { addTask , deleteTask , getAllTask , deleteAllTask , getTask }= require('../controllers/taskController');
const  { verifyToken } =  require('../middleware/verifyToken')


router.use(verifyToken);

router.get('/', getAllTask );

router.get('/:name', getTask );

router.post('/addTask', addTask );
 
// router.post('/pdf', addPdf );

router.put('/deleteTask/:id', deleteTask);

router.delete('/delete',deleteAllTask);

module.exports = router;


