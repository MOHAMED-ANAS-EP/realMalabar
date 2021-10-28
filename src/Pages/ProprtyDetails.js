import React from 'react'
import CallToAction from '../Components/CallToAction/CallToAction'
import Description from '../Components/Description/Description'

import MakeCall from '../Components/MakeCall/MakeCall'
import PropertyBanner from '../Components/PropertyBanner/PropertyBanner'
import PropertyId from '../Components/PropertyId/PropertyId'
import PropertyInfo from '../Components/PropertyInfo/PropertyInfo'
import Share from '../Components/Share/Share'
import Videos from '../Components/Videos/Videos'

function ProprtyDetails() {
    return (
        <div>
          
            <section className="pro-detail">
              <div className="container">
                <div className="row">
                   <PropertyId/>
                   <MakeCall/> 
                </div>
                <div className="row">
                <div className="col-md-8 property-banner">
                    <PropertyBanner/>
                    <Description/>
                    <Videos/>
                </div>
                <div className="col-md-4 roller">
                    <PropertyInfo/>
                    <Share/>
                </div>
                </div>
               </div>
            </section> 
            <CallToAction/>
        
        </div>
    )
}

export default ProprtyDetails
