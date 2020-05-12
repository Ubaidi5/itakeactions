import React, { useState } from "react";
import "../../styles/report/report-form.css";
import { Redirect } from "react-router-dom";

const ReportForm = props => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    phne: "",
    email: "",
    schname: "",
    state: ""
  });
  const onChangeHandler = event => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    });
  };
  const onSubmitHandler = event => {
    event.preventDefault();
    console.log(formState);
    return (
      <Redirect
        to={{
          path: "/report-submitted",
          state: formState
        }}
      />
    );
  };
  return (
    <div>
      <br />
      <br />
      <h1>
        <u>Submit a Report</u>
      </h1>
      <h6>And Earn 15 ActBit coins</h6>
      <form onSubmit={onSubmitHandler}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>First Name*</label>
            <input
              type="text"
              className="form-control"
              name="firstName"
              onChange={onChangeHandler}
            />
          </div>
          <div className="form-group col-md-6">
            <label>Last Name*</label>
            <input
              type="text"
              className="form-control"
              name="lastName"
              onChange={onChangeHandler}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Phone Number*</label>
          <input
            type="phone"
            className="form-control"
            name="phone"
            onChange={onChangeHandler}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            onChange={onChangeHandler}
          />
        </div>
        <div className="form-group">
          <label>School Name</label>
          <input
            type="text"
            className="form-control"
            name="schname"
            onChange={onChangeHandler}
          />
        </div>
        <div className="form-group">
          <label>State</label>
          <select
            className="form-control"
            name="state"
            onChange={onChangeHandler}
          ></select>
        </div>
        <br />
        <h5>Upload Report File</h5>
        <br />
        <div class="custom-file">
          <input type="file" class="custom-file-input" id="inputGroupFile04" />
          <label class="custom-file-label" for="inputGroupFile04"></label>
          <small className="form-text text-muted">
            Allowed extensions doc, docx, pdf, png, jpg.
          </small>
        </div>
        <br />
        <br />
        <h5>__________ Or __________</h5>
        <br />
        <br />
        <h5>Write Report</h5>
        <div className="form-group">
          <label className="text-muted" for="exampleFormControlTextarea1">
            Detail Report
          </label>
          <textarea className="form-control" id="text-area" rows="8"></textarea>
        </div>
        <h5>Submit Supplementary Material(if any)</h5>
        <div className="form-group">
          <div className="drag-n-drop">
            <p>DRAG FILES HERE OR BROWSE</p>
          </div>
          <small className="form-text text-muted">
            Allowed extensions mp3, mp4, doc, docx, pdf, png, jpg.
          </small>
        </div>
                        
        <button className="submit-report-btn" type="submit">
          Submit Report
        </button>
      </form>
    </div>
  );
};

export default ReportForm;
