import '../App.css';
import { Link } from 'react-router-dom';
import logo from "../images/logo-black.png";
import zlogo from "../images/z-logo.png";



function Carousel() {
  return (
    <>
    <div className='row justify-content-center mt-4'>
        <div className='col-12 col-lg-3 m-lg-3'>
            <a href="#">
            <div class="card">
                    <img id="" className="card-image-top px-lg-5 py-lg-3" draggable="false" src={zlogo} alt=""/>
                    <div class="card-body">
                        <h5 class="card-title">Project Z</h5>
                        <p class="card-text">Bachelor Degree Final Project</p>
                    </div>
            </div>
            </a>
        </div>
        <div className='col-12 col-lg-3 m-lg-3'>
            <div class="card">
            <img id="" className="card-image-top p-lg-5" draggable="false" src={logo} alt=""/>
            <div class="card-body">
                <h5 class="card-title">Coming Soon</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            </div>
        </div>
        <div className='col-12 col-lg-3 m-lg-3'>
            <div class="card">
            <img id="" className="card-image-top p-lg-5" draggable="false" src={logo} alt=""/>
            <div class="card-body">
                <h5 class="card-title">Coming Soon</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default Carousel;
