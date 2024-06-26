import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'

const ViewAll = () => {
    const[data,setData]=useState([])
    const fetchData=()=>
        {
            console.log("hello")
            axios.get("https://courseapplogix.onrender.com/getdata").then(
                (response)=>
                {
                 setData(response.data)
                    
                }
            ).catch().finally()
        }
    useEffect(()=>{fetchData()},[])
  return (
    <div>
        <NavBar/>
         <h1><center>VIEW STUDENT</center></h1>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">First name</th>
      <th scope="col">Last name</th>
      <th scope="col">College</th>
      <th scope="col">DOB</th>
      <th scope="col">Course</th>
      <th scope="col">Mobile</th>
      <th scope="col">Email</th>
      <th scope="col">Address</th>
     
    </tr>
  </thead>
   {data.map(
    (value,index)=>
        {
            return  <tbody>
            <tr>
              <td>{value.firstname}</td>
              <td>{value.lastname}</td>
              <td>{value.college}</td>
              <td scope="row">{value.dob}</td>
              <td>{value.course}</td>
              <td>{value.mobile}</td>
              <td>{value.email}</td>
              <td>{value.address}</td>
            
            </tr>
          </tbody>
        }
   )}
</table>
    </div>
  )
}

export default ViewAll