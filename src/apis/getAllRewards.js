import axios from "axios";
// GET REQUEST
export function getTodos() {
  return axios({
    method: "get",
    url: "https://api.itakeactions.org/api/rewards",
    // params: {
    //   _limit: 5,
    // },
  }).then((res) => res.data);
}
