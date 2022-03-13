import React from 'react'

import {Wapper, Input} from './Form.styles'
import { useFormik } from "formik";
import API from '../../API'


import Button from '../Button'
import useGlobalContext from '../../hooks/useGlobalContext'

const Form = () => {

    const {Lists, setLists, isEditing, inputRef, editId, setIsEditing, inputValue, setInputValue, fetchList} = useGlobalContext();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (inputValue === '') {
            if(isEditing) {setIsEditing(false)}
            alert("Please enter values");
        }
        else if (isEditing) {
            setLists(Lists.map(task => {
                    return task.id === editId ? {...task, title: inputValue} : task
                })
            );
            const taskEdit = Lists.find(task => task.id === editId);
            taskEdit.title = inputValue;
            setIsEditing(false)
            setInputValue('')
            await API.editTask(editId, taskEdit)
        }
        else {
            const newTask = {
                id: '123333',
                userId: 1,
                title: inputValue,
                completed: false
            }
            // setLists([...Lists, newTask])
            // await API.addTask(newTask)
            // setInputValue('')

            await API.addTask(newTask)
            setInputValue('')
            fetchList()
        }
    }
    
    // const formik = useFormik({
    //     initialValues: {
    //         userId: "1",
    //         title: '',
    //         completed: false,
    //     },
    //     onSubmit: async (values) => {
    //         values.title = inputValue;
    //         if (values.title === '') {
    //             if(isEditing) {setIsEditing(false)}
    //             alert("Please enter values");
    //         }
    //         else if (isEditing) {
    //             await API.editTask(editId, values)
    //             setIsEditing(false)
    //             setInputValue('')
    //             fetchList()
    //         }
    //         else {
    //             await API.addTask(values)
    //             setInputValue('')
    //             fetchList()
    //         }
    //     }   
    // });

    return(
        <Wapper onSubmit={handleSubmit} >
            <Input 
                ref={inputRef}
                name="inputValue" 
                value={inputValue}
                type="text" 
                placeholder="Add task"
                onChange={e=>setInputValue(e.target.value)}    
            />
            <Button type="submit" text={isEditing ? 'Edit' : 'Add'} />
        </Wapper>
    )
}

export default Form;