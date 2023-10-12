import React, { useEffect } from 'react';
import { Route, Routes, BrowserRouter  } from 'react-router-dom'; // Updated import statement
import SignUp from './Pages/Signup';
import LogIn from './Pages/LogIn';
import Main from './Pages/Main';
// import {gettokenaccess} from './Helper/gettokenaccess';
import PrivateRoutes from './Auth/PrivateRoutes'

function App() {
  // const key = gettokenaccess()


  return (

    
    <BrowserRouter>

        <Routes>
          <Route element={<PrivateRoutes/>} >
          <Route path="/" element={<Main />} exact />
          </Route>
         
          <Route path="/login" element={<LogIn />} exact />
          <Route path="/signup" element={<SignUp />} exact />
        </Routes>
    </BrowserRouter>
  
  
   
    

  )
}

export default App
