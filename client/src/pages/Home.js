import React from "react";

import Navbar from "../components/common/navbar/Navbar";

import "../static/stylesheets/index.css";

class Home extends React.Component
{
    render()
    {
        return(
            <div>
                <Navbar/>
            </div>
        );
    }
}

export default Home;