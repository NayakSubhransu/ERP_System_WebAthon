const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const studentRoutes = require('./routes/studentRoutes');
const courseRoutes = require('./routes/courseRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Database connection
mongoose.connect('mongodb://localhost:27017/erpSystem', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Use routes
app.use('/api/students', studentRoutes);
app.use('/api/courses', courseRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
