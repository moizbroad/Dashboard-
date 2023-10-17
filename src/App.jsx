import React, { useEffect } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom'; // Updated import statement
import SignUp from './Pages/Signup';
import LogIn from './Pages/LogIn';
import Main from './Pages/Main';
// import {gettokenaccess} from './Helper/gettokenaccess';
import PrivateRoutes from './Auth/PrivateRoutes'
import ForgotPassword from './Pages/ForgotPassword'
import ResetPassword from './Pages/ResetPassword';
import MainTeamPage from './Pages/MainTeamPage';
import DisplayError from './Pages/DisplayError';


function App() {
  // const key = gettokenaccess()


  return (


    <BrowserRouter>
                 
      <Routes>
        <Route element={<PrivateRoutes />} >
          <Route path="/" element={<Main />} exact />
          <Route path="/main" element={< MainTeamPage />} exact />
          <Route path="*" element={< DisplayError />} exact />
        </Route>

        <Route path="/login" element={<LogIn />} exact />
        <Route path="/signup" element={<SignUp />} exact />
        <Route path="/forgotpassword" element={<ForgotPassword />} exact />
        <Route path="/reset-password" element={<ResetPassword />} exact />
        <Route path="*" element={<LogIn />} exact />
        {/* <Route path="/main-team-page" element={< MainTeamPage/>} exact /> */}
        {/* <Route path="/main" element={<MainTeamPage />} exact /> */}

      </Routes>
    </BrowserRouter>





  )
}

export default App
