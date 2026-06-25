import {useState} from 'react'
import {Link} from 'react-router-dom'
function SignUp() {
 const [state, setState] = useState('')
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
        <select value={state} onChange={(e) => setState(e.target.value)} className=''>
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
        <button className=''><Link to="/login">Login</Link></button>
        </div>
    </form> 
    </>
  )
}


export default SignUp