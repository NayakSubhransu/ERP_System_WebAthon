

const Student = require('../models/studentModel');

exports.addStudent = async (req, res) => {
  const { name, email, courses } = req.body;
  try {
    const newStudent = new Student({ name, email, courses });
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
