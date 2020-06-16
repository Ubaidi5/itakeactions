import React from "react";
import { Link } from "react-router-dom";
import TakeActions from "./TakeActions";

function EmailUnlogged(props) {
  const [state, modify] = React.useState({
    auth: false,
    shared: false
  });
  return (
    <>
      <div className="mt-5">
        <div className="row mb-5 mobile-row-twitter">
          <div className="offset-sm-1 col-sm-5 ipad-design">
            <h3 className="font-weight-bold">
              Petition Niger State Governor to provide conducive learning
              environment for Zabeyidna Community Primary School children
            </h3>
            <div
              className="justify-text mb-4"
              style={{ fontSize: 15, fontWeight: 600, textAlign: "center", padding: "0px 20px" }}
            >
              <p>
                The only school in Zabeyidna Community was established in 1992
                and since then, the government has not put up any structure or
                provide relevant learning resources in the school. The only
                dilapidated building in the school were built as a community
                self-help project many years ago.
              </p>
              <p>
                There is no junior secondary school in the community and its
                environs, upon completion of primary school, the children would
                travel for over 8 kilometers on foot through bush paths to
                access the closest junior secondary school in Kaduna State
                called Dulu Tafa Junior School. Unconfirmed reports have it that
                there have been cases of female students been raped as well as
                cases of missing boys and girls on their way to Dulu Tafa. The
                route to Dulu Tafa has become very dangerous and many children,
                especially the girls are unable to proceed to secondary school
                due to fear of being kidnapped, raped or used for rituals.
              </p>
              <p>
                Together we can bring hope to Zabeyidna Community. Sign this
                petition to cll for a quick positive response from the state
                governmentand other relevant stakeholders.
              </p>
            </div>
            <div className="mobile-design-links">
            <Link className="text-decoration-none">
              <i
                style={{
                  color: "white",
                  backgroundColor: "#3b5998",
                  borderRadius: "50%",
                  padding: "8px 15px"
                }}
                className="fa fa-facebook fa-2x"
              ></i>
            </Link>
            <Link className="text-decoration-none">
              <i
                style={{
                  color: "white",
                  backgroundColor: "#00acee",
                  borderRadius: "50%",
                  padding: "8px 10px"
                }}
                className="ml-4 fa fa-twitter fa-2x"
              ></i>
            </Link>
            <Link className="text-decoration-none">
              <i
                style={{
                  color: "white",
                  backgroundColor: "#db4a39",
                  borderRadius: "50%",
                  padding: "8px 4px"
                }}
                className="ml-4 fa fa-google-plus fa-2x"
              ></i>
            </Link>
            <Link className="text-decoration-none">
              <i
                style={{
                  color: "white",
                  backgroundColor: "#0e76a8",
                  borderRadius: "50%",
                  padding: "8px 10px"
                }}
                className="ml-4 fa fa-linkedin fa-2x"
              ></i>
            </Link>
          </div>
          </div>
          <div className="col-sm-4 offset-sm-1 mobile-twitter-login ipad-design">
            <div
              className="p-4 font-weight-bold"
              style={{
                backgroundColor: "#f2f0ed",
                fontSize: 12,
                borderRadius: 18
              }}
            >
              Your Excellency,
              <br />
              Alhaji Abubakar Sani Bello,
              <br />
              The Executive Governor,
              <br />
              Niger State of Nigeria.
              <br />
              <br />
              <p>
                We the undersigned active citizens are using this means to bring
                to your attention the report that was submitted recently on
                itakeaction.org about the poor state of Zabeyidna Primary
                School, located in Gurara Local Government Area of your state
                (Niger State). The children in Zabeyidna Community are denied
                the right to quality free basic education. The only public
                school in the community was established in the year 1992 with no
                building, chairs, desks, books, library, toilets, and other
                relevant learning resources a school is supposed to have.
              </p>
              <p>
                The school has just 5 teachers to cater to over 200 pupils and
                the only dilapidated building in the school were built through a
                community self-help effort. We are therefore calling on you sir,
                the state government and other relevant stakeholders (copied
                below) to as a matter of emergency consider and act on the
                following recommendations:
              </p>
              Build enough classrooms to cater to the learning needs of the over
              200 pupils including an admin office.
              <br />
              Provide chairs and desks for these children.
              <br />
              Establish a Junior Secondary School to serve Zabeyidna Community
              and other neighbouring communities. The long distances
              throughtbush paths to access Dulu Tafa Junior School in Kaduna
              State has become very dangerous for these children.
              <br />
              Send or appoint more qualified teachers to the school.
              <p>
                We look forward to an appropriate and quick positive response
                from you.
              </p>
            </div>
            <div className="mt-4" style={{ textAlign: "center" }}>
              {!(state.auth && state.shared) && <button
                className="btn"
                style={{
                  backgroundColor: "yellow",
                  border: "none",
                  color: "black",
                  width: "250px",
                  height: "50px"
                }}
              >
                {(state.auth && !state.shared) ? 'SIGN PETITION' : 'LOGIN TO SIGN PETITION'}
              </button>}
              {(state.auth && state.shared) && <div>
                <h4><strong>Thank you for taking this action!</strong></h4>
                <p style={{color:'#66ff6b',fontSize:19,fontWeight:500}}>You have earned 3 ActBit Coins</p>
                <button className='btn' style={{width:'200px',height:'50px'}}>SEE YOUR WALLET</button>
              </div>}
            </div>
          </div>
        </div>
      </div>
      <div className="py-5" style={{ backgroundColor: "#d4d4d4" }}>
        <div className="offset-sm-1 col-sm-10">
          <h2 className="font-weight-bold">Take more Actions</h2>
          <br />
          <TakeActions />
        </div>
      </div>
    </>
  );
}

export default EmailUnlogged;
