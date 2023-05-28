import React, {useState} from "react";
import  "./homecrud.css";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'




const Createuser = () => {
    let [name, setName] = useState("")
    let [salary, setSalary] = useState("")
    let [company, setCompany] = useState("")

    let nameData = (e) => {
        setName(e.target.value)
    }

    let salaryData = (e) => {
        setSalary(e.target.value)
    }

    let companyData = (e) => {
        setCompany(e.target.value)
    }

    let navi = useNavigate()
    let formHandle = (e) => {
        e.preventDefault()
        let payload = { name, salary, company }

        axios.post("http://localhost:3000/users", payload)
        // axios.post("https://react-data2-2fded-default-rtdb.firebaseio.com/db.json", payload)
            .then(() => {
                console.log("Data Has been ADDED", payload);
            })
            .catch(() => {
                console.log("SOMETHING IS FISHY")
            })
        navi("/users")
    }
    return (
        <div className="myForm">
            <form action="">
                <tr>
                    <th colSpan="2"><h4>User Details</h4></th>
                </tr>
                <tr>
                    <td><label html for="">Name</label></td>
                    <td>:<input type="text" value={name} onChange={nameData} /></td>
                </tr>
                <tr>
                    <td><label htmlFor="">Salary</label></td>
                    <td>:<input type="text" value={salary} onChange={salaryData} /></td>
                </tr>
                <tr>
                    <td><label htmlFor=''>Company</label></td>
                    <td>:<input type="text" value={company} onChange={companyData} /></td>
                </tr>

                <tr>
                    <th colSpan="2" onClick={formHandle}><button>Submit</button></th>
                </tr>
            </form>
        </div>
    )
}
export default Createuser;
