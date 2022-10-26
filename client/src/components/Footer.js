import React from 'react';
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <section id="footer">
            <div classNam="container padding">
      <div className="row">
        <div className="col-md-4 p-5">
        
        
        <h6 >Follow Us</h6>
        <hr className=" mx-auto" />
              
               
               <div className="">
               <Link className="" to="/">
                <img src="/assets/icons8-facebook-50.png" className='footer-icon'  alt=""/></Link>
                <Link className="" to="/">
                <img src="/assets/icons8-instagram-50.png" className='footer-icon' alt=""/></Link>
                <Link className="" to="/">
                <img src="/assets/icons8-youtube-50.png" className='footer-icon' alt=""/></Link>
                <Link className="" to="/">
                <img src="/assets/icons8-twitter-50.png" className='footer-icon' alt=""/></Link>
                <Link className="" to="/">
                <img src="/assets/icons8-linkedin-circled-50.png" className='footer-icon' alt=""/></Link>
                
                
                
                 
                
               </div>
        
            
         
        
        </div>
        <div className="col-md-4 p-5">
            <h6>Open Time</h6>
            <hr className=" mx-auto" />
            <p>Opening days: Monday-Friday</p>
            <p>Working Hours: 8AM-5PM</p>
            
            
           
          </div>
          
          <div className="col-md-4 p-5" >
          <h6>Contact Us</h6>
          <hr className=" mx-auto" />
          <p><i className="fa fa-map-marker"></i>  KN 20 Ave,Kigali Rwanda </p>
          <p><i className="fa fa-phone"> </i>  +250788827458/+250788716275</p>
          <p><i className="fa fa-envelope"></i> info@globalawchambers.com</p>
          </div>
          </div></div>

          <div className="col-12 text-center">
               <hr className="light" />
               <p> &copy; Global Law Chambers-All Right Reserved</p>
             </div>
            </section>



            
        </div>
    );
}

export default Footer;