import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import "./landing.css";


function Landing() {
    const drawingList = useSelector( state=> state.drawingList);
    const {loading} = drawingList;
  return (<>
    {loading?<Loading/>:
    <div className="slider">
  
    <div className="slide">
    <img src="images/a.jpg" alt=""/>
    </div>
    <div className="slide">
    <img src="images/b.jpg" alt=""/>
    </div>
    <div className="slide">
    <img src="images/c.jpg" alt=""/>
    </div>
    <div className="slide">
    <img src="images/d.jpg" alt=""/>
    </div>
    <div className="slide">
    <img src="images/e.jpg" alt=""/>
    </div>
    
    <div className="absolute">
        <h1>Welcome to my Photo Gallery</h1>
        <p>Bringing realism to you, and imaginations to life.</p>

        <Link to="/gallery"><button className="btn1">Go To Gallery</button></Link>
    </div>
    <div className="logo">
 <img src="images/DP.jpg" alt=""/>
 <h3>ISIVEN PENCILS</h3>
</div>
</div>
    }
  
   </>
    )
}

export default Landing;
