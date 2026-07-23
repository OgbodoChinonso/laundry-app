import { Link } from 'react-router-dom'
import {  useState } from 'react';
import type { SubmitEvent, ChangeEvent} from 'react'
import { useNavigate } from 'react-router-dom';
import { userDetails } from '../store/userStore';
function Login() {
  const loginUser = userDetails((state) => state.loginUser); 
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    mobileNumber: '',
    password: '',
    location: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>{
    const {name, value} = e.target;
    setFormData((prevData) => ({
      ...prevData, [name]: value
    }))
  }

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();

    loginUser(formData);
    navigate('/welcome');
  };
  return (
    <>
    <form onSubmit={handleSubmit}>
      <div className='form'>

        <h2 className=''>Name</h2>
              <input type='text' 
               name='lastname' 
               value={formData.lastname}
               onChange={handleChange} className='' placeholder='Input name' />

              <h2 className=''>Password</h2>
              <input value={formData.password}
               type='password' className=''
                placeholder='Password' /> 

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

export default Login;