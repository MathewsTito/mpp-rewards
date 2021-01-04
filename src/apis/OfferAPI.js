import axios from 'axios';

export default axios.create({
    /*baseURL: "http://localhost:3000/",*/
    baseURL: "https://mpp-mock-svc-asys.cf-ssb-z3-dev.discoverfinancial.com/",
    responseType: "json"
});