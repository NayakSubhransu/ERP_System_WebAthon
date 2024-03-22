

const Course = require('../models/courseModel');

exports.addCourse = async (req, res) => {
  const { title, description, instructor, schedule } = req.body;
  try {
    const newCourse = new Course({ title, description, instructor, schedule });
    await newCourse.save();
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
