import './Footer.css';
import * as React from 'react';
import {Box} from '@mui/material';

export default function Footer() {
  const [value, setValue] = React.useState(0);

  return (
    <Box className="footer" >
      <div>Next AI Copyright &copy;2024 </div>
      <div>Terms and condition</div>
      <div>info@nextai </div>
      <div>Sitemap </div>
      
    </Box>
  );
}
