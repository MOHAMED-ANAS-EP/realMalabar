import React from 'react'
import {Link} from 'react-router-dom'
import './Login.css'
function Login() {
    return (
        <section className="m-0 p-0">
        <div className="container-fluid p-0">
          <div className="login">
            <div className="row">
              <div className="col-md-6 col-12">           
                <div className="login-form">
                    <Link  to='/' className="login-brand"> 
                      <img className="logo" src="./assets/logo.png"/>                         
                    </Link>
                    
                    <form>
                        <h3>Log <span>ln</span></h3>
                        <div className="forms-input">  
                          <input type="email" className="form-control" placeholder="Email Address" id="exampleInputEmail1" aria-describedby="emailHelp"/>                      
                        </div>
                        <div className="forms-input">                     
                          <input type="password" placeholder="Password" className="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div className="row">
                          <div className="form-check col-6 ">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" for="exampleCheck1">Remember Me</label>
                          </div>
                          <div className="form-check col-6 forgotAcnt">                     
                            <label className="form-check-label" for="exampleCheck1">Forgot Account  ?</label>
                          </div>
                        </div>
                        <button type="submit" className="btn">Log ln</button>
                      </form>
                </div>
            </div>
            <div className="col-md-6 col-12 login-image ">
                <img style={{paddingRight: 0}}  src="./Assets/sign.jpg"alt=""/>
            </div>
            </div>
        </div>
        </div>
       </section>
    )
}

export default Login
