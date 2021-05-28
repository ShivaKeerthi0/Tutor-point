import React from 'react'
import {Link,useHistory,Redirect} from 'react-router-dom'
import axios from 'axios'
import {data} from './List'
function UserPage(props)
 {
     const [result,setResult]=React.useState([])
     const history=useHistory();
     const [display,setDisplay]=React.useState('none')
     const [display2,setDisplay2]=React.useState('block')
    
    
     const handle=()=>
     {
        sessionStorage.clear();
        return(
            setTimeout(
                function()
                {
                  window.location="/";
                },500
            ))   
     }
     const handleLearning=()=>
     {
        const input={
                cmail:sessionStorage.getItem("mail")
            }
            axios.post("http://localhost:8081/Programs/Tutor/courseregrtv.php",input).then(res=>
            {              
                console.log(res.data.results)
            setResult(res.data.results);
                 
            })
            setDisplay('block')
            setDisplay2('none')
           
       
     }
     const handleOpen=(course)=>
     {
         history.push({
                   pathname:"/Open",
                       coursename:course.name
                    
               });
     }
     if(sessionStorage.getItem("isLogged").localeCompare("false")===0)
      {
         
         return(  <Redirect to="/Login"></Redirect>)
          
      }
      else
      {
        
        
       
            return(
        <div>
            <div className="section"style={{width:"85rem"}} >
            <h3 style={{color:"orange",fontFamily:"cursive" ,fontSize:"2rem",marginLeft:"0rem"}}>Tutor's Point</h3>
            <p style={{fontFamily:"cursive",color:"orange"}}>An awesome place to gain knowlegede !</p>
            <Link 
                to="/Courses"
                 className="btn2">Courses</Link>
            <button onClick={()=>handleLearning()} style={{marginLeft:"10rem", border:"transparent",cursor:"pointer",backgroundColor:"transparent",color:"orange",fontSize:"1.2rem",fontFamily:"cursive"}} >My Learning</button>
            <h4 style={{ display:"inline",fontSize:"1.2rem",fontFamily:"cursive",color:"orange",marginLeft:"30rem"}}>Hi {sessionStorage.getItem("username")} !  </h4>
            <button onClick={()=>handle()} className="btn2"style={{ width:"6rem",marginLeft:"2rem",borderColor:"transparent",backgroundColor:"transparent",letterSpacing:"var(--spacing)",fontSize:"1.2rem",color:"orange"}} >LogOut</button>
            </div>
            <div  style={{display:display2,margin:"15rem" ,marginTop:"10rem"}}>
              <p style={{color:"black",fontSize:"1.2rem",fontFamily:"cursive"}}><strong style={{color:"orange"}}>Hi {sessionStorage.getItem("username")} !</strong> Great to see you here with us. Now! you can dive into the world of knowledge by clicking on the<strong style={{color:"orange"}}> Courses</strong> tab  on the <strong style={{color:"orange"}}>left-top</strong> of page and hope you will enjoy your learning through us. Have fun with all our brand new courses !</p> 
            <p style={{color:"black",fontSize:"1.2rem",fontFamily:"cursive"}}>You can also go to the <strong style={{color:"orange"}}>My Learning</strong> tab once you register any of the courses  provided . Ya now rush to the <strong style={{color:"orange"}}>Courses</strong> tab and register your interested course and store your learnings forever. </p>
          </div>

            <div style={{display:display}}>
                {
                
                      // eslint-disable-next-line 
                  data.map((d,index)=>
                {
                    if(result.includes(d.id.toString())){
                     return(
                        <div  key={index} style={{ borderBottom:"solid",borderBottomColor:"orange",margin:"5rem",width:"70rem", display: "grid",gridTemplateColumns:"1fr 2fr"}}>
                         <div >
                          <img src={d.img }style={{margin:"3rem",marginTop:"2rem", height:"10rem",width:"15rem"}} alt=""></img>
                          </div>
                          <div  >
                          <p style={{fontFamily:"cursive",color:"red",fontSize:"1.5rem", margin:"3rem"}}>{d.name}</p>
                           <button  className="btn3"style={{display:"inline"}} onClick={()=>handleOpen(d)}>Open</button>          
                          </div>
                        
                        </div>
                        

                    )
                    }
                })
                }
            </div>
            </div>
            )  
   }
}

export default UserPage
