import '../App.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
      return (
       <>
          <footer class="footer-07 mt-5">
              <div class="container">
              <div class="row justify-content-center">
              <div class="col-md-12 text-center">
                <div className='mb-5'>
                  <Link  className="footerlink" to={"/"}>Projects</Link>
                  <Link  className="footerlink" to={"/"}>About Me</Link>
                  <Link  className="footerlink" to={"/"}>Contact</Link>
                  <Link  className="footerlink" to={"/"}>Listing</Link>
                </div>
              <ul class="ftco-footer-social p-0">
              <li class="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Twitter"><i class="sociallogo fa-brands fa-instagram"></i></a></li>
              <li class="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Facebook"><i class="sociallogo fa-regular fa-envelope"></i></a></li>
              <li class="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Instagram"><i class="sociallogo fa-brands fa-linkedin-in"></i></a></li>
              <li class="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Instagram"><i class="sociallogo fa-brands fa-github"></i></a></li>
              
              </ul>
              </div>
              </div>
              <div class="row mt-3">
              <div class="col-md-12 text-center">
              <p class="copyright">
              Copyright © 2023 All rights reserved | Website Created by Ali Nazım Küçük
              </p>
              </div>
              </div>
              </div>
          </footer>

       </>
      );
    }

export default Footer;
