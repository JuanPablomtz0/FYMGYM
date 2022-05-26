import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import { ColorModeScript } from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react"
    
import Index from './pages';
import Login from './pages/login';
import Landing from './pages/landing';
import Register from './pages/register';
import CreateUser from './pages/createUser';
import ForgotPassword from './pages/forgotPassword';
import Testing from './pages/testing'

const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      h1: {
      	color: "#143939",
      	fontSize: '55px',
      	fontWeight: '700',
      },
      p: {
      	color: "#1e5555",
      },
      hr: {
      	width: "50%",
     	border: "0.5px solid #328e8e",
     	marginTop: "20px",
     	marginBottom: "20px"
      },
      Button: {
      },
      body: {
        bg: '#d6e8e8',
        color: 'white',
      },
      input: {
      	bg: '#5ba5a5',
      },
      // styles for the `a`
      a: {
        color: '#287272',
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
					<Route path='/login' element={<Login/>} />
					<Route path='/register' element={<Register/>} />
					<Route path='/landing' element={<Landing/>} />
					<Route path='/createUser' element={<CreateUser/>} />
					<Route path='/forgotPassword' element={<ForgotPassword/>} />
					<Route path='/testing' element={<Testing/>} />
				</Routes>
			</Router>
		</ChakraProvider>
	);
}
  
export default App;
