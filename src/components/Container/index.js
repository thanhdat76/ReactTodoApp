import React from 'react'

import {Wapper} from './Container.styles'

const Container = ({children}) => (
    <Wapper>
        {children}
    </Wapper>
)

export default Container;