//import {Link} from 'react-router-dom'
import { userDetails } from '../store/userStore.ts'


function Welcome(){
  const lastname = userDetails((state) => state.user?.lastname)
  return(
    <>
    <h1 style={{color: 'white'}}>Happy to see you {lastname}</h1>
    </>
  )
}

export default Welcome