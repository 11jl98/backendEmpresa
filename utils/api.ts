import axios from "axios";

const Axios =  axios.create({
    baseURL: 'http://bmsltda.com.br/',
    timeout: 30000,
  });

  export default Axios
