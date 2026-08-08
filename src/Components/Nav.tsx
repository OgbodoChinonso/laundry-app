import {Link} from 'react-router-dom'

 import '../App.css'


function Nav() {
  return (
    <>
     <section className='mainNav'>
     <nav>
            <ul>
              <li><Link to="/" className='navLink'>Home</Link></li>
              <li><Link to="/login" className='navLink'>Login</Link></li>
              <li><Link to="/signup" className='navLink'>Sign up</Link></li>
              <li><Link to="/about" className='navLink'>About us</Link></li>
            </ul>
          </nav>
           <div>
      <img className='headerLogo'/> 
    </div>
      </section>
    
    </>
  )
}


export default Nav