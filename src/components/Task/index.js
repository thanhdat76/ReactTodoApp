import React from 'react'
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdDeleteOutline,
} from "react-icons/md";
import { FiEdit } from "react-icons/fi";

import {Wapper, Button} from './Task.styles'
import useGlobalContext from '../../hooks/useGlobalContext'

const Task = ({id, title, completed}) =>{

    const {handleDelete, handleEdit, toggleDone} = useGlobalContext();

    return (
        <Wapper className = {completed ? "task-done" : ""}>
            <p>{title}</p>
            <Button onClick={()=>toggleDone(id)}>
                {completed ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
            </Button>
            <Button onClick={()=> handleDelete(id)}>
                <MdDeleteOutline />
            </Button>
            <Button onClick={()=> handleEdit(id)}>
                <FiEdit />
            </Button>
        </Wapper>
    )
}

export default Task;