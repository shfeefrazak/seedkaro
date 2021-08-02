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
          <title>Holdings | Seed Karo</title>
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
          <Row>
            <Col>

            <Card className="text-white bg-success">
                <CardBody>
                  <blockquote className="card-blockquote mb-4">
                    <h1>
                    You have no holdings. Add your first holding to start trading.
                    </h1>
                   
                  </blockquote>
                     
                  <Link to="/form-wizard" className="btn btn-primary waves-effect waves-light mb-6" >
                  Add Holdings
                </Link>

                <blockquote className="card-blockquote mb-6">
                  
                    <footer className="blockquote-footer text-white font-12 m-0">
                    Holdings and asset values shown are based on a variety of inputs, including inputs by you. They do not necessarily reflect actual current market prices or the value you would receive upon sale of such assets. The information displayed does not represent a commitment by Forge to transact at those prices, or at any price, in the future. Any indicative prices were generated as of a specific time and do not represent (i) the actual terms at which new transactions could be entered into, (ii) the actual terms at which existing transactions could be liquidated or unwound or (iii) the calculation or estimate of an amount that would be payable following the early termination of transactions pursuant to any agreement to which Forge is a party. The investment return and principal value of an investment will fluctuate. So your assets, when sold, may be worth more or less than the original cost to you. Certain assets may be illiquid and unavailable for sale at any price. There is no assurance that your investment objective will be attained.

All returns are shown net of fees unless otherwise indicated. Forge relies upon data, formulas, software and other information to calculate the value of an asset. Periodic software enhancements may possibly cause inconsistencies with some performance calculations. Please notify Forge if you have reason to believe calculations are incorrect to help ensure proper calculations going forward. The “unknown” label located in the value field indicates that no current value for the holding(s) has been able to be obtained. If you have a custodial statement indicating the current value, and wish to see it listed on future reports, please provide it to Forge.

Certain assets displayed (identified as “Additional Assets” or “Manually Entered Assets”) may not be held through Forge and may not be covered by SIPC. Such assets are not subject to fee billing and are excluded from account value calculations. Descriptions and valuations of Additional Assets or Manually Entered Assets are based on information added by you (or by a third party acting on your behalf) to our platform, have not been verified by Forge and may not be complete, accurate or current.
                    </footer>
                    
                  </blockquote>


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
