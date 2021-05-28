import React from 'react'
import {Redirect } from 'react-router-dom'
function JsIntro() {
      
        if (sessionStorage.getItem("isLogged").localeCompare("false")===0)
      {
         
         return(  <Redirect to="/Login"></Redirect>)
          
      }
      else{
       return( 
           <div style={{marginLeft:"12rem",marginTop:"2rem"}} >
            <h3 style={{fontFamily:"cursive",fontSize:"1.2rem",color:"orange"}}>JS Introduction</h3>
            <p style={{fontFamily:"cursive",fontSize:"1rem",color:"black"}}>JavaScript is the world's most popular programming language.</p><br></br>
            <p style={{fontFamily:"cursive",fontSize:"1rem",color:"black"}}>JavaScript is the programming language of the Web.</p><br></br>
            <p style={{fontFamily:"cursive",fontSize:"1rem",color:"black"}}>JavaScript is easy to learn.</p><br></br>
           <h3 style={{fontFamily:"cursive",fontSize:"1.2rem",color:"orange"}}>Why Study JavaScript?</h3> 
          <p style={{fontFamily:"cursive",fontSize:"1rem",color:"black"}}>JavaScript is one of the 3 languages all web developers must learn:</p><br></br>
            <p style={{fontFamily:"cursive",fontSize:"1rem",color:"black"}}>1. HTML to define the content of web pages</p><br></br>
            <p style={{fontFamily:"cursive",fontSize:"1rem",color:"black"}}>2. CSS to specify the layout of web pages</p><br></br>
            <p style={{fontFamily:"cursive",fontSize:"1rem",color:"black"}}>3. JavaScript to program the behavior of web pages</p><br></br>
            <p style={{fontFamily:"cursive",fontSize:"1rem",color:"black"}}>This tutorial will teach you JavaScript from basic to advanced.</p><br></br>
        </div>
    )
      }

}

export default JsIntro

