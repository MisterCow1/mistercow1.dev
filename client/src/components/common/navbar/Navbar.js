import React from "react";

import "./navbar.css";

import pfp from "../../../static/resources/pfp.png";

class Navbar extends React.Component
{
    render()
    {
        return(
            <div class = "navbar">
                <div class = "pfp-container"><img class = "pfp" src = {pfp}></img></div>

                <a class = "" href = "/">Home</a>
            </div>
        );
    }
}

export default Navbar;