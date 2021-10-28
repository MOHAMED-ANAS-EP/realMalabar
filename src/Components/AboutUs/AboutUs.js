import React from 'react'
import './AboutUs.css'
import aboutImg from '../../assets/cover.jpg'
import minus from '../../assets/minus.png'
import phone from '../../assets/phone-call (4).png'
import envelop from '../../assets/envelope.png'
function AboutUs() {
    return (
    <section className="aboutus">
    <div className="container">
        <div className="row">
            <div className="col-md-6 cover">
                <img src={aboutImg} className="img-fluid" alt="loading"/>
            </div>
            <div className="col-md-6 about">
                <h6 >About Us <span><img  src={minus} alt="loading"/></span></h6>
                <h2 className="spFont">Super Delux Mansion of <br/><span>Gear House .Inc</span></h2>
                <hr className="dropdown-divider bg-dark"/> 
                <p className="text-muted">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore laborum natus rem iure omnis necessitatibus ea architecto quaerat dolores corrupti cupiditate aperiam perspiciatis nam consequuntur, facilis eum adipisci voluptas id!</p>
                <div className="phone">
                    <div className="phone-icon1 text-left">
                        <img src={phone}   alt="loading"/>
                        <h5 className="text-muted">Call Us <br/><span> (123) 1234 3235</span></h5>
                    </div>
                    <div className="phone-icon2 text-right">
                        <img src={envelop}   alt="loading"/>
                        <h5 className="text-muted">Mail Us <br/><span>info@gear.com</span></h5> 
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    )
}

export default AboutUs
