import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
    
import Index from './pages';
import Landing from './pages/landing';
import ViewUser from './pages/viewUser';
import Register from './pages/register';
import CreateUser from './pages/createUser';
import CreateFront from './pages/createFront';
import CreateCitas from './pages/createCitas';
import ForgotPassword from './pages/forgotPassword';
  
function App() {
return (
    <Router>
    <Routes>
        <Route exact path='/' element={<Index/>} />
        <Route path='/viewUser' element={<ViewUser/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/landing' element={<Landing/>} />
        <Route path='/createUser' element={<CreateUser/>} />
        <Route path='/createFront' element={<CreateFront/>} />
        <Route path='/createCitas' element={<CreateCitas/>} />
        <Route path='/forgotPassword' element={<ForgotPassword/>} />
    </Routes>
    </Router>
);
}
  
export default App;