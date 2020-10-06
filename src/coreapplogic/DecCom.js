import React, { Component } from "react";
import { Accordion, Card } from "react-bootstrap";
import { Button, Badge } from "reactstrap";
import ExpandedDecision from "./ExpandedComponent";
import { Fade, Stagger } from "react-animation-components";


class DecCom extends Component  {
    constructor(props)  {
        super(props);

        this.state = {
            selectedDecision: null
        }
    }


    selectedDecision(decision)   {
        this.setState({
            selectedDecision: decision
        });
    }
    
    render()    {
            const mappedDecisions = this.props.decisions.map(decision => {
            let rawProblem = decision.decProblem;
            let truncLength = 100;
            let displayDecProblem = rawProblem.substring(0, truncLength);
            return(
                <Fade in key={decision.id}>
                <div>
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
                            <Button onClick={() => this.selectedDecision(decision)} className="mt-2 fontBold" size="sm" color="success">Expand Decision</Button>
                            <Button onClick={() => {
                                    this.props.editDecision(decision);
                                    this.props.editMode();
                            }} className="mt-2 ml-2 fontBold" size="sm" color="warning">Edit Decision</Button>
                            <Button onClick={() => this.props.handleDeleteDec(decision.id)} className="mt-2 ml-2 fontBold" size="sm" color="danger">Delete Decision</Button>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card> 
                </div>
                </Fade>
            )
        })
            return(
                <div className="row">
                    <div className="col-md-6 decisionCol mb-5 botMar">
                        <div className="scrollbar ml-0 roundCorners" id="style-2">
                            <div className="force-overflow">
                                <Accordion defaultActiveKey={null}>
                                    <Stagger in>
                                        {mappedDecisions}
                                    </Stagger>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 decisionCol mb-5">
                       {this.state.selectedDecision !== null ? 
                       <ExpandedDecision
                       getEvaluatedDecision={this.props.getEvaluatedDecision}
                       toggleEvaModal={this.props.toggleEvaModal}
                       editDecision={this.props.editDecision}
                       editMode={this.props.editMode}
                       handleDeleteDec={this.props.handleDeleteDec} 
                       selectedDecision={this.state.selectedDecision}/> : 
                       null }
                    </div>
                </div>
            );
    }
    
}

export default DecCom;