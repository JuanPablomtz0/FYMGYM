import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import { ColorModeScript } from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react"
    
import Index from './pages';
import Landing from './pages/landing';
import ViewUser from './pages/viewUser';
import Register from './pages/register';
import CreateUser from './pages/createUser';
import CreateFront from './pages/createFront';
import CreateCitas from './pages/createCitas';
import ForgotPassword from './pages/forgotPassword';

const theme = extendTheme({
  styles: {
    global: {
      input: {
        marginBottom: '10px',
        height: '4vh',
      },
      select: {
        height: '4vh',
        backgroundColor: "#8b8e89",
      },
      input: {
        marginBottom: '20vh',
      },
      h1: {
        color: "#a00808",
        fontSize: '55px',
        fontWeight: '700',
      },
      h2: {
        color: "#143939",
        fontSize: '55px',
        fontWeight: '700',
        paddingLeft: '10vh',
      },
      img: {
      },
      p: {
        color: "#1e5555",
      },
      hr: {
        width: "50%",
        border: "0.5px solid #a00808",
        marginTop: "20px",
        marginBottom: "20px"
      },
      Button: {
        width: "40vh",
        backgroundColor: "#8b8e89",
      },
      body: {
        bg: '#383937',
        color: 'white',
      },
      Input: {
        backgroundColor: "#383937", 
      },
      // styles for the `a`
      a: {
        color: 'white',
        fontSize: '18px',
        _hover: {
          textDecoration: 'underline',
        },
      },
    },
  },
})
  
function App() {
return (
    <ChakraProvider theme={theme}>
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
    </ChakraProvider>
);
}
  
export default App;