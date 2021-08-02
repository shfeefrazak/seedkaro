import React, { useState } from "react"
import MetaTags from 'react-meta-tags';

import {
  Card,
  CardBody,
  Col,
  Container,
  Form,
  Input,
  NavItem,
  NavLink,
  Row,
  Label,
  TabContent,
  TabPane
} from "reactstrap"

import classnames from "classnames"
import { Link } from "react-router-dom"
import Select from "react-select"
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"





const FormWizard = () => {
  const [activeTab, setactiveTab] = useState(1)
  const [activeTabProgress, setactiveTabProgress] = useState(1)
  const [progressValue, setprogressValue] = useState(50)
  const [activeTabVartical, setoggleTabVertical] = useState(1)
  const [selectedGroup, setselectedGroup] = useState(null)

  const optionGroup = [
    {
      label: "",
      options: [

        { label: "Synthego", value: "Synthego" },
        { label: "Pymetrics", value: "Pymetrics" },
        { label: "Flexport", value: "Flexport" }
      ]
    },

  ]


  const optionGroup2 = [
    {
      label: "",
      options: [

        { label: "Employee", value: "Employee" },
        { label: "Founder", value: "Pymetrics" },
        { label: "Primary Invester", value: "Primary Invester" },
        { label: "Secondary Invester", value: "Secondary Invester" },
        { label: "Advisory/Other", value: "Advisory/Other" }


      ]
    },

  ]

  const optionGroup3 = [
    {
      label: "",
      options: [

        { label: "Shares", value: "Shares" },
        { label: "Options", value: "Options" },
        { label: "Restricted Stock Units (RSUs)", value: "Restricted Stock Units (RSUs)" }
      ]
    },

  ]

  function handleSelectGroup(selectedGroup) {
    setselectedGroup(selectedGroup)
  }

  function toggleTab(tab) {
    if (activeTab !== tab) {
      if (tab >= 1 && tab <= 2) {
        setactiveTab(tab)
      }
    }
  }

  function toggleTabVertical(tab) {
    if (activeTabVartical !== tab) {
      if (tab >= 1 && tab <= 2) {
        setoggleTabVertical(tab)
      }
    }
  }



  function toggleTabProgress(tab) {
    if (activeTabProgress !== tab) {
      if (tab >= 1 && tab <= 2) {
        setactiveTabProgress(tab)

        if (tab === 1) {
          setprogressValue(50)
        }
        if (tab === 2) {
          setprogressValue(100)
        }
      
      }
    }
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Add a Holding</title>
        </MetaTags>
        <Container fluid={true}>
          <div className="page-title-box">
            <Row className="align-items-center">
              <Col md={8}>
                <h6 className="page-title-big">Holdings</h6>
              </Col>

              <Col md="4">

              </Col>
            </Row>
          </div>


          <Row className="justify-content-md-center">
            <Col sm="6">
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Add a Holding</h4>
                  <div className="form-horizontal form-wizard-wrapper wizard clearfix">
                    <div className="steps clearfix">
                      
                    </div>
                    <div className="content clearfix">
                      <TabContent
                        activeTab={activeTab}
                        className="body"
                      >
                        <TabPane tabId={1}>
                          <Form>

                            <Row>
                              <Col lg="12">
                                <div className="mb-3">
                                  <Label>Company Name</Label>
                                  <Select
                                    value={selectedGroup}
                                    onChange={() => {
                                      handleSelectGroup()
                                    }}
                                    options={optionGroup}
                                    classNamePrefix="select2-selection"
                                  />
                                </div>
                              </Col>
                              </Row>
                              <Row>
                              <Col lg="12">
                                <div className="mb-3">
                                  <Label>How did you acquire this holdings?</Label>
                                  <Select
                                    value={selectedGroup}
                                    onChange={() => {
                                      handleSelectGroup()
                                    }}
                                    options={optionGroup2}
                                    classNamePrefix="select2-selection"
                                  />
                                </div>
                              </Col>
                            </Row>

                            <Row>
                              <Col lg="12">
                                <div className="mb-6">
                                  <Label>What is the asset type?</Label>
                                  <Select
                                    value={selectedGroup}
                                    onChange={() => {
                                      handleSelectGroup()
                                    }}
                                    options={optionGroup3}
                                    classNamePrefix="select2-selection"
                                  />
                                </div>
                              </Col>

                            </Row>



                          </Form>
                        </TabPane>
                        <TabPane tabId={2}>

                          <Form>
                            <Row>
                              <Col lg={12}>
                              <div className="mb-6">
                                <Label>How many shares  do you own?</Label>
                                <Input type="text" className="form-control" />
                                </div>
                              </Col>

                              <Col lg={12}>
                                <Label>What was your purchase price per share ?</Label>
                                <Input type="text" className="form-control" />
                              </Col>
                             
                         

                              <Col lg="12">
                                <div className="mb-6">
                                  <Label>What is the asset type?</Label>
                                  <Select
                                    value={selectedGroup}
                                    onChange={() => {
                                      handleSelectGroup()
                                    }}
                                    options={optionGroup3}
                                    classNamePrefix="select2-selection"
                                  />
                                </div>
                              </Col>


                              <Col lg={12}>
                                <Label>When did you purchase this holdings?</Label>
                                <input className="form-control" type="date"  id="example-date-input"
                      />
                              </Col>


                            </Row>

                          </Form>
                        </TabPane>
                      
                     
                      </TabContent>
                    </div>
                    <div className="actions clearfix text-right">
                      <ul>
                        <li
                          className={
                            activeTab === 1 ? "previous disabled" : "previous"
                          }
                        >
                          <Link
                            to="#"
                            className="btn btn-primary"
                            onClick={() => {
                              toggleTab(activeTab - 1)
                            }}
                          >
                            Previous
                          </Link>
                        </li>
                        <li
                          className={activeTab === 4 ? "next disabled" : "next"}
                        >
                          <Link
                            to="#"
                            className="btn btn-primary"
                            onClick={() => {
                              toggleTab(activeTab + 1)
                            }}
                          >
                            Next
                          </Link>
                        </li>
                      </ul>
                    </div>
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

export default FormWizard