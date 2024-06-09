import React from 'react'
import NavBar from './NavBar'

const AddStudent = () => {
    return (
        <div>
            <NavBar/>
            <h1><center>ADD STUDENT</center></h1>
            <div className="container">
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6">
                        <label htmlFor="" className="form-label">First name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6">
                        <label htmlFor="" className="form-label">Last name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6">
                        <label htmlFor="" className="form-label">College</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6">
                        <label htmlFor="" className="form-label">Dob</label>
                        <input type="date" name="" id="" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6">
                        <label htmlFor="" className="form-label">Course</label>
                        <select name="" id="" className="form-control">
                            <option value="MCA">MCA</option>
                            <option value="MBA">MBA</option>
                            <option value="MTECH">MTECH</option>
                        </select>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6">
                        <label htmlFor="" className="form-label">Mobile no</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6">
                        <label htmlFor="" className="form-label">Email</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12">
                        <label htmlFor="" className="form-label">Address</label>
                        <textarea name="" id="" className="form-control"></textarea>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6">
                        <button className="btn btn-success">submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddStudent