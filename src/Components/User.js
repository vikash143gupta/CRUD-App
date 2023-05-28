import React, { useState, useEffect } from "react";
import  "./homecrud.css";
import { Link } from 'react-router-dom'
import axios from "axios"




const User = () => {
    // let [data, setContent] = useState([])

    // useEffect(()=>{
    //     axios.get("http://localhost:3000/users")
    //     // axios.get("https://react-data2-2fded-default-rtdb.firebaseio.com/db.json")
    //     .then((res)=>{
    //         // data.map((id) => {
    //             // console.log('xxxxxxx',res.data[id])
    //             setContent(res.data)
    //         } )
           
    //         // console.log('datttta', data)
    //     //   
    //     , []})

    let [data, setContent] = useState([])
  
    useEffect(()=>{
      axios.get("http://localhost:3000/users")
      .then((res)=>{
        setContent(res.data)
      })
  
    },[])

      let deleteData=(id)=>{
        axios.delete(`http://localhost:3000/users/${id}`)
        window.location.assign("/db.json")
      }
      
    return(
        <div className="userpage">
            {data.map((x)=>{ 

        return(
            <div className="card"> 
                <table>
                    <tr>
                        <td><h4>Name</h4></td>
                        <td><h4>:{x.name}</h4></td>
                    </tr>
                    <tr>
                        <td><h4>Salary</h4></td>
                        <td><h4>:{x.salary}</h4></td>
                    </tr>
                    <tr>
                        <td><h4>Company</h4></td>
                        <td><h4>:{x.company}</h4></td>
                    </tr>
                    <tr>
                        <td>
                            <Link to={`/edit/${x.id}`}>Edit</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button onClick={() => { deleteData(x.id) }}>DELETE</button>
                        </td>
                    </tr>
                </table>
            </div>
        )
    })}
            
        </div>
    )
}

export default User;

