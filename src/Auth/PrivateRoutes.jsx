import React, { useEffect } from 'react';
import { Outlet, Navigate, useNavigate } from 'react-router';
import gettokenaccess from '../Helper/gettokenaccess';
import getrefreshtoken from '../Helper/RefreshToken';
import axios from 'axios';


const PrivateRoutes = () => {
  const navigate = useNavigate();

  // const [token, setToken]=useState({
  //   refresh:""
  // })
  const RefreshToken = async () => {
    
    let data = {
      refresh: getrefreshtoken(),
      
    }
    
    axios.post("https://test-backend.budgetlab.io/accounts/token/refresh/", data).then((res) => {
      if (res.status === 200) {

        localStorage.setItem('access', res.data.access);

        // console.log(access, "aaa")
        return true

      }

    })

      .catch((err) => {
        console.log(err, "error");
        return false
        // toast.error(err.response.data.detail)
      });
  }

  
  
  const parseJwt = (token) => {
   
    // debugger
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      return null;
    }
  };
  // 

  const validateToken = (token) => {
    // debugger
    let rememberME = localStorage.getItem('rememberMe')
    const decodeToken = parseJwt(token);
    if (decodeToken) {
      let date = new Date(decodeToken.exp * 1000);
      if (date < new Date() && rememberME === true) {
        RefreshToken()
        return true 
      }
        
         else {
          
          // localStorage.removeItem('access'); // Changed 'setItem' to 'removeItem' to clear the access token
          // navigate('/')
          return false
          // Route to Login

        }
      }

    }
   
  

  useEffect(() => {
  //  debugger
    const token = localStorage.getItem('access');
    const isValidToken = validateToken(token);

    if (isValidToken) {
      console.log('Token is valid');
    } else {
      console.log('Token is invalid or has expired');
      
    }
   
  }, []);
  // navigate('/login')

  // generate refrs
  

  const auth = {
    gettokenaccess: gettokenaccess(),
     
  
  };

  //  if(!gettokenaccess)
  //  {
  //   navigate ('/login');  
  //  }

  return auth.gettokenaccess ? <Outlet /> : <Navigate to="/login" />  ;



};

export default PrivateRoutes;
