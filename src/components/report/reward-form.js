import React, { Component } from "react";
import { ProgressBar } from "react-bootstrap";
import MediaQuery from 'react-responsive';
import { Redirect } from "react-router-dom";

import "../../styles/report/report-form.css";

class ReportForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      phne: "",
      email: "",
      schname: "",
      state: "",
      report: "",
      filesList: [],
      nameError: false,
      lastNameError: false,
      phoneError: false,
      emailError: false,
      schoolError: false,
      stateError: false,
      writeReportError: false
    };
  }
  onChangeHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  checkType(str) {
    if (/\.(doc|docx|pdf|png|jpg)$/gi.test(str)) {
      return true;
    } else {
      return false;
    }
  }
  handleFile(e) {
    e = e.target.files[0].name;
    if (this.checkType(e)) {
      this.setState({ fileName: e });
    } else {
      alert("Allowed extensions doc, docx, pdf, png, jpg.");
    }
  }
  handleFiles(e) {
    e = e.target.files;
    const a = [];
    for (let i of e) {
      if (!this.checkType(i.name)) {
        alert("Allowed extensions doc, docx, pdf, png, jpg.");
      } else {
        a.push(i.name);
      }
    }
    this.setState({ filesList: [...this.state.filesList, ...a] });
  }
  onSubmitHandler(e) {
    e.preventDefault();
    const errorsLog = {};
    if (
      this.state.firstName === "" ||
      this.state.firstName.length < 3 ||
      this.state.firstName.length > 15
    ) {
      errorsLog.nameError = true;
    } else if (
      this.state.lastName === "" ||
      this.state.lastName.length < 3 ||
      this.state.lastName.length > 15
    ) {
      errorsLog.lastNameError = true;
    } else if (
      this.state.email.length < 150 ||
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gi.test(
        this.state.email
      )
    ) {
      errorsLog.emailError = true;
    } else if (
      this.state.phne.length < 15 ||
      /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/gi.test(
        this.state.phne
      )
    ) {
      errorsLog.phoneError = true;
    } else if (this.state.state === "") {
      errorsLog.stateError = true;
    } else if (
      this.state.schname < 3 ||
      this.state.schname > 25 ||
      this.state.schname.length === 0
    ) {
      errorsLog.schoolError = true;
    } else if (
      this.state.report.length === 0 ||
      this.state.fileName.length === 0
    ) {
      errorsLog.writeReportError = true;
    } else if (Object.keys(errorsLog).length === 0) {
      return (
        <Redirect
          to={{
            path: "/report-submitted",
            state: this.state
          }}
        />
      );
    }
  }
  render() {
    return (
      <div>
        <br />
        <br />
        <h1>
          <u>Submit a Report</u>
        </h1>
        <h6>And Earn 15 ActBit coins</h6>
        {(this.state.nameError ||
          this.state.lastNameError ||
          this.state.phoneError ||
          this.state.emailError ||
          this.state.schoolError ||
          this.state.stateError ||
          this.state.writeReportError) && (
          <div className="alert alert-message" role="alert">
            <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>{" "}
            This is a danger alert—check it out!
          </div>
        )}
        <form onSubmit={this.onSubmitHandler.bind(this)}>
          <div className="form-row mobile-form-row">
            <div className="form-group col-md-6 mobile-form-row-col">
              <label>Name*</label>
              <input
                type="text"
                className="form-control"
                name="firstName"
                onChange={this.onChangeHandler.bind(this)}
              />
              {this.state.nameError && (
                <small style={{ color: "red" }}>
                  <i
                    className="fa fa-exclamation-triangle"
                    aria-hidden="true"
                  ></i>{" "}
                  Please enter a valid name
                </small>
              )}
            </div>
            <div className="form-group col-md-6 mobile-form-row-col">
              <label>Last Name*</label>
              <input
                type="text"
                className="form-control"
                name="lastName"
                onChange={this.onChangeHandler.bind(this)}
              />
              {this.state.lastNameError && (
                <small style={{ color: "red" }}>
                  <i
                    className="fa fa-exclamation-triangle"
                    aria-hidden="true"
                  ></i>{" "}
                  Please enter a valid last name
                </small>
              )}
            </div>
          </div>
          <div className="form-group">
            <label>Phone Number*</label>
            <input
              type="phone"
              className="form-control"
              name="phone"
              onChange={this.onChangeHandler.bind(this)}
            />
            {this.state.phoneError && (
              <small style={{ color: "red" }}>
                <i
                  className="fa fa-exclamation-triangle"
                  aria-hidden="true"
                ></i>{" "}
                Please enter a valid phone number
              </small>
            )}
          </div>
          <div className="form-group">
            <label>E-mail*</label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={this.onChangeHandler.bind(this)}
            />
            {this.state.emailError && (
              <small style={{ color: "red" }}>
                <i
                  className="fa fa-exclamation-triangle"
                  aria-hidden="true"
                ></i>{" "}
                Please enter a valid e-mail address
              </small>
            )}
          </div>
          <div className="form-group">
            <label>School Name*</label>
            <input
              type="text"
              className="form-control"
              name="schname"
              onChange={this.onChangeHandler.bind(this)}
            />
            {this.state.schoolError && (
              <small style={{ color: "red" }}>
                <i
                  className="fa fa-exclamation-triangle"
                  aria-hidden="true"
                ></i>{" "}
                Please enter a valid school name
              </small>
            )}
          </div>
          <div className="form-group" id="select-form">
            <label>State*</label>
            <select
              className="form-control"
              name="state"
              onChange={this.onChangeHandler.bind(this)}
            ></select>
            {this.state.stateError && (
              <small style={{ color: "red" }}>
                <i
                  className="fa fa-exclamation-triangle"
                  aria-hidden="true"
                ></i>{" "}
                Please select a state
              </small>
            )}
          </div>
          <br />
          <h5>Upload Report File</h5>
          <br />
          <div class="custom-file">
            <input
              type="file"
              class="report-file"
              hidden
              onChange={this.handleFile.bind(this)}
              ref={e => (this.file = e)}
            />
            <div id="upload-report-section" style={{ display: "flex" }}>
              <div style={{ flex: 4 }}>
                <input
                  type="text"
                  readOnly
                  style={{ backgroundColor: "white" }}
                  value={this.state.fileName}
                  className="form-control"
                />
              </div>
              <div style={{ flex: 1 }}>
                <button
                  className="btn" 
                  id="browse-button"
                  style={{ width: 120 }}
                  onClick={() => this.file.click()}
                >
                  BROWSE
                </button>
              </div>
            </div>
            <small className="form-text text-muted" id="browse-text">
              Allowed extensions doc, docx, pdf, png, jpg.
            </small>
          </div>
          <br />
          <br />
          <h5 className="text-between-line">
            <span>Or</span>
          </h5>
          <br />
          <br />
          <h5>Write Report</h5>
          <div className="form-group">
            <label className="text-muted">Detail Report</label>
            <textarea
              className="form-control"
              value={this.state.report}
              name="report"
              type="text"
              onChange={this.onChangeHandler.bind(this)}
              rows="8"
            ></textarea>
            <div style={{ textAlign: "center" }}>
              {this.state.writeReportError && (
                <small style={{ color: "red" }}>
                  <i
                    className="fa fa-exclamation-triangle"
                    aria-hidden="true"
                  ></i>{" "}
                  Please upload a file or write a report
                </small>
              )}
            </div>
          </div>
          <br />
          <br />
          <h5>Submit Supplementary Material(if any)</h5>
          <br />
          <br />
          <div className="form-group">
            <input
              type="file"
              hidden
              multiple
              ref={e => (this.files = e)}
              onChange={this.handleFiles.bind(this)}
            />
            <div className="drag-n-drop" onClick={() => this.files.click()}>
              {this.state.filesList.length === 0 ? (
                <i
                  className="fa fa-cloud-upload upload-file"
                  aria-hidden="true"
                ></i>
              ) : (
                this.state.filesList.map((e,i) => <div key={i} className="display-files">
                  <i className="fa fa-file-pdf-o" aria-hidden="true"></i> <p className='file-name'>{e}</p>
                  <ProgressBar now={100} className='upload-progress-bar' variant="success" />
                </div>)
              )}
              <p>DRAG FILES HERE OR BROWSE</p>
              <button className="btn" style={{ width: 150 }}>
                BROWSE
              </button>
            </div>
            <small className="form-text text-muted">
              Allowed extensions mp3, mp4, doc, docx, pdf, png, jpg.
            </small>
          </div>
          <br />
          <br />
                          
          <button className="submit-report-btn" id="submit-report" type="submit">
            Submit Report
          </button>
        </form>

        <MediaQuery maxDeviceWidth={1000}>
                    <div style={{position:"relative",height:"10em"}}>
                    <i className='fas fa-chevron-circle-up up-button-tablet-design' title="Go to top" onClick={()=>{window.scrollTo(0, 0);}} style={{position:"absolute",cursor: "pointer", top:"20%",left:"43%",display:"inline-block",margin:"10px auto",fontSize:"48px",borderRadius:"50%",border:"2px solid black",backgroundColor:"black",color:"white"}}></i>
                    </div>
        </MediaQuery>
      </div>
    );
  }
}

export default ReportForm;
