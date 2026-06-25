import { Link } from 'react-router-dom'
function Login() {
  return (
    <>
    <form>
        <h2 className=''>Name</h2>
      <input type='text' className='' placeholder='Input name' />
      <h2 className=''>Password</h2>
      <input type='password' className='' placeholder='Password' /> 
        <button className=''>Login</button>
        <div className=''>
          <p>Don't have an account?</p>
        <button className=''><Link to="/signup">Sign up</Link></button>
        </div>
    </form> 
    </>
  )
}


export default Login