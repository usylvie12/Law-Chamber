import React from 'react';
import { Link } from 'react-router-dom';

const Attorneys = () => {
    return (
        <div>

           <section id="attorneys">
          
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12">
                        <h2 className="display-6 text-center ">
                        Our Attorneys
                        </h2>
                        <hr className="w-25 mx-auto" />
                    </div>
                </div>
                <div className="container padding">
       <div className="row padding">
         <div className="col-md-3">
            <div className='card shadow'>

         <div className='imgBx shadow'>
                
         <img src="/assets/claude.png" alt="About" className='' />
            </div>
            <div className="content">
            <div className="details">
    <h5>Rwibasira Jean Claude </h5>
    <p>Program Manager</p>
    <Link className="rounded-pill shadow" to="/Register">Message</Link>
  </div>
  
    
  </div>

            </div>
      
  </div>
  <div className="col-md-3">
  <div className='card shadow'>

<div className='imgBx shadow'>
       
<img src="/assets/provy.png" alt="About" className='' />
   </div>
   <div className="content">
   <div className="details">
<h5>Providence  Ingabire</h5>
<p>Partner</p>
<Link className="rounded-pill shadow" to="/Register">Message</Link>
</div>


</div>

   </div>
    
  </div>
    
    <div className="col-md-3">
    <div className='card shadow'>

<div className='imgBx shadow'>
       
<img src="/assets/maya.png" alt="About" className='' />
   </div>
   <div className="content">
   <div className="details">
<h5>Maya Pecana</h5>
<p>Collaborator</p>
<Link className="rounded-pill shadow" to="/Register">Message</Link>
</div>


</div>

   </div>
    
  </div>
  <div className="col-md-3">
  <div className='card shadow'>

<div className='imgBx shadow'>
       
<img src="/assets/vivi.png" alt="About" className='' />
   </div>
   <div className="content">
   <div className="details">
<h5>Jean Vianney Mwumvira</h5>
 <p>Collaborator</p>
<Link className="rounded-pill shadow" to="/Register">Message</Link>
</div>


</div>

   </div>
      
    </div>
    </div>
    </div>
                
                                                </div>
                                                
                                                <div class="container " >
                <h3 class="text-center text-capitalize">Existing Client Base</h3>
                    <hr className="w-25 mx-auto" />
                <div className="row padding">
          <div className="col-md-10 mx-auto p-5">
          <img src="/assets/investment.jpg" alt="Practice" id='client' className=''/>
              
             
                  
                  
                     
                  
                  <img src="/assets/gsv.jpg" alt="Practice" id='client' className=''/>
                              
                             
                      <img src="/assets/baron.jpg" alt="Practice" id='client' className=''/>
                          
                         
                          <img src="/assets/Universal.png" alt="Practice" id='client' className=' '/>
                              </div></div></div>


                                                
           </section>

          
            
        </div>
    );
}

export default Attorneys;