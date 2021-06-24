import React, { useEffect } from "react";
import Header from "../components/Header";
import styled from "styled-components";
const AboutPageStyle = styled.div`
padding:  0;
color:black;
.top-section{
  display: flex;
  align-items: center;
  justify-content: center;
}
.left{
  flex:3
}
.right{
  flex:2
}
.about-subheading{
  font-size: 2.2rem;
  margin-bottom: 2rem
}
.about-heading{
  font-size: 3.6rem;
  margin-bottom: 2rem;
  font-family: Georgia, 'Times New Roman', Times, serif;
  
  
}
.about-info{
  margin-bottom: 4rem;
  .para{
    max-width: 100%
  }
}
.right{
  border: 2px solid var(--gray-1)
}
.about-info-items{
  margin-top: 10rem;
}
.about-info-item{
  margin-bottom: 10rem;
}
.about-info-heading{
  font-size:3.6rem;
  margin-bottom:4rem;
  margin-top:10rem;
}
@media only screen and (max-width: 768px){
  padding: 10rem 0 1rem 0;
  .about-info-heading{
    font-size:3rem;
  }
  .top-section{
    flex-direction: column;
    gap:5rem
  }
  .about-subheading{
    font-size: 1.8rem;
  }
  .about-heading{
    font-size: 2.8rem;
  }
  .about-info-heading{
    font-size:3rem;
  }
}
`


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
            <main>
            <AboutPageStyle>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p style={{fontSize:"3rem"}} className="about-subheading">
              Hi, I am Isiven Pencils
            </p>
            <h2 className="about-heading">
              A FINE ARTIST
            </h2>
            <div className="about-info">
            <p >
            Isiven is a contemporary realist painter who lives and works in Nigeria. A native of Imo state, his colorful paintings pay homage to his homeland. His distinctive personal style emanates joy and peace and expresses the vibrant spirit and atmosphere of the African culture.
                <br/><br/>
                Picturesque landscapes, tropical birds and flowers, musical instruments, and farmers tending to their fields are all brought to life with contrasting and harmonious colors and bold compositions. As the artist explains, “I am a story teller and I welcome you to join me on this visual journey.”
              </p>
            </div>
          </div>
          <div className="right">
            <img src="/images/a.jpg" alt=""/>
          </div>
        </div>
       
      </div>
     
        
        {/* <div className="content">
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
        </div> */}
      
      </AboutPageStyle>
        
        </main>
        <footer className=" center">By ChidesTechnologies@2021</footer>
       
        </div>
</>
    )


}



export default About;