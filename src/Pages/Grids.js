import React from 'react'
import CallToAction from '../Components/CallToAction/CallToAction'

import GridHeader from '../Components/GridHeader/GridHeader'

import Pagination from '../Components/Pagination/Pagination'
import PlaceList from '../Components/PlaceList/PlaceList'
import PropertyGrid from '../Components/PropertyGrid/PropertyGrid'

function Grids() {
    return (
        <div>
            
            <section className="aboutus">
               <div class="container">
                 <GridHeader/>
                 <div className="row">
                   <PlaceList/>
                   <div className="col-md-9">
                   <div className="row grids">
                     <PropertyGrid/>
                     <PropertyGrid/>
                     <PropertyGrid/>
                     <PropertyGrid/>
                     <PropertyGrid/>
                     <PropertyGrid/>
                     <PropertyGrid/>
                     <PropertyGrid/>
                     <PropertyGrid/>
                   </div>
                   </div>
                 </div>           
                 <div className="row pagination">
                     <Pagination/>
                 </div>
                 <CallToAction/>                                    
               </div>
            </section> 
           
        </div>
    )
}

export default Grids
