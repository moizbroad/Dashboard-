import React from 'react'
import { Route, Routes, AppRoutes, Navigation  } from 'react-router'
import ForgetPassword from './Pages/ForgotPassword'
import ResetPassword from './Pages/ResetPassword'
import SignUp from './Pages/Signup'
import LogIn from './Pages/LogIn'

const Routes = () => {
  return (
    <>
    <AppRoutes>
    <Route path="/login" element={<LogIn />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/forgetpassword" element={<ForgetPassword />} />
    <Route path="/resetpassword" element={<ResetPassword />} />
    </AppRoutes>

    </>
  )
}

export default Routes