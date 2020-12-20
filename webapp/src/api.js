import Axios from "axios";

const api = Axios.create({ baseURL: "http://localhost:3002" });

export default api;
