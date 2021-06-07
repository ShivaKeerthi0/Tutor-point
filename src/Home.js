import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

   
function Home() {
    sessionStorage.setItem("isLogged","false")
     
    return (
        <div >
        
           
            <div className="section"style={{width:"85rem"}} >
            <h3 style={{color:"orange",fontFamily:"cursive" ,fontSize:"2rem",marginLeft:"0rem"}}>Tutor's Point</h3>
            <p style={{fontFamily:"cursive"}}>An awesome place to gain knowlegede !</p>
            <div >
             <Link to="/Courses"  className="btn2">Courses</Link>
             <Link to='/Login'className="btn" style={{fontFamily:"cursive", width:"6rem",marginLeft:"50rem",borderColor:"transparent",backgroundColor:"transparent",letterSpacing:"var(--spacing)",fontSize:"1.2rem",color:"orange"}} >Login</Link>
            <Link to='/SignUp'  style={{fontFamily:"cursive", width:"6rem",marginLeft:"2rem",borderColor:"transparent",backgroundColor:"transparent",letterSpacing:"var(--spacing)",fontSize:"1.2rem",color:"orange"}} >SignUp!</Link>
            </div >
            </div>
            <div style={{margin:"15rem" ,marginTop:"10rem"}}>
               <p style={{fontFamily:"cursive", fontSize:"1.5rem",color:"orange"}}>“ Never regard study as a duty but as an enviable opportunity to learn to know the liberating influence of beauty in the realm of the spirit for your own personal joy and to the profit of the community to which your later works belong."</p>
            <p style={{marginLeft:"43rem",fontFamily:"cursive", fontSize:"1.5rem",color:"orange "}}>~Albert Einstein</p>
            </div>
            
            
                
            
     </div>
       
            
            
     
    )
}

export default Home
