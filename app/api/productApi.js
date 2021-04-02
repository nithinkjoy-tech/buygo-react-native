import apiClient from "./client";

const getMobileById = async id => {
  const {data: mobile} = await apiClient.get(`/mobiles/${id}`);
  return mobile;
};

const createNewMobile = async mobileData => {
  await apiClient.post("/mobiles", mobileData);
};

const updateMobileById = async (id, mobileData) => {
  await apiClient.put(`/mobiles/${id}`, mobileData);
};

export default {getMobileById, createNewMobile, updateMobileById};
