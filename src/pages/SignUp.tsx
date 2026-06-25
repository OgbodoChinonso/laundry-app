//import {useState, ChangeEvent, FormEvent} from 'react'
import {Link} from 'react-router-dom'

//  interface FormData{
//     username: string;
//     email: string;
//     serviceType: string;
//  }
function SignUp() {
//  const [formData, setFormData] = useState<FormData>({
//   username:'',
//   email:'',
//   serviceType: 'wash-and-fold'
//  });

//  const handleChange = (e: ChangeEvent<HTMLFormElement | HTMLSelectElement>) =>{
//   const {name, value} = e.target;
//   setFormData((prevData) =>{...prevData, [name]: value});

//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault(); // Stops the page from reloading
//     console.log("Collected User Data:", formData);
//  }
  return (
    <>
    <form>
        <h2 className=''>Lastname</h2>
      <input type='text' className='' placeholder='Input lastname' />
       <h2 className=''>Firstname</h2>
      <input type='text' className='' placeholder='Input firstname' />
       <h2 className=''>Mobile Number</h2>
      <input type='number' className='' />
      <label >
         <h2 className=''>Where are you registering from ?</h2>
        <select className=''>
        <option value='abuja' >Abuja</option>
        <option value='kaduna' >Kaduna</option>
        <option value='lagos'>Lagos</option>
        <option value='nasarawa'>Nasarawa</option>
        <option value='phort-hacourt'>Phort-Hacourt</option>
       </select>
      </label>
      <h2 className=''>Password</h2>
      <input type='password' className='' placeholder='Password' /> 
        <button className=''>Sign up</button>
        <div className=''>
          <p>Already have an account ? Login your account</p>
        <Link to='/login'><button type='button'>Login</button></Link>
        </div>
    </form> 
    </>
  )
}


export default SignUp