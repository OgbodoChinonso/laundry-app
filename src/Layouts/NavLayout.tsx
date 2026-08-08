import Nav from '../Components/Nav.tsx'
import FooterNav from '../Components/FooterNav.tsx'
import { Outlet } from 'react-router-dom'

export default function NavLayout(){
    return(
        <>
        <Nav />
        <Outlet />
        <FooterNav />
        </>
    )
}