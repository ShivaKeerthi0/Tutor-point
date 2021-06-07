import React from 'react'
import './Login.css'
import axios from 'axios'
import { useHistory } from "react-router-dom";
export const data={};
export default function Login() {
    const [email,setEmail]=React.useState('');
    const [pswd,setPswd]=React.useState('');
    const [dsp2,setDisplay2]=React.useState('none');
     const [dsp3,setDisplay3]=React.useState('none');
     const history = useHistory();
     
    const handleSubmit=(e)=>
    {
        e.preventDefault();
      const    data={
            mail:email,
            pwd:pswd,
           
        }
        
         axios.post("http://localhost:8081/Programs/Tutor/validate.php",data).then(res=>{
             console.log(res.data);

             if(res.data.Username)
             {
                 
                  sessionStorage.setItem("isLogged","true")
                  sessionStorage.setItem("mail",data.mail);
                  sessionStorage.setItem("username",res.data.Username);
                   history.push({
                   pathname:"/UserPage"  
               });
             }
             else if(res.data.perror)
             {
                 setDisplay2('block');
                 
             }
             else{
                 setDisplay3('block');
                 setTimeout(function(){
                          window.location = "/SignUp";
                                     },500);
             }
             
         
    }   );
    setEmail('');
    setPswd('');
    }
    return (
        

        <div>
        <div className="section"style={{width:"85rem"}}>
            <h3 style={{color:"orange",fontFamily:"cursive" ,fontSize:"2rem",marginLeft:"0rem"}}>Tutor's Point</h3>
            <p style={{fontFamily:"cursive"}}>An awesome place to gain knowlegede !</p>
            <p style={{ height:"1rem",display:dsp2,fontFamily:"cursive",fontSize:"1.2rem",color:"red",marginTop:"0rem",marginLeft:"35rem"}}>Password Error!</p>
        <p style={{display:dsp3,fontFamily:"cursive",fontSize:"1.2rem",color:"red",marginTop:"3rem",marginLeft:"35rem"}}>Create an account!</p>
      
        </div>
  <div className="formdiv" style={{boder:"solid",borderColor:"black"}}>
            <h3 style={{marginLeft:"15rem",fontFamily:"cursive",color:"black"}}>Login</h3>
            <form style={{margin:"2rem"}} onSubmit={handleSubmit} >
                <label style={{fontFamily:"cursive",fontSize:"1.2rem",color:"orange"}}>Email</label>
                <input required value={email} onChange={(e)=>setEmail(e.target.value)} type="email" style={{marginLeft:"7.8rem",marginBottom:"2rem",width:"60%",height:"1.5rem"}}></input><br></br>
                <label style={{ fontFamily:"cursive",fontSize:"1.2rem",color:"orange"}}>Password</label>
                <input required value={pswd} onChange={(e)=>setPswd(e.target.value)} type="password"style={{marginLeft:"5.7rem",marginBottom:"2rem",width:"60%",height:"1.5rem"}}></input><br></br>
                <button type="submit" style={{marginLeft:"17rem",fontFamily:"cursive",borderStyle:"solid",borderColor:"orange",padding:"0.25rem 0.5rem",letterSpacing:"var(--spacing)",backgroundColor:"orange",borderRadius:"var(--radius)",fontSize:"1.2rem",cursor: "pointer"}}>Login</button>
            </form>
        </div>
        </div>
    )
}
