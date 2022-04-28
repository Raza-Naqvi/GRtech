'use strict';
module.exports = function (app) {
    var abc = require("../Controller/controller");
    app
        .route("/student")
        .post(abc.newStudent)
        .get(abc.listStudent)
    app
        .route("/student/:id")
        .delete(abc.deleteStudent)
        .put(abc.updateStudent)
    app
        .route("/course")
        .post(abc.newCourse)
        .get(abc.listCourse)
    app
        .route("/course/:id")
        .delete(abc.deleteCourse)
        .put(abc.updateCourse)
};