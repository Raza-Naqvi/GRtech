import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import Course from '../../components/Course';
import "./index.css"
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Home() {
    const [data, setData] = useState([]);
    useEffect(() => {
        Axios.get("http://localhost:7000/student")
            .then(res => {
                setData(res.data);
            }).catch(err => {
                console.log(err);
            });
    }, []);
    const Delete = async (id) => {
        if (window.confirm("Do you want to delete?")) {
            const response = await axios.delete(`http://localhost:7000/student/${id}`);
            if (response.status === 200) {
                alert("Deleted");
                setData();
            }
        }
    }
    const arr = data.map((data, index) => {
        return (
            <tr>
                <td>{data.studentID}</td>
                <td>{data.firstName}</td>
                <td>{data.lastName}</td>
                <td>{data.email}</td>
                <td>{data.contact}</td>
                <td>{data.address}</td>
                <td>{data.courses}</td>
                <td>
                    <Link to={`/${data.id}`}>
                        <button>Edit</button>
                    </Link>
                    <button onClick={() => Delete(data.id)}>Delete</button>
                </td>
            </tr>
        )
    })
    return (
        <>
            <div className="student">
                <h2>Student</h2>
                <table className='container'>
                    <tr>
                        <th>Student ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Address</th>
                        <th>Courses</th>
                    </tr>
                    {arr}
                </table>
            </div>
            <div className="course">
                <h2>Course</h2>
                <Course />
            </div>
        </>
    )
}
