import React from 'react';
import './style.css';
import service1 from '../assets/img/service-1.jpg';
import service2 from '../assets/img/service-2.jpg';
import service3 from '../assets/img/service-3.jpg';
import service4 from '../assets/img/service-4.jpg';

function Service() {
    return (
    <div>
        {/*Service Start */} 
        <div class="container-fluid pt-5">
            <div class="container">
                <div class="section-title">
                    <h4 class="text-primary text-uppercase" style={{letterSpacing:'5px'}}>Our Services</h4>
                    <h1 class="display-4">Fresh & Organic Beans</h1>
                </div>
                <div class="row">
                    <div class="col-lg-6 mb-5">
                        <div class="row align-items-center">
                            <div class="col-sm-5">
                                <img class="img-fluid mb-3 mb-sm-0" src={service1} alt="" />
                            </div>
                            <div class="col-sm-7">
                                <h4><i class="fa fa-truck service-icon"></i>Fastest Door Delivery</h4>
                                <p class="m-0">Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit
                                    invidunt, dolore tempor diam ipsum takima erat tempor</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 mb-5">
                        <div class="row align-items-center">
                            <div class="col-sm-5">
                                <img class="img-fluid mb-3 mb-sm-0" src={service2} alt="" />
                            </div>
                            <div class="col-sm-7">
                                <h4><i class="fa fa-coffee service-icon"></i>Fresh Coffee Beans</h4>
                                <p class="m-0">Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit
                                    invidunt, dolore tempor diam ipsum takima erat tempor</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 mb-5">
                        <div class="row align-items-center">
                            <div class="col-sm-5">
                                <img class="img-fluid mb-3 mb-sm-0" src={service3} alt="" />
                            </div>
                            <div class="col-sm-7">
                                <h4><i class="fa fa-award service-icon"></i>Best Quality Coffee</h4>
                                <p class="m-0">Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit
                                    invidunt, dolore tempor diam ipsum takima erat tempor</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 mb-5">
                        <div class="row align-items-center">
                            <div class="col-sm-5">
                                <img class="img-fluid mb-3 mb-sm-0" src={service4} alt="" />
                            </div>
                            <div class="col-sm-7">
                                <h4><i class="fa fa-table service-icon"></i>Online Table Booking</h4>
                                <p class="m-0">Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit
                                    invidunt, dolore tempor diam ipsum takima erat tempor</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* service end */}


        {/* offer start */}
        <div class="offer container-fluid my-5 py-5 text-center position-relative overlay-top overlay-bottom">
            <div class="container py-5">
                <h1 class="display-3 text-primary mt-3">50% OFF</h1>
                <h1 class="text-white mb-3">Sunday Special Offer</h1>
                <h4 class="text-white font-weight-normal mb-4 pb-3">Only for Sunday from 1st Jan to 30th Jan 2045</h4>
                <form class="form-inline justify-content-center mb-4">
                    <div class="input-group">
                        <input type="text" class="form-control p-4" placeholder="Your Email" style={{height: '60px'}} />
                        <div class="input-group-append">
                            <button class="btn btn-primary font-weight-bold px-4" type="submit">Sign Up</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        {/* offer end */}
    </div>
    );
}

export default Service;