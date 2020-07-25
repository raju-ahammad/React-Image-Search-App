import axios from 'axios'

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: 'Client-ID M-aaqDsoARfNCX8n4SHL6TYbdC3-TpjSq3oVxSKrMCw'
    }
});