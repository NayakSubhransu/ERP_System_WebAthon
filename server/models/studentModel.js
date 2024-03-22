const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: String,
  email: String,
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
  coursesEnrolled: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
});

module.exports = mongoose.model("Student", StudentSchema);



