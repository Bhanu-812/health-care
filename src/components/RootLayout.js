import React from "react";
import Navb from "./Navb/Navb";
import { Outlet } from "react-router-dom";
import Foot from "./Foot/Foot";
function RootLayout() {
    return (
        <div>
            <Navb />
            <div 
            style={{ minHeight: "80vh" }}
             className="mt-1"
             >
                <Outlet />
            </div>
            <div>
                <Foot />
            </div>
        </div>
    );
}

export default RootLayout;
