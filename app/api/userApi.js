import Storage from "../auth/storage";
import apiClient from "./client";

const getUserId = async () => {
  const data = await Storage.getUser();
  return data._id;
};

const getCartItems = async () => {
  const {data} = await apiClient.post("/users/getcartitems", {
    id: await getUserId(),
  });
  return data;
};

const removeCartItem = async mobileId => {
  console.log(mobileId);
  const {data} = await apiClient.post("/users/removecartitem", {
    userId: await getUserId(),
    mobileId,
  });
  return data;
};

export default {getCartItems, removeCartItem};
