import { REWARD } from "../constants/rewardsConstants";
let initialState = [];

const allRewards = (state = initialState, action) => {
  switch (action.type) {
    case REWARD.GET_ALL:
      return Object.assign({}, state, action.payload);

    default:
      return state;
  }
};

export default allRewards;
