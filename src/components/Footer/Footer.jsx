import './Footer.css';
import * as React from 'react';
import {Box} from '@mui/material';
import { useState, useEffect } from 'react'

export default function Footer() {
  const [greyMode, setGreyMode] = useState(0);

  useEffect(() => {
    if (greyMode) {
      document.body.style.filter = "grayscale(1)";
    } else {
      document.body.style.filter = "grayscale(0)";
    }
  }, [greyMode]);

  return (
    <Box className="footer" >
      <div>Next AI Copyright &copy;2024 </div>
      <div>Terms and condition</div>
      <div><a href="mailto:info@nextai">info@nextai</a> </div>
      <div>Sitemap </div>
      <div>
      <button onClick={() => setGreyMode(!greyMode)} type="button">
        <span className="is-block">{greyMode ? "Bright Mode" : "Dark Mode"}</span>
      </button>
      </div>
      
    </Box>
  );
}
