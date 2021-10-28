import React from 'react'
import {Link} from 'react-router-dom'
import './SignUp.css'
function SignUp() {
    return (
    <section className="m-0 p-0">
     <div className="container-fluid p-0 m-0">
      <div className="signin">
        <div className="row">
          <div className="col-md-6 col-12">           
            <div className="sign-form">
                    <Link  to='/' className="sign-brand"> 
                      <img className="logo" src="./assets/logo.png"/>                         
                    </Link>
                <form className="row g-3 needs-validation" novalidate>
                    <h3>Sign<span> Up</span></h3>
                    <div className="col-md-6">                      
                      <input type="text" className="form-control" id="validationCustom01" placeholder="First name"  required/>
                      <div className="valid-feedback">
                        Looks good!
                      </div>
                    </div>
                    <div className="col-md-6">                    
                      <input type="text" className="form-control" id="validationCustom02" placeholder="Last name" required/>
                      <div className="valid-feedback">
                        Looks good!
                      </div>
                    </div>                   
                    <div className="col-md-12">                     
                      <input type="email" className="form-control" id="validationCustom03" placeholder="Email Address"   required/>
                      <div className="invalid-feedback">
                        Please provide a valid Address.
                      </div>
                    </div>
                    <div className="col-md-6">                       
                        <input type="password" className="form-control" id="validationCustom01" placeholder="Password"  required/>
                        <div className="valid-feedback">
                          Looks good!
                        </div>
                      </div>
                      <div className="col-md-6">                        
                        <input type="password" className="form-control" id="validationCustom02"  placeholder="Re-type password" required/>
                        <div className="valid-feedback">
                          Looks good!
                        </div>
                      </div>                    
                    <div className="col-6">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                        <label className="form-check-label" for="invalidCheck">
                          I Agree with <span><a href="">*terms and conditions</a></span>
                        </label>
                        <div className="invalid-feedback">
                          You must agree before submitting.
                        </div>
                      </div>                     
                    </div>
                    <div className="col-6">
                        <div className="form-check account">                           
                            <label className="form-check-label" for="invalidCheck">
                              Don't have an account ? <span><a href="">Login</a></span>
                            </label>                           
                          </div>    
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary" type="submit">Sign Up</button>
                    </div>
                  </form>
            </div>
        </div>
        <div className="col-md-6 col-12 sign-image">
            <img src="./Assets/sign.jpg"alt=""/>
        </div>
        </div>
    </div>
     </div>
   </section>

    )
}

export default SignUp
