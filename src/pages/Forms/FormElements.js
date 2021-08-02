import React, { useState } from "react"
import MetaTags from 'react-meta-tags';

import {
  Card,
  CardBody,
  Col,
  Row,
  CardTitle,
  Container,
  Label,
  Input,
} from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

import { Link } from "react-router-dom"

const FormElements = () => {
  const [customchk, setcustomchk] = useState(true)
  const [customchkPrimary, setcustomchkPrimary] = useState(true)
  const [customchkSuccess, setcustomchkSuccess] = useState(true)
  const [customchkInfo, setcustomchkInfo] = useState(true)
  const [customchkWarning, setcustomchkWarning] = useState(true)
  const [customchkDanger, setcustomchkDanger] = useState(true)
  const [customOutlinePrimary, setcustomOutlinePrimary] = useState(true)
  const [customOutlineSuccess, setcustomOutlineSuccess] = useState(true)
  const [customOutlineInfo, setcustomOutlineInfo] = useState(true)
  const [customOutlineWarning, setcustomOutlineWarning] = useState(true)
  const [customOutlineDanger, setcustomOutlineDanger] = useState(true)
  const [toggleSwitch, settoggleSwitch] = useState(true)
  const [toggleSwitchSize, settoggleSwitchSize] = useState(true)

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Orders | Seed Karo</title>
        </MetaTags>
        <Container fluid={true}>
           <div className="page-title-box">
            <Row className="align-items-center">
              <Col md={8}>
                <h6 className="page-title-big">Orders</h6>
              </Col>

              <Col md="4">
             
              </Col>
            </Row>
          </div>
          <Row>
            <Col>

            <Card className="text-white bg-success">
                <CardBody>
                  <blockquote className="card-blockquote mb-4">
                    <h1>
                    You have no orders yet.
                    </h1>
                    <footer className="blockquote-footer text-white font-12 m-0">
                    Orders allow you to express interest to transact in a company.
                    </footer>
                    
                  </blockquote>

                  <Link to="/form-advanced" className="btn btn-primary waves-effect waves-light" >
                 First order
                </Link>
                </CardBody>
              </Card>

        
            </Col>
          </Row>

        </Container>
      </div>
    </React.Fragment>
  )
}

export default FormElements
