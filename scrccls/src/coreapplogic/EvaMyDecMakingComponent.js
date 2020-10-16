import React from "react";
import { Accordion, Card } from "react-bootstrap";
import { Badge, Alert } from "reactstrap";
import { Fade, Stagger } from "react-animation-components";


function EvaDec(props)   {

        const combinedDecs = props.decisions.concat(props.arcDecs);
        const notSolvedDecs = combinedDecs.filter(dec => dec.decSolved === "no");
        const solvedDecs = combinedDecs.filter(dec => dec.decSolved === "yes");
        const filteredCombinedDecs = combinedDecs.map(combinedDec => {
            return(
                <Fade in key={combinedDecs.id}>
                    <Card key={combinedDec.id} className="border-0 roundCorners">
                        <Accordion.Toggle as={Card.Header} eventKey={combinedDec.id} className="btn-yellow fontBold someBorder decisionName">
                        <span><i className="fa fa-check-square-o" /></span>&nbsp;
                        {combinedDec.decTitle} - {combinedDec.decSolved === "no" ? <Badge color="danger">Bad Decision</Badge> : 
                                                combinedDec.decSolved === "yes" ? <Badge color="success">Good Decision</Badge> :
                                                <React.Fragment><Badge color="secondary">Under Evaluation</Badge>&nbsp;<div className="spinner-border spinner-border-sm text-secondary" role="status"/></React.Fragment>}
                        </Accordion.Toggle>
                    </Card>
                </Fade>
            )
        })
        return(
            <div className="col decisionCol mb-5 mar-y">
                        <h2 className="text-center text-white gray-box py-2">Your Decision Making Skills</h2>
                        {notSolvedDecs.length > solvedDecs.length ? 
                            <Alert className="text-center mb-0" color="danger">
                                You decisions have not been good lately. Work on your decision making skills.
                            </Alert>
                            : notSolvedDecs.length < solvedDecs.length ?
                            <Alert className="text-center mb-0" color="success">
                                You decisions making is good. Keep it up!
                            </Alert>
                            : notSolvedDecs.length === solvedDecs.length ?
                            <Alert className="text-center mb-0" color="warning">
                                You need to work on your decision making. Every second decision you make is wrong.
                            </Alert>
                            : null
                        }
                        
                    <div className="scrollbar-arc ml-0 mt-2 roundCorners" id="style-2">
                        <div className="force-overflow">
                            <Accordion defaultActiveKey={null}>
                                <Stagger in>
                                    {filteredCombinedDecs}
                                </Stagger>
                            </Accordion>
                        </div>
                    </div>
            </div>
        );
}

export default EvaDec;