// import http from '../http';

import {http} from '../http';

const fetchAllCatehory = () => {
    return http.get("/api/category/page");

}


export {fetchAllCatehory};
