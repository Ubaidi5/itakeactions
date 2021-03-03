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
  const [onfocus, setFocus] = useState(false);

  const handleChange = (e) => {
    props.onChange != undefined && props.onChange(e);
    setFocus(false);
  };

  const optionsForSelectbox =
    typeof props.options[0] === "string" ? (
      <Row
        style={{
          padding: 8,
          border: "none",
        }}
      >
        {props.options.map((item, index) => (
          <Col
            key={`ubaid-select-${index}`}
            span={24}
            style={{ textAlign: "left" }}
          >
            <StyledCheckbox
              name={props.name}
              onChange={handleChange}
              value={item}
              checked={props.value === item ? true : false}
            >
              {item}
            </StyledCheckbox>
          </Col>
        ))}
      </Row>
    ) : (
      <Row
        style={{
          border: "none",
          padding: 8,
        }}
      >
        {props.options.map((item, index) => (
          <Col
            key={`ubaid-select-${index}`}
            span={24}
            style={{ textAlign: "left" }}
          >
            <StyledCheckbox
              name={props.name}
              onChange={handleChange}
              value={item.value}
              checked={
                typeof props.value === "string"
                  ? props.value === item.name
                    ? true
                    : false
                  : props.value.includes(item.name)
              }
            >
              {item.name}
            </StyledCheckbox>
          </Col>
        ))}
      </Row>
    );

  const placeholder = props.placeholder || "Select";
  return (
    <Dropdown overlay={optionsForSelectbox} trigger="click" visible={onfocus}>
      <Button
        // icon={
        //   onfocus ? (
        //     <CaretDownOutlined onClick={() => setFocus(!onfocus)} />
        //   ) : (
        //     <CaretRightOutlined onClick={() => setFocus(!onfocus)} />
        //   )
        // }
        block
        // icon={<CaretDownOutlined onClick={() => setFocus(!onfocus)} />}
        style={{
          height: props.height || 28,
          border: "none",
          borderBottom: "2px solid #A5A7A7",
          textAlign: "left",
          color: "#A5A7A7",
          backgroundColor: "#fff",
          fontWeight: "bolder",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        onClick={() => setFocus(!onfocus)}
        onBlur={() => setFocus(false)}
      >
        <span>
          {typeof props.value === "string"
            ? props.value || placeholder
            : placeholder}
        </span>
        <CaretDownOutlined onClick={() => setFocus(!onfocus)} />
      </Button>
    </Dropdown>
  );
};

export default SelectBox;
