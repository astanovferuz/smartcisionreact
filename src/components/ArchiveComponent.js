import React, { Component } from "react";
import { Accordion, Card } from "react-bootstrap";
import { Button, Badge } from "reactstrap";
import ReactStars from "react-rating-stars-component";
import ExpArc from "../coreapplogic/ExpandedArcDecComponent";
import "../coreapplogicstyles/demopage.css";
import { Fade, Stagger } from "react-animation-components";


class Archive extends Component  {
    constructor(props)  {
        super(props);

        this.state = {
            selectedDecision: null,
            evaDecFilter: false
        }

        this.selectDecision = this.selectDecision.bind(this);
    }

    selectDecision(decision)    {
        this.setState({
            selectedDecision: decision
        });
    }   

    render()    {
    const mappedArcs = this.props.arcDecs.map(decision => {
        let rawProblem = decision.decProblem;
        let truncLength = 100;
        let displayDecProblem = rawProblem.substring(0, truncLength);
        return(
            <Fade in key={decision.id}>
                <div key={decision.id}>
                    <Card className="border-0 roundCorners">
                        <Accordion.Toggle as={Card.Header} eventKey={decision.id} className="btn-yellow fontBold someBorder decisionName">
                        <span><i className="fa fa-check-square-o" /></span>&nbsp;
                        {decision.decTitle}
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={decision.id} className="decBodyBack text-white">
                        <Card.Body>
                            <h6 className="colCardPriority">Priority -
                            {decision.decPriority === "low" ? <Badge className="ml-1 mt-1" color="success">low</Badge> : 
                            decision.decPriority === "mid" ? <Badge className="ml-1 mt-1" color="warning">mid</Badge> : 
                            decision.decPriority === "high" ? <Badge className="ml-1 mt-1" color="danger">high</Badge> : null }
                            </h6>
                            { rawProblem.length > truncLength ? displayDecProblem + "..." : rawProblem }
                            <br />
                            Are you satisfied with your decision?
                            <br />
                            {decision.decSatisfied === "yes" ? <Badge className="ml-1 mt-1" color="success">{decision.decSatisfied}</Badge> : <Badge className="ml-1 mt-1" color="danger">{decision.decSatisfied}</Badge> }
                            <br />
                            Were you able to solve your problem with this decision?
                            <br />
                            {decision.decSolved === "yes" ? <Badge className="ml-1 mt-1" color="success">{decision.decSolved}</Badge> : <Badge className="ml-1 mt-1" color="danger">{decision.decSolved}</Badge> }
                            <br />
                            Is there anything you would have done differently?
                            <br />
                            {decision.decDiff === "yes" ? <Badge className="ml-1 mt-1" color="success">{decision.decDiff}</Badge> : <Badge className="ml-1 mt-1" color="danger">{decision.decDiff}</Badge> }
                            <br />
                            Your decision's rating
                            <br />
                            <ReactStars
                                value={decision.rating}
                                count={5}
                                edit={false}
                                size={30}
                                activeColor="#ffd700"
                            />
                            <br />
                            <Button onClick={() => this.selectDecision(decision)} className="mt-2 fontBold" size="sm" color="success">Expand Decision</Button>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card> 
                </div>
            </Fade>
        )
    })
        return(
            <div className="row">
                <div className="col-md-6 decisionCol mb-5 mar-y">
                        <h2 className="text-center text-white gray-box py-2">Archived Decisions</h2>
                    <div className="scrollbar-arc ml-0 mt-2 roundCorners" id="style-2">
                        <div className="force-overflow">
                            <Accordion defaultActiveKey={null}>
                                <Stagger in>
                                    {mappedArcs}
                                </Stagger>
                            </Accordion>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 decisionCol mb-5 mar-y">
                    {this.state.selectedDecision !== null ? <ExpArc selectedDecision={this.state.selectedDecision} /> : null }
                </div>
            </div>
        );
    }
}

export default Archive;