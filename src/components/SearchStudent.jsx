import React from 'react'
import NavBar from './NavBar'

const SearchStudent = () => {
  return (
    <div>
        <NavBar/>
        <h1><center>SEARCH STUDENT</center></h1>
        <div className="container">
            <div className="row g-3">
                <div className="col-col-12 col-sm-12 col-md-12">
                    <label htmlFor="" className="form-label">Name</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-col-12 col-sm-6 col-md-6">
                    <button className="btn btn-primary">search</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchStudent