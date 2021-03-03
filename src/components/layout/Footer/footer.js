import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Input, Button } from "antd";
import styled from "styled-components";
// import '../../../styles/footer.css';

const StyledFooter = styled.footer`
  color: #fff;
  .main-footer {
    background-color: #057f16;
    .learn-more-links {
      ul {
        list-style: none;
      }

      li a {
        color: #fff;
        font-size: 16px;
        line-height: 2;
      }
    }

    .achivements {
      p {
        font-size: 18px;
      }
      .count {
        font-weight: 600;
        font-size: 28px;
      }
    }
  }

  //-------------------------//
  //   Narrow footer style   //
  //-------------------------//
  .narrow-footer {
    background-color: #60ab30;

    .auth-link {
      a {
        color: #fff;
        margin: 0 8px;
      }
    }

    .fa-links a {
      color: #fff;
      font-size: 24px;
      margin: 0 8px;
    }
  }

  @media only screen and (max-width: 768px) {
    .learn-more-links {
      h2 {
        font-size: 24px;
      }
      ul {
        li a {
          font-size: 14px;
        }
      }
      h5 {
        font-size: 16px;
      }
    }

    .achivements {
      p {
        font-size: 16px;
      }
      .count {
        font-size: 20px;
      }
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter className="footer">
      <Row
        className="main-footer py-3 p-sm-5 p-md-3 px-lg-2 py-lg-5 p-xl-5"
        justify={window.innerWidth < 576 ? "center" : "space-around"}
        align="middle"
      >
        <Col xl={7} lg={7} md={7} sm={24}>
          <div className="text-center">
            <img
              src={require("./images/footer.png")}
              style={{ width: 180 }}
              alt="iTakeAction"
            />
            <div className="mt-4 text-white">
              <Link className="text-white mr-3">CONTACT US</Link>
              <Link className="text-white mr-3">TAKE ACTIONS</Link>
            </div>
          </div>
        </Col>

        <Col
          xl={7}
          lg={8}
          md={8}
          sm={24}
          className="mt-5 mt-sm-5 mt-md-0 mt-lg-0 mt-xl-0 learn-more-links"
        >
          <h2 className="text-light font-weight-bold">Learn More</h2>
          <ul className="">
            <li>
              <Link>IMPACT</Link>
            </li>
            <li>
              <Link>PARTNERSHIP</Link>
            </li>
            <li>
              <Link>ARTICLE CONTRIBUTION</Link>
            </li>
            <li>
              <Link>FAQ</Link>
            </li>
          </ul>

          <h5 className="mt-4 my-sm-4 mt-md-5 font-weight-bold text-light">
            SIGN UP TO OUR NEWSLETTER
          </h5>

          <Input placeholder="E-mail" suffix={<Button>Go!</Button>} />
        </Col>

        <Col xl={5} lg={8} md={6} sm={0} xs={0}>
          {demoData.map((item, index) => (
            <Row
              key={index + 1}
              justify="space-between"
              align="middle"
              className="achivements"
            >
              <Col xl={6} lg={4} md={7}>
                <p className="mb-3 text-right count">{item.count}</p>
              </Col>
              <Col xl={17} lg={19} md={16} className="text-left">
                <p className="mb-3">{item.title}</p>
              </Col>
            </Row>
          ))}
        </Col>
      </Row>

      <Row className="narrow-footer" justify="space-around" align="middle">
        <Col className="d-none d-md-block">
          <p style={{ fontSize: 15, margin: 0 }}>A program by Noble Mission</p>
        </Col>
        <Col className="auth-link d-block d-md-flex mt-4 mt-md-0">
          <p className="m-0">
            <Link>AUTHOR LOGIN</Link>
          </p>
          <p className="m-0">
            <Link>TERM OF USE</Link>
          </p>
          <p className="m-0">
            <Link>PRIVACY</Link>
          </p>
        </Col>

        <Col className="d-flex align-items-center mt-4 mt-md-0">
          <p className="m-0 mr-4">Follow us:</p>
          <div className="fa-links">
            <Link>
              <i className="fa fa-facebook-square" aria-hidden="true"></i>
            </Link>
            <Link>
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </Link>
            <Link>
              <i className="fa fa-twitter-square" aria-hidden="true"></i>
            </Link>
            <Link>
              <i className="fa fa-youtube-square" aria-hidden="true"></i>
            </Link>
          </div>
        </Col>
        <Col sm={24} md={0} lg={0} xl={0}>
          <p className="text-center my-4" style={{ fontSize: 15 }}>
            A program by Noble Mission
          </p>
        </Col>
      </Row>
    </StyledFooter>
  );
};

export default Footer;

const demoData = [
  { count: 1390, title: "Active Citizens" },
  { count: 1870, title: "Actions Taken" },
  { count: 70, title: "Campaigns" },
  { count: 344, title: "Beneficiaries" },
  { count: 3344, title: "Citizens we are Campaigning for" },
];
