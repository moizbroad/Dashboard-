// import  Jwt  from 'jsonwebtoken';
// import { useNavigate } from 'react-router';


// const validateToken = (token) => {
//   const navigate= useNavigate()
//   try {
//     const decoded = Jwt.decode(token);
//     if (decoded && decoded.exp * 1000 > Date.now()) {
//       localStorage.clear()
//     navigate('/login')
    
     
//     }
//   } catch (error) {
//     console.error('Error validating token', error);
//   }
// };

// export default validateToken;