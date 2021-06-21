import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listDrawings } from "../actions/drawingActions";
import Header from "../components/Header";
import "../../src/index.css"
import Loading from "../components/Loading";



const Home =()=>{
   const drawingList = useSelector( state=> state.drawingList);
   const {loading, drawings, error} = drawingList;
   const dispatch = useDispatch()
   
   useEffect(()=>{
     
      dispatch(listDrawings());
   }, [dispatch])

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



    return(<>
 <a href="https://api.whatsapp.com/send?phone=+2348141680547" className="whatsapp">
<img id="whatsapp"  src="/images/whatsapp.jpeg" alt=""/>
</a>
<a href="https://api.whatsapp.com/send?phone=+2348141680547" id="chat"className="chat"
 style={{visibility: "hidden"}}
  >Contact Me</a>
      
      <div className="grid-container">
     <Header/>
     {
      loading ? (
        <Loading/>
      ) :
       error ? (
        <div>{error}</div>
      ) : 
      
      <main>
      
      <ul className="drawings">
      {
        drawings.map(drawing=>
          <li key={drawing._id}>
      <div className="drawing">
                
                <img src={drawing.image} alt=""/>
                
                <div className="drawing-name">
             {drawing.name}
            </div>
           </div>
      </li>
          
          )
      }
      
      </ul>
       </main> 

      }
          <footer className=" center">By ChidesTechnologies@2021</footer> 
      </div>
    </>)
};

export default Home;