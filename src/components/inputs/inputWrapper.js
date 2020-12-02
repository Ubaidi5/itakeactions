import React from "react";
import styled from "styled-components";
import { Input } from "antd";

const StyledInput = styled(Input)`
  border-radius: 6px;
  box-shadow: #49d3ce;
  border-color: ${props =>
    props.style ? props.style.borderColor : "#49d3ce !important"};
  outline: none !important;
`;

const InputWrapper = props => {
  return props.password ? (
    <StyledInput as={Input.Password} size="large" {...props}></StyledInput>
  ) : (
    <StyledInput size="large" {...props}></StyledInput>
  );
};

export default InputWrapper;
