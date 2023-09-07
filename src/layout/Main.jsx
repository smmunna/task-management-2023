import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "../shared/Header/Header";
import Footer from "../shared/Footer/Footer";

const Main = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
            <ScrollRestoration />
        </div>
    );
}

export default Main;

/***
 * AUTHOR: MINHAZUL ABEDIN MUNNA
 * TIME: 10:56 PM
 * DATE: 07 September 2023
 * Completed the task for iBios.LTD
 * **/ 
