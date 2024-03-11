import { Outlet } from 'react-router-dom'
import Navegacion from '../components/Navegacion';
import Footer from "../components/Footer";




export default function Layout(){
    return(
       <>
       <Navegacion/>
        <Outlet/>
        <Footer />
   </>
    )
}