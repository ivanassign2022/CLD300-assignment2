/**
 * App.jsx
 * 
 * The entry point of the system, Define global page Header, Footer and Main Content.
 * Supply body to show the whole page.
 * 
 */

import CssBaseline from '@mui/material/CssBaseline';
import { Outlet, Link } from "react-router-dom";
// Components Imports
import Footer from './components/Footer/Footer'
import Navigation from './components/Navigation/Navigation'
import Loading from './components/Loading/Loading.jsx';

// Template Components from Mui
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react'

// CSS - Global
import './css/App.css'

const loadingtime = 4

function App() {
  const [init, setInit] = useState(true)
  useEffect(() => {
    const interval = setInterval(() => {
      setInit(false);
    }, loadingtime * 1000);
    return () => {
      clearInterval(interval);
      setInit(false);
    };
  },[]);
  

  return (
    <>
    <CssBaseline />
    {init && 
      <Loading mDruation={loadingtime} txt="Loading...." />
    }
    { !init && 
      <>
      
      <Navigation /><Box className="body-wrapper" sx={{ flexGrow: '1' }}><Outlet /></Box> <Footer />
      </>
      }
      
    </>
  )
}
export default App
