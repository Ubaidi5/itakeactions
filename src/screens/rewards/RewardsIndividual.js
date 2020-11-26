import React, { useState } from "react";
import { getRewardBySlug } from "../../apis/rewardsApi";
import { useQuery } from "react-query";
// import Rewards from "../../components/reward/reward";
// import { connect } from "react-redux";
// import { REWARD } from "../../constants/rewardsConstants";
import RewardIndividual from "../../components/reward/rewards-individual/rewards-individual-page";

const RewardsIndividualWrapper = (props) => {
  const [rewardData, setRewardData] = useState({});

  const { status } = useQuery(
    ["rewardsIndividual", props.match.params.slug],
    getRewardBySlug,
    {
      onSuccess: (data) => {
        console.log("individual reward data", data);
        setRewardData(data);
      },
      onError: () => console.log("Error when getting data"),
    }
  );
  if (status === "success") {
    return <RewardIndividual data={rewardData} />;
  } else {
    return <h1>Loading ...</h1>;
  }
};

// const mapState = (state) => ({
//   allRewards: state.allRewards,
// });

// const mapDispatch = (dispatch) => ({
//   storeAllRewards: (data) => dispatch({ type: REWARD.GET_ALL, payload: data }),
// });

// export default connect(mapState, mapDispatch)(RewardsWrapper);
export default RewardsIndividualWrapper;
