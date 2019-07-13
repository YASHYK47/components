import axios from "axios";

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:"Client-ID 5d35f4d92f0455dc1e43df6993c8734a96a69e33c30ad1a17b7323cab1f0cc11"
    }
})