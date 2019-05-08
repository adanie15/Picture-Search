import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
            'Client-ID 1ae50e10aaad74454f1403bac4a49cfd6374b4278ad14440a5662f290b95790b'
    }
})

 