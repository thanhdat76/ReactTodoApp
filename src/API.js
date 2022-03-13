import axios from "axios";

const url = 'https://622a07d8be12fc4538aff391.mockapi.io'
const apiSettings = {
    getListTodo : async () => {
        try{
            const {data} = await axios.get(`${url}/todo`)
            return data
        }
        catch(error) {console.log(error)}
    },
    getTask : async (id) => {
        try{
            const {data} = await axios.get(`${url}/todo/${id}`)
            return data
        }
        catch(error) {console.log(error)}
    },
    addTask : async (value) => {
        try{
            await axios.post(`${url}/todo`, value)
        }
        catch(error) {console.log(error)}
    },
    editTask : async (id, value) => {
        try{
            await axios.put(`${url}/todo/${id}`, value)
        }
        catch(error){console.log(error)}
    },
    deleteTask : async (id) => {
        try{
            await axios.delete(`${url}/todo/${id}`)
        }
        catch(error) {console.log(error)}
    }
}  

export default apiSettings;

