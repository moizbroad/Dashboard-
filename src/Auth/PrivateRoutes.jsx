import React from 'react'
import { Outlet, Navigate } from 'react-router'
import gettokenaccess from '../Helper/gettokenaccess'

const PrivateRoutes = () => {
  
    const auth = {
        gettokenaccess: gettokenaccess() // Call the function to get the value
    };

    return (
        auth.gettokenaccess ? <Outlet/> : <Navigate to="/login" />
    );
}

export default PrivateRoutes;
