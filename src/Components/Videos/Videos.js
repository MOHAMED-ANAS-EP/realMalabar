import React from 'react'
import './Videos.css'
function Videos() {
    return (
        <div className="boxShadow videos">
        <h3 className="text-left spFont" >Video</h3>
         <iframe width="100%" height="500" src="https://www.youtube.com/embed/j4WXz613GCI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
       </div>
    )
}

export default Videos
