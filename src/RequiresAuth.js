import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

export const RequiresAuth = ({children}) => {
  const location = useLocation();
  const token = localStorage.getItem("token")
  console.log(token)
    return token ? (children) : (
        <Navigate to='/login' state={{from: location}} replace />
    )

}
