import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../utils/useAuth'

const PublicRoutes = (props: any) => {
    const auth = useAuth();

   return auth ? <Navigate to='/profile'/> : <Outlet />
}

export default PublicRoutes