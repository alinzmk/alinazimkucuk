import '../App.css';
import { Link } from 'react-router-dom';
import logo from "../images/logo-1.png";
import Darkmode from 'darkmode-js';

function Navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light p-lg-5">
        <div class="container-fluid">
            <Link class="navbar-brand ms-lg-5 p-0" to={`/`}><img className="nav-logo ms-lg-5 p-0" src={logo} draggable="false" alt="" /></Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse w-100 order-3 dual-collapse2 text-center justify-content-end me-lg-5" id="navbarNav">
            <ul class=" navbar-nav  ms-lg-auto me-lg-3 d-none">
                <li class="nav-item mx-lg-3 ">
                <Link class="nav-link active " aria-current="page" to={`/aboutme`}>About Me</Link>
                </li>
                <li class="nav-item mx-lg-3">
                <Link class="nav-link" to={`/projects`}>Projects</Link>
                </li>
                <li class="nav-item mx-lg-3">
                <Link class="nav-link" to={`/contact`}>Contact</Link>
                </li>
                
            </ul>
              <ul class="navbar-ul ftco-navbar-social p-0 me-lg-5 text-center ">
                <li class=""><a href="https://www.instagram.com/alinkucuk/" target='_blank' data-toggle="tooltip" data-placement="top" title="" data-original-title="Twitter"><i class="nav-sociallogo fa-brands fa-instagram"></i></a></li>
                <li class=""><a href="mailto:alinazimkucuk@gmail.com" data-toggle="tooltip" data-placement="top" title="" data-original-title="Facebook"><i class="nav-sociallogo fa-regular fa-envelope"></i></a></li>
                <li class=""><a href="https://github.com/alinzmk" target='_blank' data-toggle="tooltip" data-placement="top" title="" data-original-title="Instagram"><i class="nav-sociallogo fa-brands fa-github"></i></a></li>
                <li class=""><a href="https://www.linkedin.com/in/ali-nazım-küçük/" target='_blank' data-toggle="tooltip" data-placement="top" title="" data-original-title="Instagram"><i class="nav-sociallogo fa-brands fa-linkedin-in"></i></a></li>
              </ul>
            </div>
          </div>
        </nav>
    </div>
  );
}

export default Navbar;
