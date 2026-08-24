
# 🎓 GC Webathon 2023 — ERP System

An **all-in-one Enterprise Resource Planning (ERP) platform** architected for academic institutions to bridge students, faculty, and administrative staff across **course registration, attendance tracking, feedback cycles, grade distribution, student management, and campus resource management**.

---

## 🚀 Key Highlights & Modules

### 🎓 Student Portal

#### 👤 Student Profile Dashboard
- Detailed student records
- Personal information management
- Emergency contact details
- Academic history

#### 📚 Course Registration
- Interactive semester enrollment dashboard
- Register for available courses
- Monitor registered courses
- View assigned courses

#### 📊 Attendance Tracker
- Real-time attendance visibility
- Subject-wise attendance records
- Attendance tracking across registered courses

#### 📝 Feedback Collection
- Standardized feedback forms
- Course and instructor reviews
- Student feedback submission workflow

#### 🎯 Grades & Evaluation
- View published academic results
- GPA and academic performance indicators
- Term-wise evaluation records

#### 🏸 SAC Equipment Request Desk
- Request sports and laboratory equipment
- Issue equipment through SAC workflow
- Track equipment returns
- Manage pending equipment requests

---

### 🛠️ Administrative & Faculty Portal

#### 📊 Attendance Manager
- Record student attendance
- Update attendance logs
- Manage attendance by course and section

#### 📚 Course Administration
- Add and edit courses
- Manage course catalogs
- Configure prerequisites
- Manage student enrollments

#### 📈 Feedback Analytics
- Monitor student feedback submissions
- Aggregate course and instructor feedback
- Support academic quality audits

#### 📦 Inventory & Equipment Management
- Manage SAC inventory
- Authorize equipment check-outs
- Track pending returns
- Update equipment availability and stock counts

---

# 🏗️ System Architecture

```text
ERP_System_For_WebAthon/
│
├── client/                                # React Frontend Application
│   ├── public/                            # Static assets, manifest & icons
│   │
│   ├── src/
│   │   ├── assets/                        # Brand vectors and images
│   │   │
│   │   ├── componenets/                   # Student-Facing Modules
│   │   │   ├── Attendence/                # Attendance viewer & styles
│   │   │   ├── CourseRegistration/        # Student course selection
│   │   │   ├── Feedback/                  # Feedback forms
│   │   │   ├── Grading/                   # Academic results & grades
│   │   │   ├── SACEquipment/              # Equipment issue/return
│   │   │   └── StudentProfile/            # Personal & academic details
│   │   │
│   │   ├── componenetsAdmin/              # Admin & Faculty Modules
│   │   │   ├── Attendence/                # Faculty attendance manager
│   │   │   ├── CourseRegistration/        # Course catalog manager
│   │   │   ├── Equipments/                # SAC inventory manager
│   │   │   └── Feedback/                  # Feedback aggregator
│   │   │
│   │   ├── LoginPage/                     # Authentication & role routing
│   │   ├── SACContext.jsx                 # Global SAC state management
│   │   ├── Header.jsx                     # Application header
│   │   ├── Sidebar.jsx                    # Navigation sidebar
│   │   ├── App.jsx                        # Layout & route configuration
│   │   └── main.jsx                       # React DOM entry point
│   │
│   ├── package.json
│   └── vite.config.js
│
└── server/                                # Express.js REST API
    ├── controllers/
    │   ├── courseController.js             # Course CRUD & registration
    │   └── studentController.js            # Student profile operations
    │
    ├── models/
    │   ├── courseModel.js                  # Course schema definitions
    │   └── studentModel.js                 # Student schema definitions
    │
    ├── routes/
    │   ├── courseRoutes.js                 # /api/courses routes
    │   └── studentRoutes.js                # /api/students routes
    │
    ├── server.js                           # DB connection & API bootstrap
    └── package.json
````

---

# 🧰 Tech Stack

| Layer                 | Technology                       |
| --------------------- | -------------------------------- |
| **Frontend UI**       | React 18, Vite, CSS Modules      |
| **UI Design**         | Custom Flexbox / Grid Design     |
| **State Management**  | React Context API (`SACContext`) |
| **Backend Engine**    | Node.js, Express.js              |
| **API Architecture**  | REST API                         |
| **Database**          | MongoDB                          |
| **ODM**               | Mongoose                         |
| **HTTP / API Tools**  | Axios / Fetch                    |
| **Development Tools** | NPM, Postman                     |

---

# ⚡ Quickstart Guide

## Prerequisites

Make sure the following are installed:

* Node.js `>= 16.x`
* npm `>= 8.x`
* Local MongoDB instance **or** MongoDB Atlas
* Git

---

## 1. Clone the Repository

```bash
git clone https://github.com/NayakSubhransu/ERP_System_WebAthon.git

cd ERP_System_WebAthon
```

---

## 2. Environment Configuration

Create a `.env` file inside the `server/` directory:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/erp_system
NODE_ENV=development
```

For MongoDB Atlas, replace `MONGO_URI` with your MongoDB Atlas connection string.

---

## 3. Backend Installation & Run

```bash
# Enter server directory
cd server

# Install dependencies
npm install

# Start development server
node server.js
```

The backend will run at:

```text
http://localhost:5000
```

---

## 4. Frontend Installation & Run

Open a new terminal:

```bash
# Enter client directory
cd client

# Install dependencies
npm install

# Launch frontend with Vite
npm run dev
```

The frontend will run at:

```text
http://localhost:5173
```

---

# 🔌 API Documentation

## 📚 Course Endpoints

### Base Route

```text
/api/courses
```

| Method | Endpoint                | Description                              |
| ------ | ----------------------- | ---------------------------------------- |
| `GET`  | `/api/courses`          | Fetch all available courses              |
| `POST` | `/api/courses`          | Create a new course offering             |
| `POST` | `/api/courses/register` | Register a student for a specific course |

---

## 👨‍🎓 Student Endpoints

### Base Route

```text
/api/students
```

| Method | Endpoint            | Description                           |
| ------ | ------------------- | ------------------------------------- |
| `GET`  | `/api/students`     | Retrieve student directory            |
| `GET`  | `/api/students/:id` | Get complete student profile          |
| `PUT`  | `/api/students/:id` | Update contact or profile information |

---

# 📸 Screenshots of the Working Application

### Screenshot 1

![ERP System Screenshot 1](https://github.com/NayakSubhransu/ERP_System_WebAthon/assets/143834549/24be8c58-52d9-49e8-a413-e0376d508649)

### Screenshot 2

![ERP System Screenshot 2](https://github.com/NayakSubhransu/ERP_System_WebAthon/assets/143834549/b8a36fae-2f9c-45b0-ac42-9e6e955f60ca)

### Screenshot 3

![ERP System Screenshot 3](https://github.com/NayakSubhransu/ERP_System_WebAthon/assets/143834549/f6dd7c27-1303-41e6-8287-e921c29e6d4d)

### Screenshot 4

![ERP System Screenshot 4](https://github.com/NayakSubhransu/ERP_System_WebAthon/assets/143834549/ea48e6f1-3b4a-4b2e-b054-6c0f8bbd3586)

### Screenshot 5

![ERP System Screenshot 5](https://github.com/NayakSubhransu/ERP_System_WebAthon/assets/143834549/c423b5ae-4734-4bb2-bee9-a42361c0276e)

### Screenshot 6

![ERP System Screenshot 6](https://github.com/NayakSubhransu/ERP_System_WebAthon/assets/143834549/ed0d9e47-f495-42f5-95cf-305e41ebd6c6)

### Screenshot 7

![ERP System Screenshot 7](https://github.com/NayakSubhransu/ERP_System_WebAthon/assets/143834549/c3a9a9f7-d3ca-486b-a6ca-2a296355bcfb)

### Screenshot 8

![ERP System Screenshot 8](https://github.com/NayakSubhransu/ERP_System_WebAthon/assets/143834549/98dec916-acbf-4075-8b1a-7753d0cb39c5)

### Screenshot 9

![ERP System Screenshot 9](https://github.com/NayakSubhransu/ERP_System_WebAthon/assets/143834549/7c575ab5-0203-43fd-a11f-4a39ae20dcae)

### Screenshot 10

![ERP System Screenshot 10](https://github.com/NayakSubhransu/ERP_System_WebAthon/assets/143834549/ef28adfa-b93c-47db-8326-c2765180fd5f)

### Screenshot 11

![ERP System Screenshot 11](https://github.com/NayakSubhransu/ERP_System_WebAthon/assets/143834549/6ca1a8b1-a086-4825-9863-ccb74a865e2a)

---

# 🤝 Contributing

Contributions are welcome and appreciated.

### 1. Fork the Repository

Fork the project repository to your GitHub account.

### 2. Create a Feature Branch

```bash
git checkout -b feature/NewFeature
```

### 3. Commit Your Changes

```bash
git commit -m "feat: Add new module"
```

### 4. Push the Branch

```bash
git push origin feature/NewFeature
```

### 5. Open a Pull Request

Open a Pull Request with a clear description of the changes and improvements.

---

# 🌟 Project Overview

The **GC Webathon 2023 ERP System** provides a centralized academic management platform that brings together student services, faculty operations, and administrative workflows into a single web application.

The system demonstrates a full-stack architecture using **React + Vite on the frontend, Node.js + Express.js for backend REST APIs, and MongoDB + Mongoose for data persistence**.

```





