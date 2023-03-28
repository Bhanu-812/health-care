import React from "react";
import "./App.css";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Contactus from "./components/Contactus/Contactus";
import Home from "./components/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Dashboard from './components/dashBoard/Dashboard'
import Appointments from "./components/Appointments/Appointments";
// import MedicalRecords from "./components/MedicalRecords/MedicalRecords";
// import Prescriptions from "./components/Prescription/Prescriptions";
// import Health_Edu from "./components/Health_Edu/Health_Edu";


const routerObj = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path:"/dashboard",
                element: <Dashboard />,

            },
            {
                path:'/appointments',
                element: <Appointments/>
            },
            {
                path: "/signup",
                element: <Signup />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/contact-us",
                element: <Contactus />
            },
        ],
    },
]);
const App = () => {
    
    return (
        <div>
            <RouterProvider router={routerObj} />
        </div>
    );
};
export default App;
