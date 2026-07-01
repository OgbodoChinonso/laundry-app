import { Link } from 'react-router-dom'
import { useState } from 'react';
import type { SubmitEvent} from 'react'
import { useNavigate } from 'react-router-dom';
import { userDetails } from '../store/userStore';
function Login() {
  const loginUser = userDetails((state) => state.loginUser); 
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    location: 'abuja',
    mobileNumber: ''
  });

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();

    // 1. Save data to the global Zustand store
    loginUser(formData);
    navigate('/welcome');
  };
  return (
    <>
    <form onSubmit={handleSubmit}>
      <div className='form'>
        <h2 className=''>Name</h2>
              <input type='text' className='' placeholder='Input name' />
              <h2 className=''>Password</h2>
              <input type='password' className='' placeholder='Password' /> 
                <button className=''>Login</button>
                <div className=''>
                  <p>Don't have an account?</p>
                <button type='submit' className=''><Link to="/signup">Sign up</Link></button>
                </div>
      </div>
    </form> 
    </>
  )
}


// export default Login

 // Import your store

// function Login() {
  

//   return (
//     <form onSubmit={handleSubmit}>
//       {/* ... your inputs go here ... */}
//       <button type="submit">Log In</button>
//     </form>
//   );
// }

export default Login;