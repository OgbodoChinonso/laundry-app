import {Link} from 'react-router-dom'
//import capture from '../assets/images/capture.PNG'
 import '../App.css'


function Nav() {
  return (
    <>
     <section >
      <div id="main-header">
      {/* <img 
      className='img'
       src={capture} alt='laundry name' /> */}
      <header className='headerLogo'>
          <h1 style={{ color: "gold" }}></h1> 
        </header> 
    </div>
     <nav className="main-nav">
            <ul style={{ listStyleType: 'none' }}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">Sign up</Link></li>
              <li><Link to="/about">About us</Link></li>
            </ul>
          </nav>
      </section>
    </>
  )
}


export default Nav