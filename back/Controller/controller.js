const student = require("../Model/student");
const course = require("../Model/course");

exports.newStudent = async (req, res) => {
    // const a = await course.findOne({ _id: req.body._id });
    let std = new student({
        studentID: req.body.studentID,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        contact: req.body.contact,
        address: req.body.address,
        courses: req.body.courses,
        // courseID: req.body._id
    });
    await std.save((err, todo) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).json(todo);
        }
    });
};

exports.listStudent = async (req, res) => {
    student.find({}, (fail, pass) => {
        if (fail) {
            res.status(500).send(fail);
        } else {
            res.status(200).json(pass);
        }
    });
    // student.find().populate({ path: "Course", }).exec(function (err, pass) {
    //     if (err) {
    //         res.status(500).send(err);
    //         console.log(err);
    //     } else {
    //         res.status(200).json(pass);
    //     };
    // });
};

exports.deleteStudent = async (req, res) => {
    await student.findByIdAndRemove(req.params.id).exec((err, deleteItem) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(deleteItem);
        }
    })
};

exports.updateStudent = async (req, res) => {
    student.findByIdAndUpdate(
        req.params.id, {
        $set: req.body
    },
        (err, post) => {
            if (err) {
                res.status(400).json(err);
            } else {
                res.status(200).json({ message: "Student Updated" });
            };
        }
    );
};

exports.newCourse = async (req, res) => {
    const a = await student.findOne({ _id: req.body._id });
    let cou = new course({
        courseId: req.body.courseID,
        courseName: req.body.courseName,
        description: req.body.description,
        students: req.body.students,
        studentId: req.body._id
    });
    await cou.save((err, todo) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).json(todo);
        }
    });
};

exports.listCourse = async (req, res) => {
    course.find({}, (fail, pass) => {
        if (fail) {
            res.status(500).send(fail);
        } else {
            res.status(200).json(pass);
        }
    });
};

exports.updateCourse = async (req, res) => {
    course.findByIdAndUpdate(
        req.params.id, {
        $set: req.body
    },
        (err, post) => {
            if (err) {
                res.status(400).json(err);
            } else {
                res.status(200).json({ message: "Course Updated" });
            };
        }
    );
};

exports.deleteCourse = async (req, res) => {
    await course.findByIdAndRemove(req.params.id).exec((err, deleteItem) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(deleteItem);
        }
    })
};