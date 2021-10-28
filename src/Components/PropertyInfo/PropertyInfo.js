import React from 'react'
import './PropertyInfo.css'
function PropertyInfo() {
    return (
                <div className="boxShadow property-info ">
                    <h3 className="text-left spFont">Property Info</h3>
                     <ul>
                       <li>     <span className="icon property"></span>Property type :<span className="info-details"> </span></li>
                       <li>    <span className="icon purpuse"></span> purpuse:<span className="info-details"> </span></li>
                       <li>      <span className="icon year"></span>Year build:<span className="info-details"> </span></li>
                       <li>      <span className="icon bedrooms"></span> Bedrooms:<span className="info-details"> </span></li>
                       <li>     <span className="icon bathrooms"></span>Bathrooms:<span className="info-details"> </span></li>
                       <li>      <span className="icon area" ></span>Area:<span className="info-details"> </span></li>
                       <li>      <span className="icon furnished"></span> Furnished:<span className="info-details"> </span></li>
                     </ul>

                </div>
    )
}

export default PropertyInfo
