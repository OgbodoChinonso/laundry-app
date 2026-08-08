//import { useState } from 'react'
import { FaTshirt } from 'react-icons/fa'
import { FaHandsWash} from 'react-icons/fa'
 import '../App.css'
 import { CiDeliveryTruck } from "react-icons/ci";


function HomePage() {
  return (
    <div className="next-steps"> 
      <section>          
      <div className="ticks">
         <h3 style={{ color: "gold" }}>
          Brilliance in every touch...</h3>
          <span style={{marginTop:'50px', fontSize:'25px'}} 
          className='services'>
            We offer 
          </span>
          <div className='serviceIcons'>
           <span>
             <p>Swift pick-up</p>
            <FaTshirt style={{fontSize:'100px'}} />
           </span>
             <span>
             <p>Properly washed fabrics</p>
             <FaHandsWash style={{fontSize: '100px'}}/>
           </span>
             <span>
             <p>On timed delivery</p>
            <CiDeliveryTruck style={{fontSize: '100px'}}/>
           </span>
          </div>
      </div>
      </section> 
      <section id="spacer"></section>
    </div>
  );
}

export default HomePage;