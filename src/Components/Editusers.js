import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './homecrud.css'
import { useNavigate, useParams } from 'react-router-dom'

const Editusers = () => {
  let [name, setName] = useState("")
  let [salary, setSalary] = useState("")
  let [company, setCompany] = useState("")



  // console.log(index)
  let { index } = useParams()
  // console.log(index, "INDEX VAL");

  useEffect(() => {
    // console.log(index, "THIS IS INDEX VAL");

    axios.put(`http://localhost:3000/users/${index}`)
    // axios.post(`https://react-data2-2fded-default-rtdb.firebaseio.com/db.json/${index}`)
      .then((resp) => {
        console.log(resp.data)
        setName(resp.data.name)
        setSalary(resp.data.salary)
        setCompany(resp.data.company)
      })

  }, [index])

  let nameData = (e) => {
    e.preventDefault()
    setName(e.target.value)
  }
  let salaryData = (e) => {
    e.preventDefault()
    setSalary(e.target.value)
  }
  let companyData = (e) => {
    e.preventDefault()
    setCompany(e.target.value)
  }
  let navigate = useNavigate()

  let formHandle = (e) => {
    e.preventDefault()

    let payload = { name, salary, company }
    axios.put(`http://localhost:3000/users/${index}`, payload)
    // axios.put(`https://react-data2-2fded-default-rtdb.firebaseio.com/db.json/${index}`, payload)
      // axios.put(`http://localhost:3002/users/${index}`,payload)
      .then(() => {
        console.log("Data has been Updated");
      })
    navigate("/users")
  }

  return (
    <div className="myForm">
      <form action="">
        <tr>
          <th colSpan="2"><h4> Update User Details</h4></th>
        </tr>
        <tr>
          <td><label htmlFor="">Name</label></td>
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
          <th colSpan="2" ><button onClick={formHandle}>Update</button></th>
        </tr>
      </form>
    </div>
  )
}

export default Editusers
