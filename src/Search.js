import React from 'react'

function Search(props) {
    console.log(props)
    return (
        <div>
        <form>
        <div className="form-group">
            <input style={{marginTop:"3rem",marginLeft:"15rem",height:"3rem",width:"60rem"}} value={props.val} onChange={(e)=>props.change(e)} className="form-control" type="text" placeholder="Search  Courses"></input>
        </div>
        </form>
        </div>
    )
}

export default Search
