import axios, { Axios } from 'axios';
import React, { useState } from 'react'
import "./index.css"

const initialState = {
    StudentID: "",
    FirstName: "",
    LastName: "",
    Email: "",
    Contact: "",
    Address: "",
    Courses: ""
};

const NewStudent = () => {
    const [state, setState] = useState(initialState);
    const { StudentID, FirstName, LastName, Email, Contact, Address, Courses } = initialState;
    const addContact = async (data) => {
        const response = await axios.post("http://localhost:7000/student", data)
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!FirstName) {
            alert("Enter all fields");
        } else {
            addContact(state);
        }
    };
    const handleInputChange = (e) => {
        let { StudentID, FirstName, LastName, Email, Contact, Address, Courses } = e.target.value;
        setState({ ...state, [e.target.name]: [e.target.value] });
    };
    return (
        <>
            <h3>Create New Student</h3>
            <form className='container' onSubmit={handleSubmit}>
                <div>
                    <label>StudentID</label>
                    <input type="number" id="StudentID" name="StudentID" placeholder='Student ID' required autoFocus onChange={handleInputChange} value={StudentID} />
                </div>
                <div>
                    <label>FirstName</label>
                    <input placeholder='First Name' id="FirstName" name="FirstName" required onChange={handleInputChange} value={FirstName} />
                </div>
                <div>
                    <label>LastName</label>
                    <input required placeholder='Last Name' id="LastName" name="LastName" onChange={handleInputChange} value={LastName} />
                </div>
                <div>
                    <label>Email</label>
                    <input type={"email"} required placeholder='Email' id="Email" name="Email" onChange={handleInputChange} value={Email} />
                </div>
                <div>
                    <label>Contact</label>
                    <input type={"number"} required placeholder='Contact' id="Contact" name="Contact" onChange={handleInputChange} value={Contact} />
                </div>
                <div>
                    <label>Address</label>
                    <input required placeholder='Address' id="Address" name="Address" onChange={handleInputChange} value={Address} />
                </div>
                <div>
                    <label>Courses</label>
                    <input required placeholder='Courses' id="Courses" name="Courses" onChange={handleInputChange} value={Courses} />
                </div>
                <div>
                    <input type="submit" value="Add" />
                </div>
            </form>
        </>
    )
}

export default NewStudent