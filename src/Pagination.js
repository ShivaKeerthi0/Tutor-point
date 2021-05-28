import React from 'react'
function Pagination({items,len,paginate}) {
   
   const pgNum=[];
   for(let i=1;i<=Math.ceil(len/items);i++)
   pgNum.push(i);
   if (pgNum.length>1){
   return(
       <div>
           <ul className="pagination pagination-lg ">
       {
           pgNum.map((number)=>(
        
                 <li  key={number} className="page-item ">
                    <a href="#"onClick={()=>paginate(number)} className="page-link bg-white text-dark">{number}</a>
                 </li>
           ))
       }
       </ul>
    </div>
   )
    }
    else{
        return(<div></div>)
    }
       
}

export default React.memo(Pagination)
