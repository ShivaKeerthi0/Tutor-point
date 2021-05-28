import React from 'react'
import {Link,useLocation,Redirect} from 'react-router-dom'

function Open() {

    const location=useLocation();
 
    if(sessionStorage.getItem("isLogged").localeCompare("false")===0)
      {
         
         return(  <Redirect to="/Login"></Redirect>)
          
      }
      else{
    return (
        <div>
        <div className="section" style={{width:"85rem",height:"10rem"}} >
            <h3 style={{color:"orange",fontFamily:"cursive" ,fontSize:"2rem",marginLeft:"0rem"}}>Tutor's Point</h3>
            <p style={{fontFamily:"cursive"}}>An awesome place to gain knowlegede !</p>
            <p style={{ marginLeft:"25rem",fontFamily:"cursive",color:"white",width:"fit-conent",fontSize:"1.2rem"}}>{location.coursename}</p>
             <Link to="/Courses"style={{ fontFamily:"cursive", width:"6rem",marginLeft:"79rem",borderColor:"transparent",backgroundColor:"transparent",letterSpacing:"var(--spacing)",fontSize:"1.2rem",color:"orange"}} >Back</Link>
      
        </div>
        
            <div style={{float:"left",border:"solid",borderColor:"orange",  width:"25%",height:"40rem"}}>
             <div style={{marginLeft:"2rem",marginBottom:"1rem"}}>
                 <a href="/JsIntro" target="iframe_a" style={{fontFamily:"cursive",fontSize:"1.2rem",color:"orange"}}>JS Intro</a>
             </div>
             <div style={{marginLeft:"2rem",marginBottom:"1rem"}}>
                 <a href="/JsIntro" target="iframe_a" style={{fontFamily:"cursive",fontSize:"1.2rem",color:"orange"}}>JS Loops</a>
             </div>
             <div style={{marginLeft:"2rem",marginBottom:"1rem"}}>
                 <a href="/JsIntro" target="iframe_a" style={{fontFamily:"cursive",fontSize:"1.2rem",color:"orange"}}>JS Classes</a>
             </div>
            </div>
            <div style={{float:"right",width:"75%",height:"40rem"}}>
            <iframe  title="frame" width="100%" height="100%" name="iframe_a"></iframe>
            </div>

        </div>
          
    
       
      
    )
      }
}

export default Open
