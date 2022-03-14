import React, {useContext} from 'react'

import {AppContext} from '../../AppContext'

import Task from '../Task'

import {Wapper} from './List.styles'

const List = () => {

    const {List, Filter} = useContext(AppContext)
    let Filtered = [...List]

    switch(Filter){
        case "all":
            Filtered = [...List];
            break;
        case "completed":
            Filtered = List.filter(List => List.completed)
            break;
        case "uncompleted":
            Filtered = List.filter(List => !List.completed)
            break;    
        default:
            Filtered = [...List]
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