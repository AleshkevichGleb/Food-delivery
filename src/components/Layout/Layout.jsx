import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Home from "../Home/Home";

const Layout = () => {
    return(
        <>
            <Header/>
            <Home/>
                <Outlet/>
            <Footer/>
        </>
    )
}

export default Layout;