import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export const Navbar = () => {
    const [activeTab, setActiveTab] = useState("Home");
    const location = useLocation();
    useEffect(() => {
        if (location.pathname === "/") {
            setActiveTab("Home");
        } else if (location.pathname === "/newStudent") {
            setActiveTab("New Student")
        }
    }, [location])
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">GR Tech</a>
                <Link to="/">
                    <p className={`${activeTab === "Home" ? "active" : ""}`} onClick={() => setActiveTab("Home")}>Home</p>
                </Link>
                <Link to="/newStudent">
                    <p className={`${activeTab === "newStudent" ? "active" : ""}`} onClick={() => setActiveTab("New Student")}>New Student</p>
                </Link>
                <Link to="/newCourse">
                    <p className={`${activeTab === "newCourse" ? "active" : ""}`} onClick={() => setActiveTab("New Student")}>New Course</p>
                </Link>
            </div>
        </nav>
    );
};