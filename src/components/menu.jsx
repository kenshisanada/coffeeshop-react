import './style.css';
import menu1 from '../assets/img/menu-1.jpg';
import menu2 from '../assets/img/menu-2.jpg';
import menu3 from '../assets/img/menu-3.jpg';


function Menu() {
    return (
        <div>
            {/* menu start */}
            <div class="container-fluid pt-5">
                <div class="container">
                    <div class="section-title">
                        <h4 class="text-primary text-uppercase" style={{letterSpacing: '5px'}}>Menu & Pricing</h4>
                        <h1 class="display-4">Competitive Pricing</h1>
                    </div>
                    <div class="row">
                        <div class="col-lg-6">
                            <h1 class="mb-5">Hot Coffee</h1>
                            <div class="row align-items-center mb-5">
                                <div class="col-4 col-sm-3">
                                    <img class="w-100 rounded-circle mb-3 mb-sm-0" src={{menu1}} alt="" />
                                    <h5 class="menu-price">$5</h5>
                                </div>
                                <div class="col-8 col-sm-9">
                                    <h4>Black Coffee</h4>
                                    <p class="m-0">Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor</p>
                                </div>
                            </div>
                            <div class="row align-items-center mb-5">
                                <div class="col-4 col-sm-3">
                                    <img class="w-100 rounded-circle mb-3 mb-sm-0" src={{menu2}} alt="" />
                                    <h5 class="menu-price">$7</h5>
                                </div>
                                <div class="col-8 col-sm-9">
                                    <h4>Chocolete Coffee</h4>
                                    <p class="m-0">Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor</p>
                                </div>
                            </div>
                            <div class="row align-items-center mb-5">
                                <div class="col-4 col-sm-3">
                                    <img class="w-100 rounded-circle mb-3 mb-sm-0" src={{menu3}} alt="" />
                                    <h5 class="menu-price">$9</h5>
                                </div>
                                <div class="col-8 col-sm-9">
                                    <h4>Coffee With Milk</h4>
                                    <p class="m-0">Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <h1 class="mb-5">Cold Coffee</h1>
                            <div class="row align-items-center mb-5">
                                <div class="col-4 col-sm-3">
                                    <img class="w-100 rounded-circle mb-3 mb-sm-0" src={{menu1}} alt="" />
                                    <h5 class="menu-price">$5</h5>
                                </div>
                                <div class="col-8 col-sm-9">
                                    <h4>Black Coffee</h4>
                                    <p class="m-0">Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor</p>
                                </div>
                            </div>
                            <div class="row align-items-center mb-5">
                                <div class="col-4 col-sm-3">
                                    <img class="w-100 rounded-circle mb-3 mb-sm-0" src={{menu2}} alt="" />
                                    <h5 class="menu-price">$7</h5>
                                </div>
                                <div class="col-8 col-sm-9">
                                    <h4>Chocolete Coffee</h4>
                                    <p class="m-0">Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor</p>
                                </div>
                            </div>
                            <div class="row align-items-center mb-5">
                                <div class="col-4 col-sm-3">
                                    <img class="w-100 rounded-circle mb-3 mb-sm-0" src={{menu3}} alt="" />
                                    <h5 class="menu-price">$9</h5>
                                </div>
                                <div class="col-8 col-sm-9">
                                    <h4>Coffee With Milk</h4>
                                    <p class="m-0">Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* menu end */}

        </div>
    )
}


export default Menu;