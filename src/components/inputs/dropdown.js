import React, { useState } from "react";
import { Col, Row, Dropdown } from "antd";
import Button from "../buttons";
import { StyledCheckbox } from "./checkbox";
import { CaretDownOutlined } from "../icons";

//--------------------------------------------------------------------------
//  Custom select. Take options as props to create options using checkboxes.
//  Pass name to chnage the exact data on your state.
//--------------------------------------------------------------------------

const SelectBox = (props) => {
  const handleChange = (e) => {
    props.onChange != undefined && props.onChange(e);
  };

  const options = (
    <div>
      {props.options.map((item, index) => (
        <Button
          block
          key={`ubaid-select-${index}`}
          style={{
            textAlign: "left",
            border: "none",
            borderRadius: 0,
            background: props.value == item.name ? "#60AB30" : "#fff",
            color: "#A5A7A7",
          }}
          name={props.name}
          onClick={handleChange}
          value={item.value}
        >
          {item.name}
        </Button>
      ))}
    </div>
  );

  const placeholder = props.placeholder || "Select";
  return (
    <Dropdown
      overlay={options}
      trigger="click"
      overlayStyle={{ maxWidth: "100%" }}
    >
      <Button
        block
        style={{
          height: props.height || 28,
          border: "none",
          borderRadius: 0,
          borderBottom: "2px solid #A5A7A7",
          color: "#A5A7A7",
          backgroundColor: "#fff",
          fontWeight: "bolder",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span>
          {typeof props.value === "string"
            ? props.value || placeholder
            : placeholder}
        </span>
        <CaretDownOutlined />
      </Button>
    </Dropdown>
  );
};

export default SelectBox;
