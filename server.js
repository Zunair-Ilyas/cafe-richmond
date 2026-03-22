const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.static("public")); // 👈 ADD THIS
app.use(express.json());

mongoose.connect("mongodb+srv://Zunair:fNMv6Dj5fTCtz4AA@task-manager.hendyep.mongodb.net/DSA-Project?retryWrites=true&w=majority&appName=Task-Manager");


const Student = mongoose.model("Student", {
    firstName: String,
    lastName: String,
    regNo: String,
    subjects: [String],
    cgpa: Number
});

app.get("/student/:regNo", async (req, res) => {
    const student = await Student.findOne({ regNo: req.params.regNo });
    res.json(student);
});

app.listen(5000, () => console.log("Running"));