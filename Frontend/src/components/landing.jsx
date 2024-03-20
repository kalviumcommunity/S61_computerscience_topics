import React from "react";
import "./landing.css";
import logo from "../assets/logo-transparent-svg.svg"

const Landing = () => {
    return (
        <div className="mainlanding">
            <nav>
            <div className="logo-containter">
              <img src={logo} alt="" />
            </div>
            </nav>
            <div className="heading">
            <h1>Computer Science Topics</h1>
            <p>Unlocking the mysteries of the digital universe, one topic at a time. 🔍💻🌌 !!!</p>
            <div>
                <button className="btn">Explore Topics</button>
            </div>
            </div>
        </div>
    )
}
export default Landing;