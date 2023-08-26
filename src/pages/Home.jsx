
import '../App.css';
import Navbar from "../pages/Navbar";
import ali from "../images/ali.jpg"
import Footer from './Footer';
import Carousel from '../pages/Carousel.jsx';
import Darkmode from 'darkmode-js';

const options = {
  bottom: '64px', // default: '32px'
  right: '32px', // default: '32px'
  left: 'unset', // default: 'unset'
  time: '0.9s', // default: '0.3s'
  mixColor: '#fff', // default: '#fff'
  backgroundColor: 'white',  // default: '#fff'
  buttonColorDark: '#2C3639',  // default: '#100f2c'
  buttonColorLight: '#DCD7C9', // default: '#fff'
  saveInCookies: false, // default: true,
  label: 'D', // default: ''
  autoMatchOsTheme: false // default: true
}

const darkmode = new Darkmode(options);
darkmode.showWidget();

function App() {
  return (
    <>
    <Navbar/>
    <div className="container" id="homepage">
      <header className="App-header ">
        <div className="row  HOME">
          <div className="col-12 col-lg-6 m-auto ps-lg-5">
              <div className="text-center">
                <img className='d-lg-none mt-3 text-center' id="ali-sm-photo" draggable="false" src={ali} alt=""/>

              </div>
            <h1 className='home-text ali'>
              <span className='hello'>Hello, my name is</span><br></br>Ali Nazım<span className='dot'>.</span>
            </h1>
            <h5 className='parag'>
              I'm a new graduate Computer Engineer who loves to design and embody them as a Front-End Developer, 
              meantime I study in Web3 DAPP's<span className='dot'>.</span>
            </h5>
          </div>
          <div className="col-12 col-lg-6 d-none d-lg-flex m-0 justify-content-center">
              <img id="ali-photo" draggable="false" src={ali} alt=""/>
          </div>
        </div>



        <div className="row SKILLSET ">
          <div className="col-12 col-lg-6 px-lg-5 order-lg-2">
            <h1 className='home-text'>
              Skillset
            </h1>
            <h4 className='home-text2'>
            Software Development, Web, UI/UX, Graphic Design, Cold Jokes<span className='dot'>?</span>
            </h4>
          </div>
          <div className="col-12 col-lg-6 d-flex justify-content-center">
            <h5 className='parag'>
                I finished <span className='dot'> Computer Engineering </span> recently, so I have knowledge about <span className='dot'> Software Devlopment </span> phases. Meantime while
                I study in college, I start to study in <span className='dot'> Front-End Development </span> on my own (Mostly React). Besides I 
                love to play with colors and 
                shapes in<span className='dot'> Web </span> and <span className='dot'> UI/UX Design</span>
                 <span className='dot'>.</span>
              </h5>
          </div>
        </div>



        <div className="row PROJECT  justify-content-center">
          <div className="col-12 col-lg-12  text-center justify-content-center">
            <h1 className='home-text text-center'>
              Projects
            </h1>
             <Carousel/>
          </div>
        </div>




        <div className="row ABOUTME d-none">
          <div className="col-12 col-lg-6 m-auto pe-lg-5">
            <h1 className='home-text'>
              About Me?
            </h1>
            <h4 className='home-text2'>
              You can reach me via my social media accounts and ask me personally<span className='dot'>.</span>
            </h4>
          </div>
          <div className="col-12 col-lg-6 d-flex m-0 ps-lg-5 justify-content-center">
            <h5 className='m-auto'>
                  <ul class="ftco-footer-social">
                    <li class=""><a href="https://www.instagram.com/alinkucuk/" target='_blank' data-toggle="tooltip" data-placement="top" title="" data-original-title="Twitter"><i class="sociallogo fa-brands fa-instagram"></i></a>You can check my Instagram account.</li>
                  </ul>            
              </h5>
          </div>
        </div>


        
        
        <div className="row CONTACT ">
          <div className="col-12 col-lg-10 m-auto">
            <h1 className='home-text text-center'>
             Contact
            </h1>
            <h5 className='parag mt-4 text-center'>
              Currently I am an unemployed new graduate and I want to be part of a great equip as soon as possible if
              you want to give me that opportunity, reach me below links<span className='dot'>.</span> Thanks for come this along<span className='dot'>!</span>
            </h5>
          </div>
              <div class="col-md-12 text-center mt-5">
                  <ul class="ftco-footer-social p-0">
                    <li class=""><a href="mailto:alinazimkucuk@gmail.com" target='_blank' data-toggle="tooltip" data-placement="top" title="" data-original-title="Facebook"><i class="sociallogo fa-regular fa-envelope"></i></a></li>
                    <li class=""><a href="https://www.instagram.com/alinkucuk/" target='_blank' data-toggle="tooltip" data-placement="top" title="" data-original-title="Twitter"><i class="sociallogo fa-brands fa-instagram"></i></a></li>
                    <li class=""><a href="https://www.linkedin.com/in/ali-nazım-küçük" target='_blank' data-toggle="tooltip" data-placement="top" title="" data-original-title="Instagram"><i class="sociallogo fa-brands fa-linkedin-in"></i></a></li>
                    <li class=""><a href="https://github.com/alinzmk" target='_blank' data-toggle="tooltip" data-placement="top" title="" data-original-title="Instagram"><i class="sociallogo fa-brands fa-github"></i></a></li>
                  </ul>
              </div>
        </div>
      </header>
    <Footer/>
    </div>
    </>
  );
}

export default App;
