import "./App.css";
import React  from 'react';
import About from './components/About';
import Practice from './components/Practice';
import Attorneys from './components/Attorneys';


import { Link } from 'react-router-dom';

function App() {
 

  return (
    <div className="App">
       <section id="home">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-5 ">
                            <h1 className="display-4 fw-boldermb-4 text-center">Global Law Chambers</h1>
                            <h3 className="display-8 text-center">Get an attorney who will fight for your rights</h3>
                           
                            <Link to="/create" className="consultation rounded-pill"  >Free Consultation</Link>
                            </div>
                           

                           
                            
                                
                            
                    </div>
                </div>
            </section>
            <About/>
            <Practice/>
            <Attorneys/>
      
      
       </div>
  );
}

export default App;
