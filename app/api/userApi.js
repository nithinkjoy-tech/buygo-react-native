import Storage from "../auth/storage";
import apiClient from "./client";

const getCartItems = async () => {
  const {data} = await apiClient.post("/users/getcartitems", {
    id: await Storage.getUserId(),
  });
  return data;
};

const removeCartItem = async mobileId => {
  const {data} = await apiClient.post("/users/removecartitem", {
    userId: await Storage.getUserId(),
    mobileId,
  });
  return data;
};

const addItemToCart=async(mobileId,userId)=>{
  return await apiClient.post("/users/addtocart",{mobileId,userId})
}

export default {getCartItems, removeCartItem,addItemToCart};
