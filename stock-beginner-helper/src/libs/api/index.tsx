import axios from 'axios';

export default axios.create({
    baseURL: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com',
    headers: {
        "x-rapidapi-key": "336b500b63msh97b763093e2eeb2p1e9296jsnf8688a47f672",
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
        "useQueryString": true
    }
});
