import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const AddStudent = () => {
    const[data,setData]=useState(
        {
        "firstname":"",
        "lastname":"",
        "college":"",
        "dob":"",
        "course":"",
        "mobile":"",
        "email":"",
        "address":""
       
        }
       
    )
    const inputHandler=(events)=>
        {
            setData({...data,[events.target.name]:events.target.value})
        }
    const readValue=()=>
        {
            console.log(data)
            axios.post("https://courseapplogix.onrender.com/addstudents",data).then(
                (response)=>{
                    console.log(response.data)
                    if(response.data.status=="success"){
                        alert("successfully added")
                    }else{
                        alert("error")
                    }
                }
            ).catch()
        }
    return (
        <div>
            <NavBar/>
            <h1><center>ADD STUDENT</center></h1>
            <div className="container">
                <div className="row g-3">

                    <div className="col col-12 col-sm-6 col-md-6">
                        <label htmlFor="" className="form-label">First name</label>
                        <input type="text" className="form-control" name='firstname' value={data.firstname} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6">
                        <label htmlFor="" className="form-label">Last name</label>
                        <input type="text" className="form-control" name='lastname' value={data.lastname} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6">
                        <label htmlFor="" className="form-label">College</label>
                        <input type="text" className="form-control" name='college' value={data.college} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6">
                        <label htmlFor="" className="form-label">Dob</label>
                        <input type="date" name="dob" id="" className="form-control" value={data.dob} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6">
                        <label htmlFor="" className="form-label">Course</label>
                        <select name="course"  className="form-control" value={data.course} onChange={inputHandler} >
                            <option value="MBA">MBA</option>
                            <option value="MCA">MCA</option>
                            <option value="MTECH">MTECH</option>
                        </select>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6">
                        <label htmlFor="" className="form-label">Mobile no</label>
                        <input type="text" className="form-control" name='mobile' value={data.mobile} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6">
                        <label htmlFor="" className="form-label">Email</label>
                        <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12">
                        <label htmlFor="" className="form-label">Address</label>
                       <textarea name="address" id="" className="form-control" value={data.address} onChange={inputHandler}></textarea>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6">
                        <button className="btn btn-success" onClick={readValue}>submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddStudent