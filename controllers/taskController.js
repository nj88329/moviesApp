const axios = require('axios');
const Task = require('../models/taskModels');
const Users = require('../models/usersModel')

const  addTask = async( req, res )=>{
   try{
    const addedTask = req.body;
    
    const userIdFromToken = req.user.uid; // Assuming 'uid' is in the decoded token
     console.log('token',userIdFromToken)
      
        // Find the user by uid
        const user = await Users.findOne({ uid: userIdFromToken });
        
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

     const task = await Task.create({
        movie:addedTask , 
        taskStatus : 'To Do' ,
         user_id : user._id
        });
   
    res.status(201).json(task);
   }catch(err){
    res.status(400).json(err)
   }
}


const  addPdf = async( req, res )=>{
    try{
     const addedPdf = req.body;
      const task = await Task.create({name:addedPdf.name , taskStatus : 'To Do'});
     res.status(201).json(task);
    }catch(err){
     res.status(400).json(err)
    }
 }
 

 const getTask =async(req, res)=>{

   console.log('req.user.getTask',req.user ) 

   try{
        const getTask = await Task.findById(movie.title);
        console.log(getTask);
          res.status(200).json(getTask);
   }catch(err){
    res.status(400).json(err);
   }

 }

const getAllTask = async(req, res)=>{
    
    const userIdFromToken = req.user.uid; // Assuming 'uid' is in the decoded token

     console.log('user', req.user.user_id)
    try{
        const getTasks = await Task.find();
          res.status(200).json(getTasks);
    }catch(err){
        res.status(400).json(err);
    }
}

const deleteTask = async(req, res)=>{
    try{
        console.log('iuuppda', req.params.id )
        const TaskToDelete = await Task.findByIdAndUpdate(req.params.id,{taskStatus :'Done'} ,{new:true});
         res.status(200).json(TaskToDelete); 
    }catch(err){
        res.status(400).json({message:"Error while deleting the task"});
    }
}

const deleteAllTask = async(req, res)=>{
    try{
        await Task.deleteMany({});
       res.status(200).json({message:'tasks deleted'})
    }catch(err){
        res.status(400).json({message:"Error while deleting the task"});
    }
}


module.exports = { addTask , deleteTask , getAllTask , deleteAllTask  , getTask }