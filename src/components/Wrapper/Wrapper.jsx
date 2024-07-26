import * as React from 'react';
import './wrapper.css'

// Predefine wrapper class: wrapper-small wrapper-medium wrapper-large

function Wrapper({children, wrapperCls}){
    const wrapperFClass = ["wrapper", wrapperCls].join(' ')
    return (
        <div className={wrapperFClass}>
            {children}
        </div>
    )
}

export default Wrapper;