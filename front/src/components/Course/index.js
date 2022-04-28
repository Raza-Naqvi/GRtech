import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import "./index.css"

export default function Course() {
    const [data, setData] = useState([]);
    useEffect(() => {
        Axios.get("http://localhost:7000/course")
            .then(res => {
                setData(res.data);
            }).catch(err => {
                console.log(err);
            });
    }, []);
    const arr = data.map((data, index) => {
        return (
            <tr>
                <td>{data.courseId}</td>
                <td>{data.courseName}</td>
                <td>{data.description}</td>
                <td>{data.students}</td>
                <td>
                    <button>Edit</button>
                    <button onClick={(e) => Delete(data.id, e)}>Delete</button>
                </td>
            </tr>
        )
    });
    const Delete = (id, e) => {
        e.preventDefault();
        Axios.delete(`http://localhost:7000/course/${id}`)
            .then(res => {
                setData('Delete successful')
                
            }).catch(err=>{
                console.log(err);
            });
    };
    return (
        <>
            <div className="course">
                <table className='container'>
                    <tr>
                        <th>Course ID</th>
                        <th>Course Name</th>
                        <th>Description</th>
                        <th>students</th>
                    </tr>
                    {arr}
                </table>
            </div>
        </>
    )
}
