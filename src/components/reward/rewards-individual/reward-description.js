import React, { Component } from "react";

class RewardDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticate: true,
      rewardEntered: true,
      inSufficientBalance:false,
    };
  }

  render() {
    const styles = {
      icons: {
        fontSize: 25,
        marginRight: 10
      },
      headers: {
        fontSize: 20
      }
    };
    return (
      <div className="reward-description">
        <div className="draw-detail">
          <ul className="detail-per-draw">
            <li>1</li>
            <li>winner</li>
            <li>per draw</li>
          </ul>
          <ul className="detail-per-draw">
            <li>11</li>
            <li>days</li>
            <li>to draw</li>
          </ul>
          <ul className="detail-per-draw">
            <li>1</li>
            <li>reward</li>
            <li>per winner</li>
          </ul>
        </div>
        <div className="reward-detail">
          <h4 style={styles.headers}>
            <i
              className="fa fa-map-marker"
              aria-hidden="true"
              style={styles.icons}
            ></i>{" "}
            Adamawa, Nigeria.
          </h4>
          <h4 style={styles.headers}>
            <i
              className="fa fa-calendar-o"
              aria-hidden="true"
              style={styles.icons}
            ></i>{" "}
            Draw date: 09/30/2018
          </h4>
          <h4 style={styles.headers}>50 ActBit Coins reqiured</h4>
          {
            (this.state.authenticate && this.state.rewardEntered && this.state.inSufficientBalance) && <div>
              <p className='text-danger font-weight-bold'>You Don't Have Sufficient ActBit Coins To Enter This Reward.</p>
              <button className='btn' style={{width:'auto',padding:'10px 20px 10px 20px',height:'auto'}}>TAKE MORE ACTIONS TO WIN MORE ACTBIT COINS</button>
            </div>
          }
          {this.state.rewardEntered && this.state.authenticate && !this.state.inSufficientBalance ? (
            <div>
              <p
                className="font-weight-bold text-success"
                style={{ fontSize: 17 }}
              >
                You have successfully entered this reward!
              </p>
              <button
                className="btn py-2"
                style={{ width: "200px", height: "auto", fontSize: 17, border:'none',backgroundColor:'green' ,color:'white' }}
              >
                SEE MY WALLET
              </button>
            </div>
          ) : (!this.state.inSufficientBalance && <button href="#" className="login-btn-for-reward">
              {this.state.authenticate
                ? "ENTER REWARD"
                : "LOGIN TO ENTER REWARD"}
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default RewardDescription;
