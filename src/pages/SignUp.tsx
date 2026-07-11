import {useState} from 'react'
import type { ChangeEvent } from 'react'
import type { SubmitEvent } from 'react'
import { userDetails } from '../store/userStore.ts';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'
import '../App.css'

function SignUp() {
  const loginUser = userDetails((stat) => stat.loginUser);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
  firstname:'',
  lastname:'',
  location: 'abuja',
  mobileNumber: '',

 });

 const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

   const handleSubmit = (e: SubmitEvent) => {
     e.preventDefault();
     loginUser(formData); navigate('/welcome')
 }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <div className='form'>
        <h2 className=''>Lastname</h2>
              <input type='text'
              value={formData.lastname} 
              onChange={handleChange}
               className=''
               name= 'lastname'
                placeholder='Input lastname' />

               <h2 className=''>Firstname</h2>
              <input type='text' 
                value={formData.firstname}
                onChange={handleChange}
                className='' 
                name= 'firstname'
                placeholder='Input firstname' />

               <h2 className=''> Mobile Number</h2>
              <input type='text' 
                value={formData.mobileNumber} 
                className=''
                name= 'mobileNumber'
                placeholder='input mobile number'
                onChange={handleChange} />

              <label >
                 <h2 className=''>Where are you registering from ?</h2>
                <select
                  onChange={handleChange}
                  value={formData.location} 
                  name='location' 
                  className=''>
                <option value='abuja' >Abuja</option>
                <option value='kaduna' >Kaduna</option>
                <option value='lagos'>Lagos</option>
                <option value='nasarawa'>Nasarawa</option>
                <option value='phort-hacourt'>Phort-Hacourt</option>
               </select>
              </label>

              <h2 className=''>Password</h2>
              <input type='password' className='' placeholder='Password' /> 
 
                <button 
                  type='submit' className=''>Sign up</button>
                <div className=''>
                  <p>Already have an account ? Login your account</p>
                <Link to='/login'><button type='button'>Login</button></Link>
                </div>
      </div>
    </form> 
    </>
  )
}


export default SignUp