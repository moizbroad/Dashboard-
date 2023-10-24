import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom'; // Updated import statement
import SignUp from './Pages/Signup';
import LogIn from './Pages/LogIn';
import Main from './Pages/Main';
import gettokenaccess from './Helper/gettokenaccess';
import PrivateRoutes from './Auth/PrivateRoutes'
import ForgotPassword from './Pages/ForgotPassword'
import ResetPassword from './Pages/ResetPassword';
import MainTeamPage from './Pages/MainTeamPage';
import DisplayError from './Pages/DisplayError';
import Clickme from './Pages/Clickme';
import { Navigate, useNavigate } from 'react-router';


function App() {
  // const navigate = useNavigate();
  const key = gettokenaccess()
  // console.log(key,"token")
  // if (key)
  // {
  //    path="login"? navigate("/"): null;
  // }
  

 




  return (


    <BrowserRouter>
                 
      <Routes>
        <Route element={<PrivateRoutes />} >
          <Route path="/" element={<Main />} exact />
         < Route path="/main" element={< MainTeamPage />} exact /> 
         {/* {key && <Route path="/login" element={<Navigate to="/" />} />}
          {key && <Route path="/signup" element={<Navigate to="/" />} />}
          {!key && <Route  element={<Navigate to="/login" />} />} */}
          
                 
          <Route path="*" element={< DisplayError />} exact />


        


        </Route>

        
          
        <Route path="/login" element={<LogIn />} exact />
        <Route path="/signup" element={<SignUp />} exact />
        <Route path="/forgotpassword" element={<ForgotPassword />} exact />
        <Route path="/reset-password" element={<ResetPassword />} exact />
        <Route path="/lastpage" element={<Clickme />} exact />
        <Route path="*" element={<LogIn />} exact />
        {/* <Route path="/main-team-page" element={< MainTeamPage/>} exact /> */}
        {/* <Route path="/main" element={<MainTeamPage />} exact /> */}
       
               

        



      </Routes>
    </BrowserRouter>





  )
}

export default App
