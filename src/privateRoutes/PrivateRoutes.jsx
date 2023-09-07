import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    const location = useLocation()

    if (localStorage.getItem('user')) {
        return children
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>
}

export default PrivateRoutes;