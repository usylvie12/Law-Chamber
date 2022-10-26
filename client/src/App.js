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
                <div className="row">
               
                       
                <div className="col-md-6">
                    <div className="row justify-content-center p-5">
                        
                            <h1 className="display-4 fw-bolder mb-4 text-center">Global Law Chambers</h1>
                            <h3 className="display-8 text-center">Get an attorney who will fight for your rights</h3>
                            <Link to="/create" className=" rounded-pill shadow"  >Free Consultation</Link>
                            </div>
                           
                           
                       
                        </div>
                        <div className="col-md-6 ">
                            <img src="/assets/law-firm.jpg" alt="About" className='p-5' />
                        </div> </div>
                        
                        
                </div>
            </section>
            <div className="row adverts">
                        <div className="col-md-4">
                        <h3 className=" text-center">Insurance Defence</h3>
                        <p >legal representation of legal matters related to insurance</p> 
                        
                        </div>
                        <div className="col-md-4">
                        <h3 className=" text-center">Financial Law</h3>
                        <p> law and regulation of the commercial banking, capital markets, insurance</p> 
                        </div>
                        <div className="col-md-4">
                        <h3 className=" text-center">Expert Attorneys</h3>
                        <p> professional support service for Solicitors, Individuals and Charities</p> 
                        </div>
                        </div>

             <About/>
            <Practice/>
            <Attorneys/>
      
      
       </div>
  );
}

export default App;
