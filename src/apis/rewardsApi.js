import axios from "axios";
const baseURL = process.env.REACT_APP_BASE_URL_API;
// GET_ALL_REWARDS_REQUEST
export const getAllRewards = async () => {
  const res = await axios({
    method: "get",
    url: "https://api.itakeactions.org/api/rewards",
  });
  return res.data;
};

export const getRewardBySlug = async (key, slug) => {
  const res = await axios({
    method: "GET",
    url: `https://api.itakeactions.org/api/rewards/${slug}`,
  });
  return res.data;
};
