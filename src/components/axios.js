import axios from 'axios'
//https://kingscybercafe.onrender.com/
const instance = axios.create({
 baseURL: "https://kingscybercafe.onrender.com"
})
export default instance