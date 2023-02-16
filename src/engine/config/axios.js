// Core
import axios from "axios";

 const instance = axios.create({
  baseURL: import.meta.env.VITE_API_LINK,
  headers: {
    "Content-Type": "aplication/json",
  },
});


const api = Object.freeze({
    getDestinations(){
        return instance.get('destination')
    },
    getHotels(params){
        return instance.get('destination',{params})
    },
})

export default api