import axios, { Axios } from 'axios';
import React, { useState } from 'react'
import "./index.css"

const initialState = {
    courseId: "",
    courseName: "",
    description: "",
    students: "",
};

const NewCourse = () => {
    const [state, setState] = useState(initialState);
    const { courseId, courseName, description, students } = initialState;
    const addContact = async (data) => {
        const response = await axios.post("http://localhost:7000/student", data)
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!courseName) {
            alert("Enter all fields");
        } else {
            addContact(state);
        }
    };
    const handleInputChange = (e) => {
        let { courseId, courseName, description, students } = e.target.value;
        setState({ ...state, [e.target.name]: [e.target.value] });
    };
    return (
        <>
            <h3>Create New Course</h3>
            <form className='container' onSubmit={handleSubmit}>
                <div>
                    <label>courseId</label>
                    <input type="number" id="courseId" name="courseId" placeholder='course Id' required autoFocus onChange={handleInputChange} value={courseId} />
                </div>
                <div>
                    <label>courseName</label>
                    <input placeholder='courseName' id="courseName" name="courseName" required onChange={handleInputChange} value={courseName} />
                </div>
                <div>
                    <label>description</label>
                    <input required placeholder='description' id="description" name="description" onChange={handleInputChange} value={description} />
                </div>
                <div>
                    <label>students</label>
                    <input type={"email"} required placeholder='students' id="students" name="students" onChange={handleInputChange} value={students} />
                </div>
                <div>
                    <button onClick={handleSubmit} type="submit" value="Add" >Submit</button>
                </div>
            </form>
        </>
    )
}

export default NewCourse