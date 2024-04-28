import axios from "axios";

const Url = axios.create({
  baseUrl: "https://dummyjson.com",
});

export default Url;
