import {Link} from 'react-router-dom'
import logo from '../assets/images/logo.png'
 import '../App.css'


function Nav() {
  return (
    <>
     <section >
      <div id="main-header">
      <img src={logo}></img>
      <header>
          <h1 style={{ color: "gold" }}>LakeSide Laundry</h1> 
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