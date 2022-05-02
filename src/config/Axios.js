import axios from "axios";
const baseURL = "https://rickandmortyapi.com/api";

const Axios = axios.create({ baseURL });

export default Axios;
