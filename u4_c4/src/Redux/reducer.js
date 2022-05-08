import { successFetch, successFilterData, sucessSort } from "./actionTypes";


const initState = {
  data: [],
  isLoading: false,
  isError: false,
  filterData: [],
  products: [],
};

const reducer = (state = initState , { type, payload }) => {
  console.log(state);
  switch(type){
    case successFetch:
      return {...state, data : [...payload]};
    case successFilterData: 
    return {
      ...state, 
      filterData : [...state.data].filter(
        (item) => item.category === payload || payload === 'products' )
      }

      case sucessSort:
        return {
          ...state,
        sort : [...state.filterData].filter(
          (item) => {
            if(payload === 'asc')
            return item.sort((a,b) => -1);
          }
        )
        }
      default : 
      return state
  }


};
export { reducer };
