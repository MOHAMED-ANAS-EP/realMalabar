import React from 'react'
import './SendMessage.css'

function SendMessage() {
    return (
        <section id="" className="contact">
        <div className="container">
            <div className="row">
                <div className="col-md-6 contact-form">
                    <form className="row g-3"> 
                        <h2 className="spFont">Send Us a Message</h2>                       
                        <div className="col-md-12">                         
                          <div className="input-group">                            
                            <input type="text" className="form-control"  placeholder="Your name" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" required/>
                            <i className="bi bi-person"></i> 
                          </div>                                                
                        </div>
                        <div className="col-md-12">                         
                            <div className="input-group">                            
                              <input type="text" className="form-control"  placeholder="Your Email" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" required/>
                              <i className="bi bi-envelope"></i> 
                            </div>                                                
                        </div>
                        <div className="col-md-12">  
                          <div className="input-group">                            
                            <textarea className="form-control "rows="4" cols="50" id="validationTextarea" placeholder="Type Message" required></textarea>                                                                            
                            <i className="bi bi-pencil" style={{paddingBottom: "5rem"}}></i>
                          </div>
                        </div>                                                                                                                                    
                        <div className="col-md-12">
                          <button className="btn forms-button" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-md-6 address">
                  <h1 className="spFont">Contact Us</h1>
                    <h2>We are here for help you! 
                        <br/>
                        Arrange a meeting
                    </h2>
                    <p className="text-muted">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, deleniti dolorem. Consectetur, officia quasi ratione molestiae voluptas distinctio, incidunt soluta asperiores eius maiores rerum assumenda .</p>
                          <div className="locations">
                              <h4>Address</h4>
                              <h6>123. william stadium</h6>
                          </div>
                          <div className="call">
                            <h4>Customer Support</h4>
                            <h6><a  href="tel:555-555-5555" > (+123)864578743</a></h6>
                        </div>
                  
                </div>
            </div>            
        </div>
    </section>
    )
}

export default SendMessage
