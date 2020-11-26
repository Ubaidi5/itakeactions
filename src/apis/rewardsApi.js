import axios from "axios";

// GET_ALL_REWARDS_REQUEST
export const getAllRewards = async () => {
  const res = await axios({
    method: "get",
    url: "https://api.itakeactions.org/api/rewards",
  });
  return res.data;
};
