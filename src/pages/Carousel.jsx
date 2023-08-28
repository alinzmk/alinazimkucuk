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
                    <img id="" className="card-image-top px-lg-5 py-lg-3 px-3 py-1" draggable="false" src={zlogo} alt=""/>
                    <div class="card-body">
                        <h5 class="card-title">Project Z</h5>
                        <p class="card-text d-none d-lg-inline">Bachelor Degree Final Project</p>
                    </div>
            </div>
            </a>
        </div>
        <div className='col-6 col-lg-3 m-lg-3'>
            <a href="https://www.alickuruyemis.com" target='_blank'>
                <div class="card p-lg-0 m-3">
                <img id="" className="card-image-top px-lg-5 py-lg-4 px-3 py-1" draggable="false" src={ak} alt=""/>
                <div class="card-body">
                    <h5 class="card-title">Alıç Kuruyemiş</h5>
                    <p class="card-text d-none d-lg-inline">One page informative gallery for Alıç Kuruyemiş</p>
                </div>
                </div>
            </a>
        </div>
        <div className='col-6 col-lg-3 m-lg-3'>
            <a href="http://www.alicrestaurant.com" target='_blank'>
                <div class="card p-lg-0 m-3">
                <img id="" className="card-image-top px-lg-5 py-lg-3 px-3 py-1" draggable="false" src={al} alt=""/>
                <div class="card-body">
                    <h5 class="card-title">Alıç Restaurant</h5>
                    <p class="card-text d-none d-lg-inline">One page informative gallery for Alıç Restaurant</p>
                </div>
                </div>
            </a>
        </div>
    </div>
    </>
  );
}

export default Carousel;
