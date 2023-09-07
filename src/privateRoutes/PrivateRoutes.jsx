import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    const location = useLocation()

    if (localStorage.getItem('user')) {
        return children
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>
}

export default PrivateRoutes;


/***
 * AUTHOR: MINHAZUL ABEDIN MUNNA
 * LINKEDIN: https://www.linkedin.com/in/minhazulabedinmunna/
 * TIME: 10:56 PM
 * DATE: 07 September 2023
 * Completed the task for iBios.LTD
 * **/  