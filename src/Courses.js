import React from 'react'
import {data} from './List'
import {Link,useHistory} from 'react-router-dom'
import axios from 'axios';
import Pagination from './Pagination'
import Search from './Search';
import NotLogged from './NotLogged';

function Courses(props) {
    const [result,setResult]=React.useState([]);
     const [courses]=React.useState(data);
    const history=useHistory();
    const [count,setCount]=React.useState(0);
    const [coursesPerPage]=React.useState(5);
    const [currentPage,setCurrentPage]=React.useState(1);
    const [val,setVal]=React.useState('');
    const [updatedList,setUpdatedList]=React.useState(courses);
    
    const indexOfLast=currentPage*coursesPerPage;
    const indexOfFirst=indexOfLast-coursesPerPage;
    const coursePerPage=updatedList.slice(indexOfFirst,indexOfLast);
     const Submit=(course)=>
     {
         setCount((count)=>count+1);
         console.log(count)
      
      
       
       let formdata =new FormData();
       formdata.append('cid',course.id.toString())
       formdata.append('cimg',course.img)
       formdata.append('cname',course.name)
       formdata.append('cprice',course.price)
       formdata.append('cmail',sessionStorage.getItem("mail"))
       
        axios({
          url: "http://localhost:8082/coursesreg",
          method: "post",
          headers: {
            "Content-Type": "multipart/formdata",
          },
          data: formdata,
        }).then(res=>
       {
           
           if(res.data.localeCompare("successfull")===0)
           {
               
               console.log(res.data)
           }
       });
      
     }
     const handleOpen=(course)=>
     {
         history.push({
                   pathname:"/Open",
                       coursename:course.name
                    
               });
     }
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
    
    React.useEffect(()=>
{
    console.log("executed!")
    
       const input={
                cmail:sessionStorage.getItem("mail")
            }
            axios.post("http://localhost:8081/Programs/Tutor/courseregrtv.php",input).then(res=>
            {              
                console.log(res.data.results)
                 setResult(res.data.results);   
            })

},[count])
React.useEffect(
   ()=>
   {
       setUpdatedList(courses.filter((course)=> course.name.toLowerCase().includes(val.toLowerCase())))
       console.log(updatedList);
   } 
,[val])

const change=(e)=>
{
    e.preventDefault();
    setVal(e.target.value);

}

     const value=sessionStorage.getItem("isLogged")
     const paginate=(number)=>
     {
         setCurrentPage(number);
     }
     if(value.localeCompare("false")===0)
            {
                
              return (
            
        <div >
        <NotLogged  val={val} change={change} count={coursePerPage}/>
        <div style={{marginTop:"3rem",marginLeft:"10rem"}}>
         <Pagination items={coursesPerPage} len={updatedList.length} paginate={paginate}/>
        </div>
        </div>
    )   
    }
        else{          
        return (
            
        <div>
        <div className="section"style={{width:"85rem"}}>
           <h3 style={{color:"orange",fontFamily:"cursive" ,fontSize:"2rem",marginLeft:"0rem"}}>Tutor's Point</h3>
            <p style={{fontFamily:"cursive"}}>An awesome place to gain knowlegede !</p>
             <p style={{ display:"inline",fontSize:"1.2rem",fontFamily:"cursive",color:"orange",marginLeft:"70rem"}}>Hi {sessionStorage.getItem("username")} !  </p>
             <button onClick={()=>handle()} className="btn2"style={{ width:"6rem",marginLeft:"70rem",borderColor:"transparent",backgroundColor:"transparent",letterSpacing:"var(--spacing)",fontSize:"1.2rem",color:"orange"}} >LogOut</button>
            <Link to="/UserPage"style={{fontFamily:"cursive", width:"6rem",marginLeft:"3rem",borderColor:"transparent",backgroundColor:"transparent",letterSpacing:"var(--spacing)",fontSize:"1.2rem",color:"orange"}} >Back</Link>
      
        </div>
        <Search val={val} change={change}/>
        <div style={{marginTop:"7rem"}}>
            {
                coursePerPage.map((course,index)=>{
                    if(result.includes(course.id.toString())){
                    return(
                        
                        <div  key={index} style={{ borderBottom:"solid",borderBottomColor:"orange",marginRight:"2rem",marginLeft:"5rem",width:"70rem", display: "grid",gridTemplateColumns:"1fr 2fr"}}>
                         <div >
                          <img src={course.img }style={{margin:"3rem",marginTop:"2rem", height:"10rem",width:"15rem"}} alt=""></img>
                          </div>
                          <div  >
                          <p style={{fontFamily:"cursive",color:"red",fontSize:"1.5rem", margin:"3rem"}}>{course.name}</p>
                          <p style={{fontFamily:"cursive",color:"black",fontSize:"1.5rem",margin:"3rem"}}>Rs.{course.price}</p>
                         <button name={course.name}  className="btn3"style={{display:"inline"}} onClick={()=>handleOpen(course)}>Open</button>          
                           </div>
                           
                        </div>
                    )
                }
                else{
                    return(
                        
                        <div  key={index} style={{ borderBottom:"solid",borderBottomColor:"orange",marginRight:"2rem",marginLeft:"5rem",width:"70rem", display: "grid",gridTemplateColumns:"1fr 2fr"}}>
                         <div >
                          <img src={course.img }style={{margin:"3rem",marginTop:"2rem", height:"10rem",width:"15rem"}} alt=""></img>
                          </div>
                          <div  >
                          <p style={{fontFamily:"cursive",color:"red",fontSize:"1.5rem", margin:"3rem"}}>{course.name}</p>
                          <p style={{fontFamily:"cursive",color:"black",fontSize:"1.5rem",margin:"3rem"}}>Rs.{course.price}</p>
                         <button name={course.name}  className="btn3"style={{display:"none"}} onClick={()=>handleOpen(course)}>Open</button>          
                          <button name={course.name} className="btn3"style={{display:"inline"}}onClick={()=>Submit(course)} >Register</button>
                          </div>
                          
                        </div>
                    )

                }
            
            
            })
            }
            
        </div>
        <div style={{marginTop:"3rem",marginLeft:"10rem"}}>
            <Pagination items={coursesPerPage} len={updatedList.length} paginate={paginate}/>
        </div>
        </div>
    
    )
        }

    
        
}

export default React.memo( Courses) 
