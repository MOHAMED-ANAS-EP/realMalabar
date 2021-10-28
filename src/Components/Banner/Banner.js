import React from 'react'
import './Banner.css'
import gallery from '../../assets/cover.jpg'
function Banner() {
    return (
        <div className="container-fluid  pager m-0  p-0 ">
      <div className="row m-0 p-0">
       <div className="col-md-6 home p-0 m-0" >
         <div className="home-text">

        
           <h6 className="spFont">Luxury Mansion is <br/>Every Thing</h6>
           <span className="text-muted">Quickly impact inexpensive mindshare through fully tested products</span>
          </div><div className="subscribe">
              <div className="input-group ">
                <i className="bi bi-envelope"></i>
                <a  className="subscribe-button" type="button" id="button-addon2">post your property </a>
              </div>
           </div>
       </div>
       <div className="col-md-6 text-right home-banner p-0 m-0 " style={{backgroundImage:` url(${gallery})`}}>
          <div className="dash p-0 m-0">
            <div className="numbers">
              <ul>
                  <li><div className="one">01</div></li>
                  <li><div className="one active">02</div></li>
                  <li><div className="one">03</div></li>
              </ul>
            </div>
          <div className="dollars">
              <h2><i>&#8377;</i>2235.000</h2>
              <h6>4Living rooms,3Bed rooms</h6>
              <h6>2Bath rooms,3Garages</h6>
                 
          </div>
          </div>
       </div>            
      </div>               
  </div>
    )
}

export default Banner
