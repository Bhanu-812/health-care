import React from "react";
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";
import { BsFacebook } from "react-icons/bs";
import {
    AiFillInstagram,
    AiFillYoutube,
    AiFillTwitterCircle,
    AiOutlineSearch,
    AiOutlineHistory,
} from "react-icons/ai";
import { IoLocationSharp, IoMailSharp, IoCall } from "react-icons/io5";
import {BiLogIn} from 'react-icons/bi'
import {GiOpenGate} from 'react-icons/gi'
const Foot = () => {
    return (
        <Box style={{
            position: "relative",
            // left: 0,
            // bottom: 0,
            // width: "100%"
        }}>
            <h1
                style={{
                    color: "green",
                    textAlign: "center",
                    marginTop: "-50px",
                }}
            >
                MediCare: Online HealthCare Portal
            </h1>
            <Container>
                <Row>
                    <Column>
                        <Heading>About Us</Heading>
                        <FooterLink href="#">Aim</FooterLink>
                        <FooterLink href="#">Vision</FooterLink>
                        <FooterLink href="#">Testimonials</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Our Services</Heading>
                        <FooterLink href="#">
                            <AiOutlineSearch /> Find a Doctor
                        </FooterLink>
                        <FooterLink href="#"><GiOpenGate/> Make an Appointment</FooterLink>
                        <FooterLink href="#">
                            <AiOutlineHistory /> Record History
                        </FooterLink>
                        <FooterLink href="#"><BiLogIn/> Register for Service</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Contact Us</Heading>
                        <FooterLink href="#">
                            <IoLocationSharp /> Gus I/O, Hyd-2004
                        </FooterLink>
                        <FooterLink href="#">
                            <IoMailSharp /> medi@gmail.com
                        </FooterLink>
                        <FooterLink href="#">
                            <IoCall /> +91 85005 73885
                        </FooterLink>
                        {/* <FooterLink href="#"></FooterLink> */}
                    </Column>
                    <Column>
                        <Heading>Social Media</Heading>
                        <FooterLink href="#">
                            <i className="fab fa-facebook-f">
                                <span style={{ marginLeft: "10px" }}>
                                    <BsFacebook /> Facebook
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-instagram">
                                <span style={{ marginLeft: "10px" }}>
                                    <AiFillInstagram /> Instagram
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-twitter">
                                <span style={{ marginLeft: "10px" }}>
                                    <AiFillTwitterCircle /> Twitter
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-youtube">
                                <span style={{ marginLeft: "10px" }}>
                                    <AiFillYoutube /> Youtube
                                </span>
                            </i>
                        </FooterLink>
                    </Column>
                </Row>
            </Container>
        </Box>
    );
};
export default Foot;
