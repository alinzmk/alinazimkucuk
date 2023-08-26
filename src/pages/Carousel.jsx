import '../App.css';
import { Link } from 'react-router-dom';
import logo from "../images/logo-black.png";
import zlogo from "../images/z-logo.png";
import al from "../images/proje1.png";
import ak from "../images/proje2.png"


function Carousel() {
  return (
    <>
    <div className='row justify-content-center mt-4'>
        <div className='col-6 col-lg-3 m-lg-3'>
            <a href="https://alinzmk.github.io/ProjectZ/" target='_blank'>
            <div class="card p-lg-0 m-3">
                    <img id="" className="card-image-top px-lg-5 py-lg-3" draggable="false" src={zlogo} alt=""/>
                    <div class="card-body">
                        <h5 class="card-title">Project Z</h5>
                        <p class="card-text d-none">Bachelor Degree Final Project</p>
                    </div>
            </div>
            </a>
        </div>
        <div className='col-6 col-lg-3 m-lg-3'>
            <a href="https://www.alickuruyemis.com" target='_blank'>
                <div class="card p-lg-0 m-3">
                <img id="" className="card-image-top px-lg-5 py-lg-4" draggable="false" src={ak} alt=""/>
                <div class="card-body">
                    <h5 class="card-title">Coming Soon</h5>
                    <p class="card-text d-none">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                </div>
            </a>
        </div>
        <div className='col-6 col-lg-3 m-lg-3'>
            <a href="http://www.alicrestaurant.com" target='_blank'>
                <div class="card p-lg-0 m-3">
                <img id="" className="card-image-top px-lg-5 py-lg-3" draggable="false" src={al} alt=""/>
                <div class="card-body">
                    <h5 class="card-title">Coming Soon</h5>
                    <p class="card-text d-none">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                </div>
            </a>
        </div>
        <div className='col-6 col-lg-3 m-lg-3'>
            <a href="" target='_blank'>
                <div class="card p-lg-0 m-3">
                <img id="" className="card-image-top px-lg-5 py-lg-3" draggable="false" src={al} alt=""/>
                <div class="card-body">
                    <h5 class="card-title">Coming Soon</h5>
                    <p class="card-text d-none">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                </div>
            </a>
        </div>
    </div>
    </>
  );
}

export default Carousel;
