import React, { useReducer } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles/modals/signup.css";

const data = {
  fname: "",
  lname: "",
  email: "",
  password: "",
  retypePassword: "",
  error: false
};

const reducer = (state = data, action) => {
  switch (action.type) {
    case "WRITE":
      return {
        ...state,
        [action.key]: action.value,
        error: false
      };
    case "TOGGLE_ERROR":
      return {
        ...state,
        error: !state.error
      };
    default:
      return state;
  }
};

const SignUp = props => {
  const [state, dispatch] = useReducer(reducer, data);

  const handleInput = e => {
    dispatch({
      type: "WRITE",
      key: e.target.name,
      value: e.target.value
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <Modal show={props.show} dialogClassName="signup-modal">
      <Modal.Body>
        <span className="modalclose" onClick={() => props.toggle()}></span>
        <div className="container">
          <div style={{ textAlign: "center" }}>
            <h3>
              <strong>Sign Up</strong>
            </h3>
            <p>And start tracking actions and claiming rewards!</p>
            {state.error && (
              <p
                className="font-weight-bold text-danger mb-1"
                style={{ fontSize: 16 }}
              >
                <i className="fa fa-exclamation-triangle"></i> You are already a
                member
              </p>
            )}
            {state.error && (
              <p className="ml-3 mt-0 mb-4" style={{ fontSize: 12 }}>
                <Link
                  className="text-decoration-none font-weight-bold mr-3"
                  style={{ color: "#057f16" }}
                >
                  Log In
                </Link>{" "}
                Or{" "}
                <Link
                  to="/reset-password"
                  className="ml-3"
                  style={{ color: "black", textDecoration: "underline" }}
                >
                  Forgot Password?
                </Link>
              </p>
            )}
            <Link
              class="fb btn mb-3"
              style={{
                backgroundColor: "#3b5998",
                border: "1px solid #3b5998",
                color: "white"
              }}
            >
              <i class="fa fa-facebook fa-fw"></i> Facebook
            </Link>
            <Link
              class="google btn"
              style={{
                backgroundColor: "#db4a39",
                border: "1px solid #db4a39",
                color: "white"
              }}
            >
              <i class="fa fa-google fa-fw"></i> Google
            </Link>
          </div>
          <p className="simple-line my-3">Or</p>
        </div>
        <form className="m-0">
          <div className="form-row ml-3">
            <div className="form-group col-sm-3 mb-1">
              <label className="m-0">First Name</label>
              <input
                name="fname"
                required
                value={state.fname}
                onChange={handleInput}
                type="text"
                className="form-control inputs"
              />
            </div>
            <div className="offset-sm-1 form-group col-sm-3 mb-1">
              <label className="m-0">Last Name</label>
              <input
                name="lname"
                required
                value={state.lname}
                onChange={handleInput}
                type="text"
                className="form-control inputs"
              />
            </div>
          </div>
          <div className="form-group mb-1 col-sm-7 ml-2">
            <label className="m-0">E-mail</label>
            <input
              type="email"
              value={state.email}
              onChange={handleInput}
              name="email"
              required
              className="form-control inputs"
            />
          </div>
          <div className="form-group mb-1 col-sm-7 ml-2">
            <label className="m-0">Password</label>
            <input
              type="password"
              value={state.password}
              onChange={handleInput}
              name="password"
              required
              className="form-control inputs"
            />
          </div>
          <div className="form-group col-sm-7 ml-2 mb-4">
            <label className="m-0">Retype Password</label>
            <input
              type="password"
              value={state.retypePassword}
              onChange={handleInput}
              name="retypePassword"
              required
              className="form-control inputs"
            />
          </div>
        </form>
        <div style={{ textAlign: "center" }}>
          {/* HERE GOEW THE RECAPTCHA */}
          <input
            value="SIGN UP"
            type="submit"
            className="signup-button"
            onSubmit={handleSubmit}
          />
          <p className="links mt-2">
            <Link className="bottom-links">Terms of Service</Link> |{" "}
            <Link className="bottom-links">Privacy Policy</Link>
          </p>
          <strong>
            <p>
              Already have an account?{" "}
              <Link style={{ color: "#057f16", textDecoration: "none" }}>
                Log In
              </Link>
            </p>
          </strong>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default SignUp;
