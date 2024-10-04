const router = require('express').Router();
const { addTask , deleteTask , getAllTask , deleteAllTask }= require('../controllers/taskController');


router.get('/', getAllTask );

router.post('/addTask', addTask );
 
// router.post('/pdf', addPdf );

router.put('/deleteTask/:id', deleteTask);

router.delete('/delete',deleteAllTask);

module.exports = router;


