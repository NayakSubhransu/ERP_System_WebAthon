

const express = require('express');
const { addStudent, getStudents } = require('../controllers/studentController');

const router = express.Router();

router.post('/', addStudent);
router.get('/', getStudents);

module.exports = router;
