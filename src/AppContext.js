import React, {useState, useEffect, useRef, createContext} from 'react';

import API from './API'

const AppContext = createContext();

const AppProvider = ({children}) =>{

    const [List, setList] = useState([]);
    const [Filter, setFilter] = useState('all')
    const [isEditing, setIsEditing] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [editId, setEditId] = useState()
    
    const inputRef = useRef(null)

    const fetchList = async () =>{
        try {
            const tasks = await API.getListTodo()
            setList(tasks);
        }catch(error){console.log(error);}
    }

    useEffect(() => {
        fetchList();
    }, []);

    const handleDelete = async (id) =>{
        setList(List.filter(list => list.id !== id))

        await API.deleteTask(id);
        // fetchList()
    }

    const handleEdit =  (id) =>{
        const {title} = List.find((task) => task.id === id);
        setIsEditing(true);
        setEditId(id);
        setInputValue(title);
        // inputRef.current.value = title;
        inputRef.current.focus();
    }

    const toggleDone = async (id) =>{
        setList(List.map(task => task.id === id ? {...task, completed: !task.completed} : task))

        const task = List.find((task) => task.id === id)
        task.completed = !task.completed
        await API.editTask(id, task)
        // fetchList()
    }


    return(
        <AppContext.Provider
            value={{
                List,
                setList,
                Filter, 
                setFilter, 
                isEditing,
                setIsEditing,
                editId,
                setEditId,
                inputValue,
                setInputValue,
                inputRef,
                handleDelete,
                handleEdit,
                fetchList,
                toggleDone
            }}
        >
            {children}
        </AppContext.Provider>
    ) 
}



export {AppProvider, AppContext}