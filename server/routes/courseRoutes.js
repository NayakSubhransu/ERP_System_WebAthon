

const express = require('express');
const { addCourse, getCourses } = require('../controllers/courseController');


// router.post('/', addCourse);
// router.get('/', getCourses);



const express = require('express');
const router = express.Router();
const Course = require('../models/courseModel');
const Student = require('../models/studentModel');

// Get all courses
router.get('/', async (req, res) => {
    try {
        const courses = await Course.find();
        res.json(courses);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Register for a course
router.post('/:studentId/register/:courseId', async (req, res) => {
    try {
        const student = await Student.findById(req.params.studentId);
        const course = await Course.findById(req.params.courseId);

        if (!student || !course) {
            return res.status(404).json({ message: "Student or Course not found" });
        }

        student.coursesEnrolled.push(course._id);
        await student.save();

        res.status(201).json({ message: "Registered successfully", student });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

//Update Courses

// In routes/courseRoutes.js
router.put('/:id', async (req, res) => {
    try {
        const course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!course) return res.status(404).send('Course not found.');
        res.json(course);
    } catch (err) {
        res.status(400).send(err.message);
    }
});










module.exports = router;
