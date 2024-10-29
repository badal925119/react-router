import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <h2 className="bg-teal-300 p-2 shadow-md mt-4">Hellow form home</h2>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;