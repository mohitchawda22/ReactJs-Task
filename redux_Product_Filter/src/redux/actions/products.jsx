import { FETCH_PRODUCTS, FETCH_PRODUCTS_BY_ID, SET_CATEGORY, SET_LOADING, SET_PRICE, SET_PRODUCTS } from "../contants/actionTypes";

export const setProducts = (data) => ({ type: SET_PRODUCTS, payload: data });
export const setCategory = (category) => ({ type: SET_CATEGORY, payload: category });
export const setPrice = (range) => ({ type: SET_PRICE, payload: range });

export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch({type:SET_LOADING,payload:true})
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      console.log(data);
      dispatch({ type: FETCH_PRODUCTS, payload: data });
    } catch (error) {
      console.log("Error fetching products:", error);
    }finally{
      dispatch({type:SET_LOADING,payload:false})
    }
  };
};

export const fetchProductById=(productId)=>{
  return async(dispatch)=>{
    dispatch({type:SET_LOADING,payload:true})
    try {
      const res=await fetch(`https://fakestoreapi.com/products/${productId}`)
      const data=await res.json()
      console.log(data);
      dispatch({type:FETCH_PRODUCTS_BY_ID,payload:data})
    } catch (error) {
      console.log(error)
    }finally{
      dispatch({type:SET_LOADING,payload:false})
    }
  }
}
   