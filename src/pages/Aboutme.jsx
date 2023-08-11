
import '../App.css';
import Navbar from "../pages/Navbar";
import ali from "../images/ali.jpg"
import Footer from './Footer';

function App() {
  return (
    <>
    <Navbar/>
    <div className="container mt-5">
      <header className="App-header">
        <div className="row">
          <div className="col-12 d-flex m-0 ps-5 justify-content-center">
              <img id="ali-photo" src={ali} alt="" />
          </div>
          <div className="col-6 m-auto pe-5 text-center">
            <h1 className='home-text'>
              THAT'S ME
            </h1>
          </div>
          <div className="col-10 pt-3 m-auto text-center">
            <h4 className='home-text'>
              I'm a new graduate Computer Engineer who loves to design and embody them as a Front-End Developer, 
              meantime I study in Web3 DAPP's
            </h4>
          </div>
        </div>
      </header>
      <Footer/>
    </div>
    </>
  );
}

export default App;
