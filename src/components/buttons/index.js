import { Button } from "antd";
import styled from "styled-components";

const ButtonWrapper = styled(Button)`
  width: 100%;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#60AB30"};
  outline: none;
  color: ${(props) => (props.color ? props.color : "#fff")};
  cursor: pointer;
  border: none;
  border-radius: 6px;
  height: ${(props) => props.height && props.height};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};

  &:hover,
  &:focus {
    background-color: ${(props) =>
      props.backgroundColor ? props.backgroundColor : "#60AB30"};
    color: ${(props) => (props.color ? props.color : "#fff")};
  }
  &.ant-btn[disabled],
  &.ant-btn[disabled]:hover,
  &.ant-btn[disabled]:focus,
  &.ant-btn[disabled]:active {
    background: ${(props) =>
      props.style
        ? props.style.backgroundColor
          ? props.style.backgroundColor
          : "#60AB30"
        : "#60AB30"};
    color: #fff;
    opacity: 0.5;
  }
`;

export default ButtonWrapper;
