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
    <section className='loginSection'>
       <form onSubmit={handleSubmit}>
      <div className='loginForm'>
        <h2>Name</h2>
              <input type='text' 
               name='lastname' 
               value={formData.lastname}
               onChange={handleChange}
                className='' placeholder='Input name' 
                required/>
             <h2>Password</h2>
              <input value={formData.password}
               type='password'
               name='password'
               onChange={handleChange}
                placeholder='Password' required /> 
                <button type='submit' className=''>Login</button>

                  <p>Don't have an account?</p>
                <Link to="/signup"
                className='linkBtn'>Sign up</Link>
      </div>
    </form> 
    </section>
    </>
  )
}

export default Login;