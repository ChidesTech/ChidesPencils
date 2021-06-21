import React, { useEffect } from "react";
import Header from "../components/Header";

const About = ()=>{
    useEffect(()=>{
        const timer = setTimeout(()=>{
           document.getElementById("chat").style.visibility= "visible";
       
         }, 2500);
         return ()=> clearTimeout(timer)
       
       },[])
       useEffect(()=>{
        const timer = setTimeout(()=>{
           document.getElementById("chat").style.visibility= "hidden";
       
         }, 9000);
         return ()=> clearTimeout(timer)
       
       },[])
    
    return (
        <>
        <a href="https://api.whatsapp.com/send?phone=+2348141680547" className="whatsapp">
<img id="whatsapp"  src="/images/whatsapp.jpeg" alt=""/>
</a>
<a href="https://api.whatsapp.com/send?phone=+2348141680547" id="chat"className="chat"
 style={{visibility: "hidden"}}
  >Contact Me</a>
        <div className="grid-container">
            <Header/>
            <div>
        
        <div className="content">
        <div className="back">
        </div>
        <div className="details">
        <div className="image-details">
        <img src="/images/d.jpg" alt=''/>
        </div>
        <div className="info-details">
        <ul>
        <li>
            <p className="p">
            Chides is a contemporary realist painter who lives and works in Nigeria. A native of Imo state, his colorful paintings pay homage to his homeland. His distinctive personal style emanates joy and peace and expresses the vibrant spirit and atmosphere of the African culture.
                <br/><br/>
                Picturesque landscapes, tropical birds and flowers, musical instruments, and farmers tending to their fields are all brought to life with contrasting and harmonious colors and bold compositions. As the artist explains, “I am a story teller and I welcome you to join me on this visual journey.”
              </p>
              <br/><br/>
              <br/><br/>
           <div  className="p">
               <h2>Contact Information</h2>
               <h3>Phone: 08141680547</h3>
               <h3>Email: dnwosu008@gmail.com</h3>
               <h3>Address: Wisdom Villa, Awka Anambra State</h3>
           </div>
            </li>
        
        </ul>
    </div>
       
        </div>
        </div>
      
        
        </div>
        <footer className="row center">By ChidesTechnologies@2021</footer>
       
        </div>
</>
    )


}



export default About;