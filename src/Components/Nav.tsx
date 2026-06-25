import {Link} from 'react-router-dom'


function Nav() {
  return (
    <>
    <nav className="main-nav">
            <ul style={{ listStyleType: 'none' }}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">Sign up</Link></li>
              <li><Link to="/about">About us</Link></li>
            </ul>
          </nav>
    </>
  )
}


export default Nav