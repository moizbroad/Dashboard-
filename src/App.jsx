import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom'; // Updated import statement
import SignUp from './Pages/Signup';
import LogIn from './Pages/LogIn';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LogIn/>} />
        <Route path="/signup" element={<SignUp />} />
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
