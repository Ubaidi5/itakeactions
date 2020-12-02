import React from "react";
import { Modal, Form } from "antd";
import { Link } from "react-router-dom";
import "../../styles/modals/loginModal.style.css";
import InputFeild from "../inputs/form-input";
import Button from "../buttons";
import { StyledCheckbox } from "../inputs/checkbox";

const LoginModal = props => {
  const [state, setState] = React.useState({
    email: "",
    password: "",
    rememberMe: false,
    error: false
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = e => {
    console.log(e);
  };

  return (
    <Modal
      closable={false}
      title={null}
      footer={null}
      width={440}
      visible={props.visible}
      onCancel={props.onCancel}
    >
      <span className="modalclose" onClick={props.onCancel}></span>
      <div className="container">
        <div style={{ textAlign: "center" }}>
          <h5 className="mt-3" style={{ color: "black" }}>
            <strong>Login to your account</strong>
          </h5>

          <p style={{ fontSize: "12px" }}>Connect to social network</p>
          <div className="row" style={{ justifyContent: "center" }}>
            <div className="mr-3">
              <Link
                class="fb btn small-btn"
                style={{
                  backgroundColor: "#3b5998",
                  border: "1px solid #3b5998",
                  color: "white"
                }}
              >
                <i class="fa fa-facebook fa-fw"></i> Facebook
              </Link>
            </div>
            <div>
              <Link
                class="google btn small-btn"
                style={{
                  backgroundColor: "#db4a39",
                  border: "1px solid #db4a39",
                  color: "white"
                }}
              >
                <i class="fa fa-google fa-fw"></i> Google
              </Link>
            </div>
          </div>

          <div className="simple-line">Or</div>

          <p style={{ fontSize: "12px", marginTop: "1rem", marginBottom: 0 }}>
            Login with your e-mail address
          </p>
        </div>

        <Form onFinish={handleSubmit} validateTrigger="onFinish">
          <Form.Item
            name="Email"
            rules={[
              {
                type: "email",
                required: true,
                message: "Please enter valid email"
              }
            ]}
            validateFirst={false}
            initialValue={state.email}
          >
            <InputFeild
              label="Email"
              name="email"
              value={state.email}
              placeholder="abc@xyz.com"
              onChange={handleChange}
              onKeyPress={e => e.which === 13 && handleSubmit()}
              style={{ margin: 0 }}
            />
          </Form.Item>
          <Form.Item
            name="Password"
            rules={[
              {
                type: "string",
                required: true,
                min: 8
              }
            ]}
            validateFirst={false}
          >
            <InputFeild
              label="Password"
              name="password"
              value={state.password}
              placeholder="Password"
              type="password"
              onChange={handleChange}
              onKeyPress={e => e.which === 13 && handleSubmit()}
              style={{ margin: 0 }}
            />
          </Form.Item>

          <div
            style={{
              margin: "24px 0",
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <StyledCheckbox
              onChange={e =>
                setState({ ...state, rememberMe: e.target.checked })
              }
            >
              Remember me
            </StyledCheckbox>

            <Link to="/reset-password" style={{ color: "#000" }}>
              Forgot Password
            </Link>
          </div>
          <Button size="large" htmlType="submit">
            Login
          </Button>
        </Form>
        <br />
        <div style={{ textAlign: "center" }}>
          <p className="mt-3">
            Don't have an account?{" "}
            <Link style={{ color: "#057f16" }}>Sign Up</Link>
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;
