// use axios for api call
import axios from "axios";
import { successFetch } from "./actionTypes";
import { successFilterData } from "./actionTypes";
import { sucessSort } from "./actionTypes";






function getProductsData(data) {
return {type : successFetch, payload: [...data] };
}


const sortProducts = (by) => {
    return {type : sucessSort, payload : by}
};

const filterProducts = (by) => {
    return {type : successFilterData, payload : by}
};

export { getProductsData, sortProducts, filterProducts };

