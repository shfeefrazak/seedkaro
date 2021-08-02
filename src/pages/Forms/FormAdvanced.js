import React, { useState } from "react"
import MetaTags from 'react-meta-tags';
import { Button, Card, CardBody, Col, Container, Form, FormGroup, Input, InputGroup, Label, Row } from "reactstrap"

import { SketchPicker } from "react-color"
import ColorPicker from "@vtaits/react-color-picker"
import "@vtaits/react-color-picker/dist/index.css"
import "react-datepicker/dist/react-datepicker.css"
import Switch from "react-switch"
import Select from "react-select"
import makeAnimated from "react-select/animated"
//Import Flatepicker
import "flatpickr/dist/themes/material_blue.css"
import Flatpickr from "react-flatpickr"

//Tppiy
import Tippy from "@tippyjs/react";
import { TooltipProps } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import { Link } from "react-router-dom"

const animatedComponents = makeAnimated()

const Offsymbol = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        fontSize: 12,
        color: "#fff",
        paddingRight: 2
      }}
    >
      {" "}
      No
    </div>
  )
}


const OnSymbol = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        fontSize: 12,
        color: "#fff",
        paddingRight: 2
      }}
    >
      {" "}
      Yes
    </div>
  )
}

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


const FormAdvanced = () => {


  const [selectedGroup, setselectedGroup] = useState(null)



  function threshholdchange(event) {
    const count = event.target.value.length
    const remain_val = max_len - 20

    if (remain_val <= count) {
      setdisthresh(true)
    } else {
      setdisthresh(false)
    }
    setthreshholdcount(event.target.value.length)
  }

  function threshholdDefault(event) {
    const count = event.target.value.length
    if (count > 0) {
      setdisDefault(true)
    } else {
      setdisDefault(false)
    }
    setthreshhold(event.target.value.length)
  }

  function optionchange(event) {
    const count = event.target.value.length
    if (count > 0) {
      setdisbadge(true)
    } else {
      setdisbadge(false)
    }
    setoptioncount(event.target.value.length)
  }

  function placementchange(event) {
    const count = event.target.value.length
    if (count > 0) {
      setplacementbadge(true)
    } else {
      setplacementbadge(false)
    }
    setplacementcount(event.target.value.length)
  }

  function textareachange(event) {
    const count = event.target.value.length
    if (count > 0) {
      settextareabadge(true)
    } else {
      settextareabadge(false)
    }
    settextcount(event.target.value.length)
  }

  function handleSelectGroup(selectedGroup) {
    setselectedGroup(selectedGroup)
  }



  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Trade</title>
        </MetaTags>
        <Container fluid={true}>


          <Row className="justify-content-md-center">
            <Col lg="6">
              <Card>
                <CardBody>
                  <h2 className="page-title-big">Trade</h2>
                  <p className="card-title-desc">
                    Buy or sell stock in private companies.

                    The form is not binding. Below, you may specify if you're ready to commit to a trade or are placing an exploratory listing.

                    You will be notified of next steps after your listing is recorded.
                  </p>

                  <form>
                    <Row>
                      <Col lg="6">
                        <div className="mb-3">
                          <Label>Search companies</Label>
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

                      <Col lg="12">

                        <div className="mb-3">
                          <Label className="form-label mb-3 d-flex">Order Type :</Label>
                          <div className="form-check form-check-inline">
                            <Input
                              type="radio"
                              id="Buy"
                              name="Type "
                              className="form-check-input"
                            />
                            <Label
                              className="form-check-label" htmlFor="Buy"
                            >
                              Buy
                            </Label>
                          </div>

                          <div className="form-check form-check-inline">
                            <Input
                              type="radio"
                              id="Sell"
                              name="Type "
                              className="form-check-input"
                            />
                            <Label
                              className="form-check-label" htmlFor="Sell"
                            >
                              Sell
                            </Label>
                          </div>
                        </div>

                      </Col>

                      <Col lg="12">


                        <div className="mb-3">
                          <Label className="form-label mb-3 d-flex"> How serious is your interest? :</Label>
                          <div className="form-check form-check-inline">
                            <Input
                              type="radio"
                              id="exploratory"
                              name="interest"
                              className="form-check-input"
                            />
                            <Label
                              className="form-check-label" htmlFor="exploratory"
                            >
                              Exploratory
                            </Label>
                          </div>

                          <div className="form-check form-check-inline">
                            <Input
                              type="radio"
                              id="commited"
                              name="interest"
                              className="form-check-input"
                            />
                            <Label
                              className="form-check-label" htmlFor="commited"
                            >
                              Commited
                            </Label>
                          </div>
                        </div>
                      </Col>

                      <Col lg="12">


                        <div className="mb-3">
                          <Label className="form-label mb-3 d-flex"> Pricing Type</Label>
                          <div className="form-check form-check-inline">
                            <Input
                              type="radio"
                              id="shareprice"
                              name="PricingType"
                              className="form-check-input"
                            />
                            <Label
                              className="form-check-label" htmlFor="shareprice"
                            >
                              Share Price
                            </Label>
                          </div>

                          <div className="form-check form-check-inline">
                            <Input
                              type="radio"
                              id="valuation"
                              name="PricingType"
                              className="form-check-input"
                            />
                            <Label
                              className="form-check-label" htmlFor="valuation"
                            >
                              Valution
                            </Label>
                          </div>
                        </div>
                      </Col>


                      
                      <Col lg="6">
                        <div className="mb-3">
                          <Tippy content='asdsd'>
                          <Label className="form-label mb-3 d-flex" > Share Price </Label>
                          </Tippy>
                          <Input type="text"  className="inner form-control" placeholder="$"   />
                        </div>
                     
                        <div className="mb-3">
                          <Label className="form-label mb-3 d-flex"> Number of Shares</Label>
                          <Input type="text"  className="inner form-control" placeholder="Number of Shares"  />
                        </div>

                        <div className="mb-3">
                          <Label className="form-label" htmlFor="formmessage">Message :</Label>
                          <Input
                            type="textarea"
                            id="formmessage"
                            className="form-control"
                            rows="3"
                          />
                        </div>
                        <div className="mb-3">
                        <Button type="submit"   className="btn btn-success mt-3 mt-lg-0">
                          Submit
                        </Button>
                        </div>
                      </Col>




                    

                      </Row>
                  </form>
                </CardBody>
              </Card>
            </Col>
          </Row>

        </Container>
      </div>
    </React.Fragment>
  )
}

export default FormAdvanced
