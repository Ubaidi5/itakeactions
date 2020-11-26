import React from "react";
import Rewards from "../../components/reward/reward";
import { getAllRewards } from "../../apis/rewardsApi";
import { useQuery } from "react-query";
import { connect } from "react-redux";
import { REWARD } from "../../constants/rewardsConstants";

const RewardsWrapper = (props) => {
  const { data, isLoading, status } = useQuery("allRewards", getAllRewards, {
    onSuccess: (data) => {
      console.log("my data ----------->", data);
      props.storeAllRewards(data);
    },
  });

  if (status == "success") {
    return <Rewards />;
  } else {
    return <div>Loading</div>;
  }
};

const mapState = (state) => ({
  allRewards: state.allRewards,
});

const mapDispatch = (dispatch) => ({
  storeAllRewards: (data) => dispatch({ type: REWARD.GET_ALL, payload: data }),
});

export default connect(mapState, mapDispatch)(RewardsWrapper);
