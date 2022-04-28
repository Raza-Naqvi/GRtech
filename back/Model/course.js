"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const course = new Schema({
    courseId: {
        type: String
    },
    courseName: {
        type: String
    },
    description: {
        type: String
    },
    students: [{
        type: String
    }],
    studentId:{
        type: Schema.Types.ObjectId,
        ref:"Student"
    }
}, {
    timestamps: true
});
module.exports = mongoose.model("Course", course);