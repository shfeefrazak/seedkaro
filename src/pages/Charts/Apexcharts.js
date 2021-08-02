import React from "react"
import MetaTags from 'react-meta-tags';

// import apexChart
import LineApexChart from "../AllCharts/apex/chartapex";
import BarApexChart from "../AllCharts/apex/barchart";
import AreaChart from "../AllCharts/apex/areachart";
import DonutChart from "../AllCharts/apex/dountchart";
import StackedBarChart from "../AllCharts/apex/stackedbarchart";

import { Row, Table, Col, Card, CardBody, CardTitle } from "reactstrap"
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

// Image
import synthego from "../../assets/images/company/synthego.png";
import pymetrics from "../../assets/images/company/pymetrics.png";
import flexport from "../../assets/images/company/flexport.png";
import udemy from "../../assets/images/company/udemy.png";

import user2 from "../../assets/images/users/user-2.jpg";
import user3 from "../../assets/images/users/user-3.jpg";
import user4 from "../../assets/images/users/user-4.jpg";
import user5 from "../../assets/images/users/user-5.jpg";
import user6 from "../../assets/images/users/user-6.jpg";

import img3 from "../../assets/images/small/img-3.jpg"

//
import { Link } from "react-router-dom"



const Apexchart = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Comapany Name</title>
        </MetaTags>
        <div className="container-fluid">



          <Row>




            <Col lg={3}>
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Synthego</h4>

                  <div className="mini-stat-label float-end">
                    <p className="mb-3  h6"><i class="ion ion-md-add"></i> Follow</p>
                  </div>
                  <div className="">
                    <div className="float-start mini-stat-img me-4">
                      <img src={synthego} alt="" />
                    </div>
                    <h5 className="font-size-16  mt-0 ">

                    </h5>
                    <p className="mb-3  font-size-13">Trading at  </p>
                    <h4 className="fw-medium  font-size-24">
                      $50 - $60{" "}

                    </h4>
                    <p>255% premium to last round</p>

                  </div>
                  <Link to="/form-advanced" className="btn btn-primary w-100 waves-effect  mb-3">
                    TRADE
                  </Link>

                  <p className="mb-3  font-size-11">Synthego is a commission-free, mobile-first stock brokerage.</p>

                  <div className="table-responsive">
                    <Table className="table table-borderless mb-0">

                      <tbody>
                        <tr>

                          <td> <Link href="https://www.synthego.com/" target="_blank" > <i className="ion ion-md-link"></i>&nbsp;&nbsp; synthego.com </Link></td>

                        </tr>
                        <tr>
                          <td>   <i className="ion ion-md-pin"></i>&nbsp;&nbsp; Redwood City, California, United States </td>

                        </tr>
                        <tr>
                          <td> <i className="ion ion-ios-person"></i> &nbsp;&nbsp; 280 Employees</td>
                        </tr>
                        <tr>
                          <td> <i className="ion ion-ios-search"></i> &nbsp;&nbsp; Founded in 2013</td>
                        </tr>

                      </tbody>
                    </Table>
                  </div>



                </CardBody>
              </Card>
            </Col>

            <Col lg={7}>
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Shares</h4>

                  <AreaChart />

                </CardBody>
              </Card>

              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">About Synthego</h4>

                  <p>Industrialized CRISPR for Accelerated Discovery to Clinic with the Ha
                    Synthego’s Genome Engineering Platforms deliver unprecedented scale and quality for gene editing tools and cell-based models to fuel your research at any stage. Engineering principles meet biology.
                    Eliminate experimental variability. High-quality sgRNA combined with automated and optimized CRISPR protocols deliver the newest gold standard in CRISPR cells.</p>
                </CardBody>
              </Card>

              <Card>
                <CardBody>
                  <CardTitle className="h4">Capitalization Table </CardTitle>


                  <div className="table-responsive">
                    <Table className="table table-hover mb-0">
                      <thead>
                        <tr>
                          <th>Funding Round</th>
                          <th>Funding Amount</th>
                          <th>Post-Money Valuation </th>
                          <th>Shares Outstanding</th>
                          <th>Share Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">Series G <br></br>Sep, 2020</th>
                          <td>$660M</td>
                          <td>$12B</td>
                          <td>750M</td>
                          <td>$15.50</td>
                        </tr>
                        <tr>
                          <th scope="row">Series F <br></br>May, 2020</th>
                          <td>$430M</td>
                          <td>$8.5B</td>
                          <td>680M</td>
                          <td>$12.50</td>
                        </tr>
                        <tr>
                          <th scope="row">Series E <br></br> Jul, 2019</th>
                          <td>$320M</td>
                          <td>$7.6B</td>
                          <td>610M</td>
                          <td>$12.48</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </CardBody>
              </Card>
              <p className="pad2 font-size-11"> Any valuation data presented here, whether from the historical capitalization table or valuation implied by the offering (derived from multiplying the estimated share count of the company with the offering price including fees), is based on certain analysis, calculations and assumptions made by Forge and should not be relied on by the investor.</p>

              <p className=" font-size-11">The valuation data incorporates, in part, publicly disclosed data which may be incomplete and has not been independently corroborated by Forge. There may also exist material non-public information that significantly alters the valuation data presented here.</p>

              <p className=" font-size-11">The valuation data also incorporates capitalization table analysis which is independently derived by Forge relying on certain assumptions and calculations that could be inaccurate or fail to consider certain pertinent information. Forge may also have a conflict of interest with respect to the pricing data that is incorporated into the valuation data implied by the offering.</p>

              <p className=" font-size-11">Pricing, valuation and capitalization table data have not been confirmed or approved by the issuer. Any graphs may deviate from linear scale for presentation purposes. Estimated share count assumes a fully distributed option pool based on publicly available data.</p>

              <p className=" font-size-11">Overall, the data presented here is intended to be illustrative rather than definitive and is subject to change. As such, investors should conduct their own research and analysis with respect to the price, valuation and estimated share count of companies of interest and should not rely on the data and analyses presented here by Forge.</p>

              <p className=" font-size-11">Data and analyses are copyright Forge Global, Inc. and may not be reproduced without written permission. Past performance is not indicative of future results. Any securities offered are offered by Forge Markets LLC, a registered broker dealer and member FINRA/ SIPC.</p>




              <Card>
                <CardBody>
                  <CardTitle className="h4">Investors </CardTitle>
                  <table className="table table-borderless mb-0 ">

                    <tbody>
                      <tr>
                        <th scope="row">
                          <div>
                            <img
                              src={user2}
                              alt=""
                              className="avatar-xs rounded-circle me-2"
                            />{" "}
                            Sequoia Capital
                          </div>
                        </th>


                        <td>
                          <div>
                            <img
                              src={user3}
                              alt=""
                              className="avatar-xs rounded-circle me-2"
                            />{" "}
                            New Enterprise Associates
                          </div>
                        </td>


                        <td>
                          <div>
                            <img
                              src={user4}
                              alt=""
                              className="avatar-xs rounded-circle me-2"
                            />{" "}
                            DST Global
                          </div>
                        </td>


                      </tr>

                      <tr>
                        <th scope="row">
                          <div>
                            <img
                              src={user5}
                              alt=""
                              className="avatar-xs rounded-circle me-2"
                            />{" "}
                            Thrive Capital
                          </div>
                        </th>


                        <td>
                          <div>
                            <img
                              src={user6}
                              alt=""
                              className="avatar-xs rounded-circle me-2"
                            />{" "}
                            Kortschak Investments, L.P.
                          </div>
                        </td>


                        <td>
                          <div>
                            <img
                              src={user2}
                              alt=""
                              className="avatar-xs rounded-circle me-2"
                            />{" "}
                            Ribbit Capital
                          </div>
                        </td>
                      </tr>


                    </tbody>
                  </table>

                </CardBody>
              </Card>



              <Card>
                <CardBody>
                  <CardTitle className="h4 mb-5">News Related to Robinhood<hr></hr></CardTitle>
                
                  <Row>
                    <Col md={3}>
                      <img
                        className="rounded"
                        alt="veltrix"
                        width="200"
                        src={img3}
                      />
                    </Col>
                    <Col md={9}>
                     <h5>Synthego maxed out its entire $200 million line of credit last month amid market chaos, report says</h5>
                     <p className="font-size-7 font-weight-light">1 year ago - Business Insider</p>
                     <p className="font-size-14">
          Robinhood

Robinhood, the popular commission-free trading app, maxed out its entire $200 million credit line this month as markets swung violently, Bloomberg reported Tuesday, citing sources familiar with the matter.

The move to draw the full credit
        </p><hr></hr>
                    </Col>
                  </Row>


                  <Row>
                    <Col md={3}>
                      <img
                        className="rounded"
                        alt="veltrix"
                        width="200"
                        src={img3}
                      />
                    </Col>
                    <Col md={9}>
                     <h5>Synthego maxed out its entire $200 million line of credit last month amid market chaos, report says</h5>
                     <p className="font-size-7 font-weight-light">1 year ago - Business Insider</p>
                     <p className="font-size-14">
          Robinhood

Robinhood, the popular commission-free trading app, maxed out its entire $200 million credit line this month as markets swung violently, Bloomberg reported Tuesday, citing sources familiar with the matter.

The move to draw the full credit
        </p>
                    </Col>
                  </Row>
                </CardBody>
              </Card>



            </Col>


            <Col lg={2}>


              <h4 className="card-title mb-4">People Also Viewed</h4>
              <div className="table-responsive">
                <table className="table table-hover mb-0 border-none">

                  <tbody>
                    <tr>
                      <th scope="row">
                        <div>
                          <img
                            src={pymetrics}
                            alt=""
                            className="avatar-xs rounded-circle me-2"
                          />{" "}
                          Pymetrics
                        </div>
                      </th>

                    </tr>
                    <tr>
                      <td>
                        <div>
                          <img
                            src={flexport}
                            alt=""
                            className="avatar-xs rounded-circle me-2"
                          />{" "}
                          Flexport
                        </div>
                      </td>

                    </tr>
                    <tr>
                      <td>
                        <div>
                          <img
                            src={udemy}
                            alt=""
                            className="avatar-xs rounded-circle me-2"
                          />{" "}
                          udemy
                        </div>
                      </td>


                    </tr>
                  </tbody>
                </table>
              </div>



            </Col>

          </Row>

        </div>
      </div>
    </React.Fragment>
  )
}

export default Apexchart
