import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/router.jsx'
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from './provider/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)

/***
 * AUTHOR: MINHAZUL ABEDIN MUNNA
 * TIME: 10:56 PM
 * DATE: 07 September 2023
 * Completed the task for iBios.LTD
 * **/ 
