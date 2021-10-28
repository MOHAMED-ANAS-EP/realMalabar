import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'
function Footer() {
    return (
        <footer className="footers bg-light">
        <div className="container ">
            <div className="row">
                <div className="col-xs-12 col-md-6 footers-one">
                     <h3 className="spFont">About Us</h3>
                     <div className="footers-info ">
                         <p className="text-muted">Cras sociis natoque penatibus et magnis Lorem Ipsum tells about the compmany right now the best. Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, sit.</p>
                     </div>
                     <div className="social-icons "> 
                     <div className="social-width"><a href="#"><i id="social-fb" className="fa fa-facebook fa-2x social active"></i></a></div>
                     <div className="social-width"> <a href="#"><i id="social-tw" className="fa fa-twitter fa-2x social"></i></a></div>
                     <div className="social-width"><a href="#"><i id="social-gp" className="fa fa-dribbble fa-2x social"></i></a></div>
                     <div className="social-width"><a href="#"><i id="social-em" className="fa fa-youtube fa-2x social"></i></a></div>
                    </div>
                 </div>
                <div className="col-xs-12  col-md-6 footers-two"> 
                <h3 className="spFont">Services </h3>
                     <ul className="list-unstyled">
                      <div className="col">
                        <li><Link to="/about"><i className="fa fa-long-arrow-right" aria-hidden="true"></i>Home</Link></li>
                        <li><Link to="/about"><i className="fa fa-long-arrow-right" aria-hidden="true"></i>About</Link></li>    
                        <li><Link to="/grid"><i className="fa fa-long-arrow-right" aria-hidden="true"></i>Services</Link></li> 
                        <li><Link to="/contact"><i className="fa fa-long-arrow-right" aria-hidden="true"></i>Contact</Link></li>
                        <li><Link to="/grid"><i className="fa fa-long-arrow-right" aria-hidden="true"></i>Portfolio</Link></li>
                        <li><Link to="/about"><i className="fa fa-long-arrow-right" aria-hidden="true"></i>Pricing</Link></li>                                            
                      </div>
                      <div className="col px-4">
                        <li><Link to="/grid"><i className="fa fa-long-arrow-right" aria-hidden="true"></i>Case Study</Link></li>
                        <li><Link to="/about"><i className="fa fa-long-arrow-right" aria-hidden="true"></i>News</Link></li>
                        <li><Link to="/grid"><i className="fa fa-long-arrow-right" aria-hidden="true"></i>Terms</Link></li>                 
                      </div>
                     </ul>                   
                     <div className="footer-button">
                      <button className="btn">
                        <a href="#head-section"><i className="bi bi-arrow-up"></i></a>
                   </button>
                     </div>
                </div>                                      
            </div>
        </div>
        <div className="footer-bottom"></div>
    </footer>
    )
}

export default Footer
