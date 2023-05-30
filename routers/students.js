const express=require('express')
const router=express.Router()
const studentsModel=require("../models/students");

router.get('/',async(req,res)=>{
    try{
    const students= await studentsModel.find();
    res.status(200).json(students);
    }
    catch(error){
        response.status(500).json({message:error.message});
    }
//   res.send("Displaying Student details")
})

router.post('/',async(req,res)=>{
    const newStudent=new studentsModel({
        name:request.body.name,
        enrolledDepartment:request.body.enrolledDepartment,
        enrolledDate:request.body.enrolleddate

    })
    try{
        const student= await newStudent.save();
        res.status(201).json(student);
    }
    catch(error){
        response.status(500).json({message:error.message});
    }
//   res.send('Adding new student')
})
router.patch('/:id',(req,res)=>{
  res.send(`Updating Student details With Id ${req.params.id}`)
})

router.delete('/:id',(req,res)=>{
  res.send(`Deleting Student details With Id ${req.params.id}`)
})

router.get('/:id',(req,res)=>{
  res.send(`Displaying Student details With Id ${req.params.id}`)
})
module.exports=router;