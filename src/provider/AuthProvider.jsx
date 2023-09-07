import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    useEffect(()=>{
        const userInfo = JSON.parse(localStorage.getItem('user'))
        setUser(userInfo)
    },[])
    const authInfo = {
        user,
        setUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;


/***
 * AUTHOR: MINHAZUL ABEDIN MUNNA
 * LINKEDIN: https://www.linkedin.com/in/minhazulabedinmunna/
 * TIME: 10:56 PM
 * DATE: 07 September 2023
 * Completed the task for iBios.LTD
 * **/ 