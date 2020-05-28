import React from "react";
import { Link } from "react-router-dom";
import TakeActions from "./TakeActions";
import '../../styles/Unlogged/EmailUnlogged.css'

function EmailUnlogged(props) {
  const [auth, modify] = React.useState(false);
  return (
    <>
      <div className="mt-5">
        <div className="row mb-5 mobile-row-twitter">
          <div className="offset-sm-1 col-sm-5 ipad-design">
            <h3 className="font-weight-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              fuga numquam eos porro rem.
            </h3>
            <p
              className="justify-text mb-4"
              style={{ fontSize: 13, fontWeight: 500 }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              accusantium voluptates quae dignissimos, asperiores doloribus
              soluta delectus earum obcaecati, ipsa ea deserunt quidem quis
              reprehenderit at tempora quisquam perspiciatis illo quasi
              cupiditate fugit blanditiis illum! Itaque fugit consequuntur ullam
              doloremque repellat sit reprehenderit ipsum quo, laudantium
              molestiae inventore. Hic amet est, dolorum soluta, laudantium
              nihil modi ullam sed, doloribus rerum debitis enim vel voluptatem
              nesciunt. Quasi, animi repellendus. Distinctio earum eaque
              recusandae laborum adipisci sed quisquam similique ex omnis
              praesentium vel quos amet, deserunt nihil culpa facere veniam,
              sapiente error quod ullam? Eligendi iure quis, eveniet
              necessitatibus debitis quidem explicabo.
            </p>
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
              <p>Lorem ipsum</p>
              <p>
                dolor sit amet consectetur adipisicing elit. Nostrum accusantium
                voluptates quae dignissimos, asperiores doloribus soluta
                delectus earum obcaecati, ipsa ea deserunt quidem quis
                reprehenderit at
              </p>
              <p>
                tempora quisquam perspiciatis illo quasi cupiditate fugit
                blanditiis illum! Itaque fugit consequuntur ullam doloremque
                repellat sit reprehenderit ipsum quo, laudantium molestiae
                inventore. Hic amet
              </p>
              <p>
                est, dolorum soluta, laudantium nihil modi ullam sed, doloribus
                rerum debitis enim vel voluptatem nesciunt. Quasi, animi
                repellendus. Distinctio earum eaque recusandae laborum adipisci
                sed
              </p>
              <p>Yours sinceraly,</p>
            </div>
            <div className="mt-4" style={{ textAlign: "center" }}>
              {!auth && <button
                className="btn"
                style={{
                  backgroundColor: "yellow",
                  border: "none",
                  color: "black",
                  width: "250px",
                  height: "50px"
                }}
              >
                LOGIN TO SEND E-MAIL
              </button>}
              {auth && <div>
                <h4><strong>Thank you for taking this action!</strong></h4>
                <p style={{color:'#057f16',fontSize:19}}>You have earned 5 ActBit Coins</p>
                <button className='btn' style={{width:'200px',height:'50px'}}>SEE YOUR WALLET</button>
              </div>}
            </div>
          </div>
        </div>
      </div>
      <div
        className="py-5"
        style={{ backgroundColor: "#d4d4d4" }}
      >
        <div className='offset-sm-1 col-sm-10'>
            <h2 className="font-weight-bold">Take more Actions</h2>
            <br />
            <TakeActions/>
        </div>
      </div>
    </>
  );
}

export default EmailUnlogged;
