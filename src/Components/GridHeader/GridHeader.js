import React from 'react'
import './GridHeader.css'
function GridHeader() {
    return (
        <div className="row grid-header">
        <div className="col-md-9 listing-title">
         <h1 className="spFont">Found 12 Properties</h1>
         <span className="selectd-tag">Arakkinar <i></i></span>
        </div>
        <div className="col-md-1 d-flex like-save">
       
         <div className="list-icon active"><i className="bi bi-grid-3x3-gap-fill"></i></div>
         <div className="list-icon"><i className="bi bi-list-ul"></i></div>
        </div>
        <div className="col-md-2 sort-select">
         <select className="form-select" aria-label="Default select example">
           <option selected>Sort By</option>
           <option value="1">One</option>
           <option value="2">Two</option>
           <option value="3">Three</option>
         </select>
        </div>             
      </div>
    )
}

export default GridHeader
