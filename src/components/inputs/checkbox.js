import { Checkbox } from "antd";
import styled from "styled-components";

export const StyledCheckbox = styled(Checkbox)`
  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #057F16 !important;
    border: 1px solid #057F16;
  }

  .ant-checkbox:hover .ant-checkbox-inner, 
  .ant-checkbox-input:focus + .ant-checkbox-inner{
    border: 1px solid #057F16; !important;
  }
  
  .ant-checkbox-checked::after {
    border: 1px solid #057F16; !important;
  }
`;
