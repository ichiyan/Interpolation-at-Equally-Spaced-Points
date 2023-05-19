import './App.css';
import Introduction from './pages/Introduction';
import { useRef } from 'react';
import Specification from './pages/Specification';
import Conclusion from './pages/Conclusion';
import Calculator from './pages/Calculator';

function App() {

  const introRef = useRef(null);
  const calcuRef = useRef(null);
  const resultRef = useRef(null);
  const specsRef = useRef(null);
  const conclusionRef = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current?.offsetTop,
      behavior: 'smooth',
    })
  }


  return (
    <div className="App">
      <nav className="navbar navbar-light navbar-expand-lg" id='topbar'>
        <div className='container'>
          <span className="navbar-brand mb-0 h1 fw-bold px-4 topbar-text">Numerical Analysis</span>
        </div>
      </nav>
      <br></br>
      <div className="container d-md-flex align-items-stretch" id='wrapper'>
          <nav id="sidebar">
            <div className="p-4 pt-5 sidebar-items">
              <h5>Content</h5>
              <ul className="list-unstyled components mb-5">
                <li><a href='#' onClick={() => scrollToSection(introRef)}>Introduction</a></li>
                <li><a href='#' onClick={() => scrollToSection(calcuRef)}>Calculator</a></li>
                <li><a href='#' onClick={() => scrollToSection(specsRef)}>Specifications</a></li>
                <li><a href='#' onClick={() => scrollToSection(conclusionRef)}>Conclusion</a></li>
              </ul>
            </div>
          </nav>
          <div id="content" className="p-4 p-md-5 pt-5">
              <Introduction ref={introRef}/>
              <Calculator ref={calcuRef}/>
              <Specification ref={specsRef}/>
              <Conclusion ref={conclusionRef}/>
          </div>
      </div>
    </div>
    
  );
}

export default App;
