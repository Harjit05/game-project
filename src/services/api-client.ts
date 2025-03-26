import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'dd7fd091d66f4c7a84935fa699d34a05'
    }
})