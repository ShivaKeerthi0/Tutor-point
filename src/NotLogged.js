import React from 'react'
import Search from './Search'
import {Link} from 'react-router-dom'

function NotLogged(props) {
    return (
        <div>
           <div className="section"style={{width:"85rem"}}>
           <h3 style={{color:"orange",fontFamily:"cursive" ,fontSize:"2rem",marginLeft:"0rem"}}>Tutor's Point</h3>
            <p style={{fontFamily:"cursive"}}>An awesome place to gain knowlegede !</p>
            <Link to='/Login' style={{fontFamily:"cursive", width:"6rem",marginLeft:"65rem",borderColor:"transparent",backgroundColor:"transparent",letterSpacing:"var(--spacing)",fontSize:"1.2rem",color:"orange"}} >Login</Link>
            <Link to='/SignUp' style={{fontFamily:"cursive", width:"6rem",marginLeft:"3rem",borderColor:"transparent",backgroundColor:"transparent",letterSpacing:"var(--spacing)",fontSize:"1.2rem",color:"orange"}} >SignUp!</Link>
            <Link to="/"style={{fontFamily:"cursive", width:"6rem",marginLeft:"3rem",borderColor:"transparent",backgroundColor:"transparent",letterSpacing:"var(--spacing)",fontSize:"1.2rem",color:"orange"}} >Back</Link>
        </div>
        <Search   val={props.val}  change={props.change}/>
        
        
        <div style={{marginTop:"5rem"}}>
            {
                props.count.map((course,index)=>{
                    return(
                        <div  key={index} style={{ borderBottom:"solid",borderBottomColor:"orange",marginRight:"2rem",marginLeft:"5rem",width:"70rem", display: "grid",gridTemplateColumns:"1fr 2fr"}}>
                         <div >
                          <img src={course.img }style={{margin:"3rem",marginTop:"2rem", height:"10rem",width:"15rem"}} alt=""></img>
                          </div>
                          <div  >
                          <p style={{fontFamily:"cursive",color:"red",fontSize:"1.5rem", margin:"3rem"}}>{course.name}</p>
                          <p style={{fontFamily:"cursive",color:"black",fontSize:"1.5rem",margin:"3rem"}}>Rs.{course.price}</p>
                           <Link to="/Login"  style={{ border:"solid", borderColor:"black",borderWidth:"2px",backgroundColor:"lightgray",display:"block",color:"orange",fontSize: "1.2rem",fontFamily:"cursive",marginLeft:"43rem", marginTop:"1rem",  marginRight:"1rem", marginBottom:"2rem",borderRadius:"var(--radius)",padding: "0.25rem 0.5rem",cursor:"pointer" }} >Register</Link>
                          </div>
                        </div>
                    )
                })
            }
            
        </div>
         
        </div>
    )
}

export default NotLogged
