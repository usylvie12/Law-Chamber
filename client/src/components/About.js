import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <section id="about">
                <div className="container mt-5 py-5">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="/assets/glc.jpg" alt="About" className='' />
                        </div> 
                        <div className="col-md-6">
                            <h2 className="display-6 mb-2">Who We Are</h2>
                            
                            <p className="lead ">
                            Global Law Chambers Ltd is a well-established, medium-size business law firm. 
                            We offer a full range of corporate and commercial legal services, including but not limited 
                            to dispute resolution, litigation, employment, finance, company restructuring and tax. We also
                           
                            
                           
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;