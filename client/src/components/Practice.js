import React from 'react';
import { Link } from 'react-router-dom'

const Practice = () => {
    return (
        <div>
           <section id="practice">
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12">
                        <h2 className="display-6 text-center mb-4">
                        Experience and Practices
                        </h2>
                        <hr className="w-25 mx-auto" />
                    </div>
                </div>
                <div className="container-padding">
        <div className="row ">
          <div className="col-md-3">
            
              <div className="" >
              <img src="/assets/insurance.png" alt="Practice" className='service-img'/>
                  <div className="">
                    <h5 className=" ">Insurance Laws</h5>
                    <p>Law surrounding insurance, including insurance policies and claims</p>
                    <Link to="/about" className='service-link'>Read more</Link>
                    
                    <hr className='service-hr'/>
                  </div>
                </div>
              </div>
              <div className="col-md-3 ">
                  <div className="" >
                  <img src="/assets/dispute.png" alt="Practice" className='service-img'/>
                      <div className="">
                        <h5 className=" text-center">Dispute Resolution</h5>
                        <p>the process of resolving a dispute or conflict between different <br/> parties</p>
                    <Link to="/about" className='service-link'>Read more</Link>
                    <hr className='service-hr'/>
                   
                      </div>
                    </div>
                  </div>
                  
                      <div className="col-md-3">
                          <div className="" >
                          <img src="/assets/Arrest.png" alt="Practice" className='service-img '/>
                              <div className="">
                                <h5 className=" text-center">Criminal Laws</h5>
                                <p> laws concerned with crimes and the punishment of individuals who commit crimes</p>
                    <Link to="/about" className='service-link'>Read more</Link>
                    <hr className='service-hr'/>
                              </div>
                            </div>
                          </div>

             
                 
                       
                          <div className="col-md-3">
                              <div className="" >
                              <img src="/assets/team.png" alt="Practice" className='service-img'/>
                                  <div className="">
                                    <h5 className=" text-center">Labour Laws</h5>
                                    <p>those that mediate the relationship between workers,trade unions, and the government</p>
                    <Link to="/about" className='service-link'>Read more</Link>
                    <hr className='service-hr'/>
                                  </div>
                                </div>
                              </div> 
                              <div className="col-md-3">
                                  <div className=" " >
                                  <img src="/assets/Gaming.png" alt="Practice" className='service-img '/>
                                      <div className="">
                                        <h5 className="card-text text-center">Gaming Laws</h5>
                                        <p>the set of rules and regulations that apply to the gaming or gambling industry</p>
                    <Link to="/about" className='service-link'>Read more</Link>
                    <hr className='service-hr'/>
                                    
                                      </div>
                                    </div>
                                 </div>
                             
                              
                                  <div className="col-md-3">
                                      <div className="" >
                                      <img src="/assets/capital.png" alt="Practice" className='service-img'/>
                                          <div className="">
                                            <h5 className=" text-center">Government Relations</h5>
                                            <p>the branch of public relations that helps an organization communicate with governmental publics</p>
                    <Link to="/about" className='service-link'>Read more</Link>
                    <hr className='service-hr'/>
                                          </div>
                                        </div>
                                      </div>
                                     
    
                                          <div className="col-md-3 ">
                                              <div className="">
                                              
                                                  <img src="/assets/contract.png" alt="Practice" className='service-img'/>
                                                  <div className="">
                                                    <h5 className=" text-center">Agreements and Contract </h5>
                                                    <p>An agreement is any understanding or arrangement reached between two or more parties</p>
                    <Link to="/about" className='service-link'>Read more</Link>
                    <hr className='service-hr'/>
                                                
                                                  </div>
                                                </div>
                                             </div> 
                                             
                                             <div className="col-md-3">
                                                <div className="" >
                                                <img src="/assets/litigation.png" alt="Practice" className='service-img'/>
                                                    <div className="">
                                                      <h5 className=" text-center">Legal Representation</h5>
                                                      <p>representing their clients in court and the work that the lawyers do during the proceedings</p>
                    <Link to="/about" className='service-link'>Read more</Link>
                    <hr className='service-hr'/>
                                                    </div>
                                                  </div>
                                                </div></div> </div>
                </div>

            </section> 
        </div>
    );
}

export default Practice;