import * as React from 'react';

import logo from './logo.svg'
import  './logo.css'

function Logo({size, showCropName = false}){
  return (
    <div className="logo-wrapper">
        <img src={logo} width={size} height={size} alt="Next-IT" />
       {showCropName && <span className="LogoFont" style={{ fontSize:size*0.64+"px" ,  textWrap: 'nowrap',lineHeight:size+"px",  }}>Next AI</span>}
    </div>
  )
}

export default Logo;