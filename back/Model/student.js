const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const student = new Schema({
    studentID: {
        type: String
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    contact: {
        type: String
    },
    address: {
        type: String
    },
    courses: {
        type: String
    },
    // courseID: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Course"
    // }
}, {
    timestamps: true
}, {
    strict: false
});
module.exports = mongoose.model("Student", student);