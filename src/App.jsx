import React from 'react';
 import { Route, Routes, BrowserRouter } from 'react-router-dom'; // Updated import statement
import SignUp from './Pages/Signup';
import LogIn from './Pages/LogIn';
import Main from './Pages/Main';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

    </BrowserRouter>
    // <>
    // <SignUp/>
    // <LogIn/>
    // <Main/>
    // </>
  );
}

export default App;
