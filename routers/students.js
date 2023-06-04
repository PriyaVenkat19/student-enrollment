const express = require("express");
const router = express.Router();
const studentModel = require("../models/students");

// router.get("/", (req, res) => {
//   res.send("Displaying Student details");
// });

router.get("/", async (request, response) => {
  try {
    const students = await studentModel.find();
    response.status(200).json(students);
  } catch (error) {
    response.send(500).json({ message: error.message });
  }
});

router.post("/", async (request, response) => {
  const newStudent = new studentModel({
    name: request.body.name,
    enrolledDepartment: request.body.enrolledDepartment,
    enrollmentDate: request.body.enrollmentDate,
  });
  try {
    const student = await newStudent.save();
    response.status(201).json(student);
  } 
  catch (error) {
    response.send(500).json({ message: error.message });
  }
});

router.patch("/:id", getStudent,async(req, res) => {
    if(req.body.name!=null){
        res.student.name=req.body.name;
    }
    if(req.body.enrolledDepartment!=null){
        res.student.enrolledDepartment=req.body.enrolledDepartment;
    }
    try{
        const updatedStudent= await res.student.save();
        res.status(201).json(updatedStudent);
    }
    catch (error) {
        response.send(500).json({ message: error.message });
      }
//   res.send(`Updating Student details With Id ${req.params.id}`);
});

router.delete("/:id", getStudent,async(req, res) => {
    try{
        await res.student.deleteOne();
        res.status(204).json({message: 'Deleted the user'})
    }
    catch (error) {
        response.send(400).json({ message: error.message });
      }
//   res.send(`Deleting Student details With Id ${req.params.id}`);
});

// router.get("/:id", getStudent, (req, res) => {
//   res.status(200).json(response.student);
// });

async function getStudent(req, res, next) {
  let student;
  try {
    student = await studentModel.findById(req.params.id);
    if (student == null) {
      return res.status(404).json({ message: "Cannot find user with id ${request.params.id}" });
    }
    res.student = student;
    next();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
module.exports = router;