import React from "react";
import "./HealthCareCards.css";

const HealthCareCards = () => {
    const healthCareInfo = [
        {
            id: 1,
            title: "Health Record",
            description:
                "View and manage your health record including diagnosis, treatments, and lab results.",
            image: "https://amavic.com.au/files/shutterstock_1511231015.jpg",
        },
        {
            id: 2,
            title: "Prescriptions",
            description:
                "Check your prescriptions and get reminders for medication refills.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0SEypS0cb5c6jDPiKYSiXPaaFqYLIGYuV4g&usqp=CAU",
        },
        {
            id: 3,
            title: "Appointments",
            description:
                "View upcoming appointments, schedule new ones, and get reminders for appointments.",
            image: "https://cdn.papershift.com/20221130212527/time-off-eligibility-for-medical-appointments-for-employees-in-UK-explained-by-Papershift.jpeg",
        },
        {
            id: 4,
            title: "Billing",
            description:
                "View your medical bills, make payments, and manage your insurance information.",
            image: "https://cdn.sanity.io/images/0vv8moc6/medec/c61b86b8832b19e49db86181ea392eca1eb25ff0-5472x3648.jpg?fit=crop&auto=format",
        },
        {
          id: 5,
          title: "Health Education",
          description:
            "Access a library of articles and resources to learn more about health topics.",
          image: "https://thumbs.dreamstime.com/b/stethoscope-alphabet-beads-over-green-background-written-health-education-colorful-alphabet-beads-stethoscope-over-213048559.jpg",
        },
        {
          id: 6,
          title: "TeleMedicine",
          description:
            "Connect with healthcare providers remotely for consultations and appointments.",
          image: "https://www.news-medical.net/image.axd?picture=2021%2F2%2FGrjH4AAAAASUVORK5CYII%3D.png",
        }
    ];

    return (
        <div className="health-care-container">
            {healthCareInfo.map((info) => (
                <div className="health-care-card" key={info.id}>
                    <img src={info.image} alt={info.title} />
                    <h3 >{info.title}</h3>
                    <p className="border bg-info bg-opacity-10">{info.description}</p>
                </div>
            ))}
        </div>
    );
};

export default HealthCareCards;
