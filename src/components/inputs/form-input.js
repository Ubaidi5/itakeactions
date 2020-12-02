import React from "react";
import InputWrapper from "./inputWrapper";

const InputFeild = props => {
  const { label, placeholder, type, name, value } = props;
  return (
    <div
      style={
        props.style
          ? props.style
          : {
              marginTop: 16,
              width: "100%"
            }
      }
    >
      <h4
        style={{
          textAlign: "left",
          marginBottom: 8,
          fontSize: 16
        }}
      >
        {label}
      </h4>
      <InputWrapper
        required={props.required ? true : false}
        name={name}
        value={value}
        placeholder={placeholder}
        password={type && type === "password" ? true : false}
        onChange={props.onChange}
        disabled={props.disabled ? true : false}
      />
    </div>
  );
};

export default InputFeild;
