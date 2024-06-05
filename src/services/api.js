import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api';

export const fetchImages = async () => {
    const response = await axios.get('/')
    return response.data
}