import { Outlet } from "react-router-dom";
import Navbar from '../Pages/Home/Shared/Navbar';
import Footer from "../Pages/Home/Shared/Footer";

const Main = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    );
};

export default Main;