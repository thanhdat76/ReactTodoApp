import React, {useContext, useEffect} from 'react'

import {AppContext} from '../../AppContext'

import Task from '../Task'

import {Wapper} from './List.styles'

const List = () => {

    const {Lists , Filter} = useContext(AppContext)
    let Filtered = [...Lists]

    switch(Filter){
        case "all":
            Filtered = [...Lists];
            break;
        case "completed":
            Filtered = Lists.filter(List => List.completed)
            break;
        case "uncompleted":
            Filtered = Lists.filter(List => !List.completed)
            break;    
        default:
            Filtered = [...Lists]
            break;
    }

    return(
        <Wapper>
            {Filtered.length === 0 
                ? <h3>List is empty</h3>
                : Filtered.map(task => <Task key={task.id} id={task.id} title={task.title} completed={task.completed}/>)
            }
        </Wapper>
    )
}

export default List;