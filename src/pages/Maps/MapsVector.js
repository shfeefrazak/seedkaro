import PropTypes from 'prop-types'
import React,{useState} from "react"
import MetaTags from 'react-meta-tags';
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  Input,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu
} from "reactstrap"
import { Link } from "react-router-dom"

// Custom Scrollbar
import SimpleBar from "simplebar-react";

// import images
import synthego from "../../assets/images/company/synthego.png";
import pymetrics from "../../assets/images/company/pymetrics.png";
import flexport from "../../assets/images/company/flexport.png";
import udemy from "../../assets/images/company/udemy.png";

import servicesIcon1 from "../../assets/images/services-icon/01.png";
import servicesIcon2 from "../../assets/images/services-icon/02.png";
import servicesIcon3 from "../../assets/images/services-icon/03.png";
import servicesIcon4 from "../../assets/images/services-icon/04.png";
import user2 from "../../assets/images/users/user-2.jpg";
import user3 from "../../assets/images/users/user-3.jpg";
import user4 from "../../assets/images/users/user-4.jpg";
import user5 from "../../assets/images/users/user-5.jpg";
import user6 from "../../assets/images/users/user-6.jpg";
import smimg1 from "../../assets/images/small/img-1.jpg";
import smimg2 from "../../assets/images/small/img-2.jpg";

// Charts
import LineAreaChart from "../AllCharts/apex/lineareachart";
import RadialChart from "../AllCharts/apex/apexdonut";
import Apexdonut from "../AllCharts/apex/apexdonut1";
import SparkLine from "../AllCharts/sparkline/sparkline";
import SparkLine1 from "../AllCharts/sparkline/sparkline1";
import Salesdonut from "../AllCharts/apex/salesdonut";

import "chartist/dist/scss/chartist.scss";

//i18n
import { withTranslation } from "react-i18next"

const Dashboard = props => {
  const [menu, setMenu] = useState(false)
  const toggle = () => {
    setMenu(!menu)
  }
  return (
    <React.Fragment> 
      <div className="page-content">
        <MetaTags>
          <title>Seed Karo |  Dashboard</title>
        </MetaTags>
        <Container fluid>

          <div className="page-title-box">
            <Row className="align-items-center">
              <Col md={8}>
                
                
                <h6 className="page-title-big">Featured Companies</h6>
              </Col>

              <Col md="4">
             
              </Col>
            </Row>
          </div>
          
          <Row className="horizontal-scroll">
            <Col xl={3} md={6}>
              <Card className="mini-stat ">
                <CardBody>
                  <div className="">
                    <div className="float-start mini-stat-img me-4">
                      <img src={synthego} alt="" />
                    </div>
                    <h5 className="font-size-16  mt-0 ">
                      Synthego
                    </h5>
                    <p className="mb-3  font-size-13">Trading at $50 - $60 / share</p>
                    <h4 className="fw-medium text-success font-size-24">
                    +254.84% (+39.50 ){" "}
                      <i className="mdi mdi-arrow-up text-success ms-2"></i>
                    </h4>
                    <div className="mini-stat-label ">
                      <p className="mb-3  h5"><i class="ion ion-md-add"></i></p>
                    </div>
                  </div>
                  <div className="pt-2">
                    <div className="float-end">
                      <Link to="#" className="">
                        <i className="mdi mdi-arrow-right h5"></i>
                      </Link>
                    </div>
                    <p className=" mb-0 mt-1">Last funding round</p>
                    <p className=" mb-0 mt-1 font-size-8">Series X <br></br> $5.00B <br></br>val Sep. 2020</p>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl={3} md={6}>
              <Card className="mini-stat ">
                <CardBody>
                  <div className="">
                    <div className="float-start mini-stat-img me-4">
                      <img src={synthego} alt="" />
                    </div>
                    <h5 className="font-size-16  mt-0 ">
                      Synthego
                    </h5>
                    <p className="mb-3  font-size-13">Trading at $50 - $60 / share</p>
                    <h4 className="fw-medium text-success font-size-24">
                    +254.84% (+39.50 ){" "}
                      <i className="mdi mdi-arrow-up text-success ms-2"></i>
                    </h4>
                    <div className="mini-stat-label ">
                      <p className="mb-3  h5"><i class="ion ion-md-add"></i></p>
                    </div>
                  </div>
                  <div className="pt-2">
                    <div className="float-end">
                      <Link to="#" className="">
                        <i className="mdi mdi-arrow-right h5"></i>
                      </Link>
                    </div>
                    <p className=" mb-0 mt-1">Last funding round</p>
                    <p className=" mb-0 mt-1 font-size-8">Series X <br></br> $5.00B <br></br>val Sep. 2020</p>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl={3} md={6}>
              <Card className="mini-stat ">
                <CardBody>
                  <div className="">
                    <div className="float-start mini-stat-img me-4">
                      <img src={pymetrics} alt="" />
                    </div>
                    <h5 className="font-size-16  mt-0 ">
                      Pymetrics
                    </h5>
                    <p className="mb-3  font-size-13">Trading at $50 - $60 / share</p>
                    <h4 className="fw-medium text-danger font-size-24">
                      -3.65%(-$0.36){" "}
                      <i className="mdi mdi-arrow-down text-danger ms-2"></i>
                    </h4>
                    <div className="mini-stat-label ">
                    <p className="mb-3  h5"><i class="ion ion-md-checkmark"></i></p>
                    </div>
                  </div>
                  <div className="pt-2">
                    <div className="float-end">
                      <Link to="#" className="">
                        <i className="mdi mdi-arrow-right h5"></i>
                      </Link>
                    </div>

                    <p className=" mb-0 mt-1">Last funding round</p>
                    <p className=" mb-0 mt-1 font-size-8">Series X <br></br> $5.00B <br></br>val Sep. 2020</p>
                  </div>
                </CardBody>
              </Card>
            </Col>



            <Col xl={3} md={6}>
              <Card className="mini-stat ">
                <CardBody>
                  <div className="">
                    <div className="float-start mini-stat-img me-4">
                      <img src={flexport} alt="" />
                    </div>
                    <h5 className="font-size-16  mt-0 ">
                    Flexport
                    </h5>
                    <p className="mb-3  font-size-13">Trading at $4.50 - $6 / share</p>
                    <h4 className="fw-medium text-danger font-size-24">
                     {" "}
                      <br></br>
                    </h4>
                    <div className="mini-stat-label ">
                    <p className="mb-3  h5"><i class="ion ion-md-checkmark"></i></p>
                    </div>
                  </div>
                  <div className="pt-2">
                    <div className="float-end">
                      <Link to="#" className="">
                        <i className="mdi mdi-arrow-right h5"></i>
                      </Link>
                    </div>

                    <p className=" mb-0 mt-1"><strong>No funding rounds</strong></p>
                    <p className="fs-6 mb-0 mt-1 font-size-8">Flexport is a platform for global trade. The company makes it easy for businesses to move products by air, land, and sea around the world.</p>
                  </div>
                </CardBody>
              </Card>
            </Col>


            <Col xl={3} md={6}>
              <Card className="mini-stat ">
                <CardBody>
                  <div className="">
                    <div className="float-start mini-stat-img me-4">
                      <img src={udemy} alt="" />
                    </div>
                    <h5 className="font-size-16  mt-0 ">
                    udemy
                    </h5>
                    <p className="mb-3  font-size-13">Trading at $50 - $60 / share</p>
                    <h4 className="fw-medium text-danger font-size-24">
                      -3.65%(-$0.36){" "}
                      <i className="mdi mdi-arrow-down text-danger ms-2"></i>
                    </h4>
                    <div className="mini-stat-label ">
                    <p className="mb-3  h5"><i class="ion ion-md-checkmark"></i></p>
                    </div>
                  </div>
                  <div className="pt-2">
                    <div className="float-end">
                      <Link to="#" className="">
                        <i className="mdi mdi-arrow-right h5"></i>
                      </Link>
                    </div>

                    <p className=" mb-0 mt-1">Last funding round</p>
                    <p className=" mb-0 mt-1 font-size-8">Series X <br></br> $5.00B <br></br>val Sep. 2020</p>
                  </div>
                </CardBody>
              </Card>
            </Col>
            
          </Row>
        
        
          <div className="page-title-box ">
            <Row className="align-items-center">
              <Col md={8}>
                
                
                <h6 className="page-title-big">Companies on your Watchlist</h6>
              </Col>

              <Col md="4">
             
              </Col>
            </Row>
          </div>

          <Row >
            <Col xl={3} md={6}>
              <Card className="mini-stat ">
                <CardBody>
                  <div className="">
                    <div className="float-start mini-stat-img me-4">
                      <img src={synthego} alt="" />
                    </div>
                    <h5 className="font-size-16  mt-0 ">
                      Synthego
                    </h5>
                    <p className="mb-3  font-size-13">Trading at $50 - $60 / share</p>
                    <h4 className="fw-medium text-success font-size-24">
                    +254.84% (+39.50 ){" "}
                      <i className="mdi mdi-arrow-up text-success ms-2"></i>
                    </h4>
                    <div className="mini-stat-label ">
                      <p className="mb-3  h5"><i class="ion ion-md-add"></i></p>
                    </div>
                  </div>
                  <div className="pt-2">
                    <div className="float-end">
                      <Link to="#" className="">
                        <i className="mdi mdi-arrow-right h5"></i>
                      </Link>
                    </div>
                    <p className=" mb-0 mt-1">Last funding round</p>
                    <p className=" mb-0 mt-1 font-size-8">Series X <br></br> $5.00B <br></br>val Sep. 2020</p>
                  </div>
                </CardBody>
              </Card>
            </Col>
          
          
          </Row>

       
       
        </Container>
      </div>

    </React.Fragment>
  )
}

Dashboard.propTypes = {
  t: PropTypes.any
}

export default withTranslation()(Dashboard)
