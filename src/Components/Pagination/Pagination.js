import React from 'react'
import './Pagination.css'
function Pagination() {
    return (
        <div className="col-md-12">
        <div className="paginator text-center">
         <ul className="unstyled  d-flex justify-content-center list ">
           <li><div className="pagin "><i className="bi bi-chevron-left"></i></div></li>
           <li><div className="pagin">1</div></li>
           <li><div className="pagin">2</div></li>
           <li><div className="pagin active"><i className="bi bi-chevron-right"></i></div></li>
          </ul>
        </div>
      </div>
    )
}

export default Pagination
