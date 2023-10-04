import axios from 'axios';


const instance = axios.create({

    baseURL : 'https://react-mini-projects-api.classbon.com',

})

export default instance;