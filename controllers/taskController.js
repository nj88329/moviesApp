const axios = require('axios');
const Task = require('../models/taskModels');

const  addTask = async( req, res )=>{
   try{
    const addedTask = req.body;
    console.log('redssd', addedTask)
     const task = await Task.create({movie:addedTask , taskStatus : 'To Do'});
     console.log('task', task)
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
 

const getAllTask = async(req, res)=>{
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


module.exports = { addTask , deleteTask , getAllTask , deleteAllTask }