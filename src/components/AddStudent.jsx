import React, { useState } from 'react'
import NavBar from './NavBar'

const AddStudent = () => {
    const[data,setData]=useState(
        {
        "id":"",
        "fstnm":"",
        "lstnm":"",
        "clg":"",
        "dob":"",
        "course":"",
        "mob":"",
        "mail":"",
        "adrs":""
        }
       
    )
    const inputHandler=(events)=>
        {
            setData({...data,[events.target.name]:events.target.value})
        }
    const readValue=()=>
        {
            console.log(data)
        }
    return (
        <div>
            <NavBar/>
            <h1><center>ADD STUDENT</center></h1>
            <div className="container">
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6">
                        <label htmlFor="" className="form-label">First name</label>
                        <input type="text" className="form-control" name='fstnm' value={data.fstnm} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6">
                        <label htmlFor="" className="form-label">Last name</label>
                        <input type="text" className="form-control" name='lstnm' value={data.lstnm} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6">
                        <label htmlFor="" className="form-label">College</label>
                        <input type="text" className="form-control" name='clg' value={data.clg} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6">
                        <label htmlFor="" className="form-label">Dob</label>
                        <input type="date" name="" id="" className="form-control"  />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6">
                        <label htmlFor="" className="form-label">Course</label>
                        <select name="" id="" className="form-control">
                            <option value="mba">MBA</option>
                            <option value="mca">MCA</option>
                            <option value="mtech">MTECH</option>
                        </select>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6">
                        <label htmlFor="" className="form-label">Mobile no</label>
                        <input type="text" className="form-control" name='course' value={data.course} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6">
                        <label htmlFor="" className="form-label">Email</label>
                        <input type="text" className="form-control" name='mob' value={data.mob} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12">
                        <label htmlFor="" className="form-label">Address</label>
                       <textarea name="" id="" className="form-control"></textarea>
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