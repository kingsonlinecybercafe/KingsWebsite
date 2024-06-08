import axios from 'axios'
//https://kingscybercafe.onrender.com/
const instance = axios.create({
 baseURL: "http://localhost:5000"
})
export default instance