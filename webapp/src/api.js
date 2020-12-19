import Axios from "axios";

const api = Axios.create({ baseURL: "https://api.universities.com.br" });

export default api;
