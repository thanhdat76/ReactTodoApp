import React from 'react'

import {Wapper} from './Button.styles'

const Button = ({text, callback, dataFilter, active, type}) =>(
    <Wapper 
        type={type} 
        className={active} 
        data-filter={dataFilter} 
        text={text} 
        onClick={callback}
    >
        {text}
    </Wapper>
)

export default Button;