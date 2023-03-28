import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaBriefcaseMedical } from "react-icons/fa";

import "./Navb.css";
// import {RiLightbulbFlashFill} from 'react-icons/ri'
// import {FcIdea} from 'react-icons/fc'

function Navb() {
    return (
        <div>
            <Navbar
                className="Na"
                fixed="top"
                style={{ position: "relative", backgroundColor: "black" }}
            >
                <Container>
                    <Navbar.Brand href="/" className="text-white">
                        <FaBriefcaseMedical /> MediCare
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <NavLink
                            className="nav-link m-2 text-white "
                            style={{
                                "&:hover": {
                                    // textDecoration: "none",
                                    cursor: "pointer",
                                    color: "green",
                                },
                            }}
                            to="/"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            className="nav-link m-2 text-white "
                            style={({ isActive }) => ({
                                color: isActive ? "green" : "white",
                            })}
                            to="/dashboard"
                        >
                            Dashboard
                        </NavLink>
                        <NavLink
                            className="nav-link m-2 text-white "
                            style={({ isActive }) => ({
                                color: isActive ? "green" : "white",
                            })}
                            to="/appointments"
                        >
                            Appointments
                        </NavLink>
                        <NavLink
                            className="nav-link m-2 text-white "
                            style={({ isActive }) => ({
                                color: isActive ? "green" : "white",
                            })}
                            to="/signup"
                        >
                            Sign Up
                        </NavLink>
                        <NavLink
                            className="nav-link m-2 text-white "
                            style={({ isActive }) => ({
                                color: isActive ? "green" : "white",
                            })}
                            to="/contact-us"
                        >
                            Contact Us
                        </NavLink>
                        <NavLink
                            className="nav-link m-2 text-white "
                            style={({ isActive }) => ({
                                color: isActive ? "green" : "white",
                            })}
                            to="/login"
                        >
                            Login
                        </NavLink>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Navb;
