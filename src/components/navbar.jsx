import './style.css';
import carousel1 from '../assets/img/carousel-1.jpg';

function Navbar() {
    return (
    <div>   
        {/*navbar start*/}
        <div class="container-fluid p-0 nav-bar">
            <nav class="navbar navbar-expand-lg bg-none navbar-dark py-3">
                <a href="#" class="navbar-brand px-lg-4 m-0">
                    <h1 class="m-0 display-4 text-uppercase text-white">KOPPEE</h1>
                </a>
                <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div class="navbar-nav ml-auto p-4">
                        <a href="#" class="nav-item nav-link active">Home</a>
                        <a href="#" class="nav-item nav-link">About</a>
                        <a href="#" class="nav-item nav-link">Service</a>
                        <a href="#" class="nav-item nav-link">Menu</a>
                        <a href="contact.html" class="nav-item nav-link">Contact</a>
                    </div>
                </div>
            </nav>
        </div>
        {/*navbar end*/}
            {/*header start*/}
        <div class="container-fluid p-0 mb-5">
            <div id="header" class="header">
                <img class="w-100" src={carousel1} alt="Image" />
                <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <h2 class="text-primary font-weight-medium m-0">This is a ReactJS demo</h2>
                    <h1 class="display-1 text-white m-0">COFFEE</h1>
                    <h2 class="text-white m-0">* Made by Kenshi*</h2>
                </div>
            </div>
        </div>
        {/* header end */}

    </div>

    )
}

export default Navbar;