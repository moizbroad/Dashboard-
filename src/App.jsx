import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom'; // Updated import statement
import SignUp from './Pages/SignUp';
import LogIn from './Pages/LogIn';
// import Main from './Pages/Main';
import gettokenaccess from './Helper/gettokenaccess';
import PrivateRoutes from './Auth/PrivateRoutes'
import ForgotPassword from './Pages/ForgotPassword'
import ResetPassword from './Pages/ResetPassword';
import MainTeamPage from './Pages/MainTeamPage';
import DisplayError from './Pages/DisplayError';
import Clickme from './Pages/Clickme';
import MainLayout from './Pages/MainLayout';
import { Navigate, Outlet, useNavigate } from 'react-router';
import SideNav from './Component/Signup/Layout/SideNav';
import MainNav from './Component/Signup/Layout/MainNav';
import UserRegistration from './Pages/UserRegistration';


function App() {
  // const navigate = useNavigate();
  const key = gettokenaccess()


  // const MainLayout = () => {
  //   return (
  //     <div>
  //       {/* You can add any layout components, headers, footers, or sidebars here */}

  //       <MainNav />
  //       <SideNav />

  //       {<Outlet />}
  //     </div>
  //   );
  // };


  return (


    <BrowserRouter>

      <Routes>

        <Route element={<PrivateRoutes />} >


          <Route path="/" element={<MainLayout />} >
            <Route path='/lastpage' element={<Clickme />} />
            <Route path='/main  ' element={<MainTeamPage />} />
            <Route path='/userRegistration' element={<UserRegistration />} />
            <Route path="*" element={< DisplayError />} />
            

          </Route>

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
