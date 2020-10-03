import React from "react";
import { Accordion, Card } from "react-bootstrap";
import { Button, Badge } from "reactstrap";
import "../coreapplogicstyles/demopage.css";

function Archive(props)    {
    const mappedArcs = props.arcDecs.map(decision => {
        let rawProblem = decision.decProblem;
        let truncLength = 100;
        let displayDecProblem = rawProblem.substring(0, truncLength);
        return(
            <React.Fragment key={decision.id}>
                <Card className="border-0 roundCorners">
                    <Accordion.Toggle as={Card.Header} eventKey={decision.id} className="btn-yellow fontBold someBorder decisionName">
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
                        <Button className="mt-2 fontBold" size="sm" color="success">Expand Decision</Button>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card> 
            </React.Fragment>
        )
    })
        return(
            <div className="row">
                <div className="col-md-6 decisionCol mb-5 mar-y">
                        <h2 className="text-center text-white gray-box py-2">Archived Decisions</h2>
                    <div className="scrollbar ml-0 roundCorners" id="style-2">
                        <div className="force-overflow">
                            <Accordion defaultActiveKey={null}>
                                {mappedArcs}
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default Archive;