import React from 'react'
import { Outlet, Navigate } from 'react-router'
import gettokenaccess from '../Helper/gettokenaccess'

const PrivateRoutes = () => {
    // const [login , setLogin]= useState()
    // const [sigup , setSignp]= useState()
//     https://test-backend.budgetlab.io/accounts/password_reset/
//     payload :
//     {email: "faheem.bukhari1122@gmail.com"}
// email
// : 
// "faheem.bukhari1122@gmail.com"
// {"message":"success"}
  
    const auth = {
        gettokenaccess: gettokenaccess() // Call the function to get the value
    };

    return (
        auth.gettokenaccess ? <Outlet/> : <Navigate to="/login"  />

        
    );
}

export default PrivateRoutes;
