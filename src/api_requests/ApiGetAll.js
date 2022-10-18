import axios from 'axios';


export const apiGetAll = async () => {
    
    return (await axios.get('http://localhost:8080/api/gems/')).data;
}


export const apiGetAllWithSort = async (sort) => {
    return (await axios.get('http://localhost:8080/api/gems/', {
        params: { sort: sort }
    })).data;
}


export const apiGetById = async (id) => {
    return (await axios.get('http://localhost:8080/api/gems/' + id)).data;
}

