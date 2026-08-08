import {FaFacebook} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaWhatsapp} from 'react-icons/fa'
 import '../App.css'


function FooterNav(){
return(
    <>
      <section>
        <div>
          <p style={{cursor:'pointer',
             color:'white'}}>
              Excited to leave a poster for my brand</p>
        </div>
        <footer className='footerNav'>
          <FaFacebook style={{color:'blue'}}/>
          <FaTwitter style={{color:'blue'}}/>
            <FaInstagram style={{color:'red'}}/>
              <FaWhatsapp style={{color:'green'}}/>
        </footer>
      </section>
    </>
)
} 
export default FooterNav