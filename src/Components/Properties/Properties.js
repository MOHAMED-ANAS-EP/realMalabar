import React from 'react'

import './Properties.css'

import minus from '../../assets/minus.png'
function Properties() {
    return (
      
            <div className="mindset">
                <div className="contents text-center">
                    <h6 className=""><span className="px-2"><img src={minus} alt=""/></span>  Properties <span className="px-2"><img src={minus} alt=""/></span></h6>
                    <h2 className="spFont">Recently Added</h2>
                    <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis molestias temporibus<br/> nesciunt incidunt  aliquam quasi quidem ipsum laboriosam deserunt officiis!</p>
                </div>
            </div>
         
    )
}

export default Properties
