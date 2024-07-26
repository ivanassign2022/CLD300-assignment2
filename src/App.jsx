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

// Template Components from Mui
import Box from '@mui/material/Box';



// CSS - Global
import './css/App.css'

function App() {

  return (
    <>
    <CssBaseline />
      <Navigation />
      
      <Box className="body-wrapper" sx={{ flexGrow: '1' }}>
      <Outlet />
      </Box> 
      <Footer />
    </>
  )
}
export default App
