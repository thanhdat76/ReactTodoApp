import React from 'react'

import {Wapper} from './Filter.styles'

import Button from '../Button'

import useGlobalContext from '../../hooks/useGlobalContext'

const Filter = () => {

    const {Filter, setFilter} = useGlobalContext();
    const handleFilter = (e) => {
        setFilter(e.target.dataset["filter"])
    }

    return(
        <Wapper>
            <Button active = {Filter === 'all' ? 'active' : ''}  callback={handleFilter} dataFilter = 'all'  text="All tasks" />
            <Button active = {Filter === 'completed' ? 'active' : ''} callback={handleFilter} dataFilter = 'completed' text="Completed" />
            <Button active = {Filter === 'uncompleted' ? 'active' : ''} callback={handleFilter} dataFilter = 'uncompleted' text="Uncompleted" />
        </Wapper>
    )
}

export default Filter;