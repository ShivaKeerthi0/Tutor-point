import React from 'react'
import './Login.css'
import axios from 'axios'
import {Link} from 'react-router-dom'
function SignUp() {
        const [name,setName]=React.useState('');
        const [password,setPassword]=React.useState('');
        const [email,setEmail]=React.useState('');
        const [mno,setMno]=React.useState('');
        const [disp,setDisplay]=React.useState("none");
        const[disp1,setDisp1]=React.useState("block");
          const[disp2,setDisp2]=React.useState("none");
           
        
        const handleSubmit=(e)=>
        {
           const data={
                user:name,
                pass:password,
                mail:email,
                mobno:mno

            };
           e.preventDefault();
           axios.post("http://localhost:8081/Programs/Tutor/connect.php",data).then(res=>
           {
               if(res.data.msg)
               {
                   setDisp2('block')
                   setDisp1('none')
                   
                   
               }
               else
               {
                     setDisplay('block')
                     setDisp1('none');
               }
           })
           setName('');
           setPassword('');
           setEmail('');
           setMno('');
           setTimeout(function(){   
            window.location = "/Login";
            },500);
           
           
           

           

        }
    return (
        
        <div>
            <div className="section"style={{width:"85rem"}} >
            <h3 style={{color:"orange",fontFamily:"cursive" ,fontSize:"2rem",marginLeft:"0rem"}}>Tutor's Point</h3>
            <p style={{fontFamily:"cursive"}}>An awesome place to gain knowlegede !</p>
             <Link to="/"style={{fontFamily:"cursive", width:"6rem",marginLeft:"70rem",borderColor:"transparent",backgroundColor:"transparent",letterSpacing:"var(--spacing)",fontSize:"1.2rem",color:"orange"}} >Back</Link>
      
            </div >
            
            <p style={{display:disp,fontFamily:"cursive",fontSize:"1.2rem",color:"orange",marginTop:"3rem",marginLeft:"35rem"}}>Account Created Successfully!</p>
           <p style={{display:disp2,fontFamily:"cursive",fontSize:"1.2rem",color:"orange",marginTop:"3rem",marginLeft:"35rem"}}>Account already Exists!</p>
            <div className="formdiv" style={{boder:"solid",borderColor:"black",display:disp1}}>
            <h3 style={{marginLeft:"11rem",fontFamily:"cursive",color:"black"}}>Create an account</h3>
            <form style={{margin:"2rem"}} onSubmit={handleSubmit} >
                <label style={{fontFamily:"cursive",fontSize:"1.2rem",color:"orange"}}>UserName</label>
                <input  value={name} onChange={(e)=>setName(e.target.value)} type="text" style={{marginLeft:"5rem",marginBottom:"2rem",width:"60%",height:"1.5rem"}} required></input><br></br>
                <label style={{ fontFamily:"cursive",fontSize:"1.2rem",color:"orange"}}>Password</label>
                <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password"style={{marginLeft:"5.7rem",marginBottom:"2rem",width:"60%",height:"1.5rem"}}required></input><br></br>
                <label style={{ fontFamily:"cursive",fontSize:"1.2rem",color:"orange"}}>Email</label>
                <input value={email} onChange={(e)=>setEmail(e.target.value)}  type="email"style={{marginLeft:"7.85rem",marginBottom:"2rem",width:"60%",height:"1.5rem"}}required></input><br></br>
                <label style={{ fontFamily:"cursive",fontSize:"1.2rem",color:"orange"}}>MobileNumber</label>
                <input value={mno} onChange={(e)=>setMno(e.target.value)} type="text"style={{marginLeft:"2.7rem",marginBottom:"2rem",width:"60%",height:"1.5rem"}}required></input><br></br>
               
                 <button type="submit" style={{marginLeft:"17rem",fontFamily:"cursive", backgroundColor:"white",borderStyle:"outset",borderColor:"orange",padding:"0.25rem 0.5rem",letterSpacing:"var(--spacing)",borderRadius:"var(--radius)",fontSize:"1.2rem",cursor: "pointer"}}>Create</button>
                 </form>
        </div>
             
        </div>
    )
}

export default SignUp
