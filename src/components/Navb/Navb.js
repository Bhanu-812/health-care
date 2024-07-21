import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaBriefcaseMedical, FaHome, FaChartBar, FaCalendarAlt, FaUserPlus, FaEnvelope } from "react-icons/fa";

import "./Navb.css";

function Navb({ isAuthenticated, handleLogout }) {
    return (
        <Navbar className="Na" fixed="top" expand="lg" style={{ 
            background: 'linear-gradient(to right, #1a1a1a, #333333)',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
            <Container>
                <Navbar.Brand href="/" className="text-white d-flex align-items-center">
                    <FaBriefcaseMedical style={{ fontSize: '1.5rem', marginRight: '0.5rem' }} />
                    <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>MediCare</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center">
                        <NavLink
                            className="nav-link mx-2 text-white d-flex align-items-center"
                            style={({ isActive }) => ({
                                color: isActive ? "#4CAF50" : "white",
                            })}
                            to="/"
                        >
                            <FaHome className="me-1" /> Home
                        </NavLink>
                        <NavLink
                            className="nav-link mx-2 text-white d-flex align-items-center"
                            style={({ isActive }) => ({
                                color: isActive ? "#4CAF50" : "white",
                            })}
                            to="/dashboard"
                        >
                            <FaChartBar className="me-1" /> Dashboard
                        </NavLink>
                        <NavLink
                            className="nav-link mx-2 text-white d-flex align-items-center"
                            style={({ isActive }) => ({
                                color: isActive ? "#4CAF50" : "white",
                            })}
                            to="/appointments"
                        >
                            <FaCalendarAlt className="me-1" /> Appointments
                        </NavLink>
                        {!isAuthenticated && (
                            <NavLink
                                className="nav-link mx-2 text-white d-flex align-items-center"
                                style={({ isActive }) => ({
                                    color: isActive ? "#4CAF50" : "white",
                                })}
                                to="/signup"
                            >
                                <FaUserPlus className="me-1" /> Sign Up
                            </NavLink>
                        )}
                        <NavLink
                            className="nav-link mx-2 text-white d-flex align-items-center"
                            style={({ isActive }) => ({
                                color: isActive ? "#4CAF50" : "white",
                            })}
                            to="/contact-us"
                        >
                            <FaEnvelope className="me-1" /> Contact
                        </NavLink>
                        {!isAuthenticated ? (
                            <NavLink
                                className="nav-link mx-2"
                                to="/login"
                            >
                                <Button variant="outline-light">Login</Button>
                            </NavLink>
                        ) : (
                            <Button
                                variant="outline-light"
                                onClick={handleLogout}
                                className="mx-2"
                            >
                                Logout
                            </Button>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navb;