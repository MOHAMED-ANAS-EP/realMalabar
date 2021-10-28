import React from 'react'
import { Link } from 'react-router-dom'
import './PropertyGrid.css'
import propertyImg from '../../assets/product.jpg'
import bedIcon from '../../assets/bed.png'
function PropertyGrid() {
    return (
        <div className="col-md-4 property-list">
        <a href="./property-details.html"> 
        <div className="card my-4">
            <div className="img-container">
           
                                   
               <span className="for-sale">For sale</span>                                 
               <Link to="/details"> <img src={propertyImg} className="img-fluid"/></Link>

            </div>
            <div className="product-detail-container">
              <div className="d-block ">
                <h3 className="mb-0 spFont">Good Life Property Ltd</h3> 
               
                <span className="location"><i className="fa fa-map-marker" aria-hidden="true"></i>970 Torriford street ,Torrington 5676</span>
              
            </div>
            <div className="d-flex aminty"> 
              <div className="births" style={{backgroundImage: `url(${bedIcon})`}}>
                <span className="text-muted">4 </span>
              </div>
              <div className="births" style={{backgroundImage: `url(${bedIcon})`}}>
               <span className="text-muted">4 </span>
             </div>
             <div className="births" style={{backgroundImage: `url(${bedIcon})`}}>
               <span  className="text-muted">4 </span>
             </div>                   
            </div>
            <div className="price">
           
              <h5><i>&#8377;</i>11,250</h5>
             </div>            
            </div>
        </div>
      </a>
    </div>
    )
}

export default PropertyGrid
