import {useContext} from 'react';

import {AppContext} from '../AppContext'

const useGlobalContext = () =>{
    return useContext(AppContext)
}

export default useGlobalContext