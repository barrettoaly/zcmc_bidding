import axios from "axios";
const server = "http://192.168.5.166/zcmc_bidding_api/api/get_suppliers.php";

const api = axios.create({
  baseURL: server,
});

export default api;
