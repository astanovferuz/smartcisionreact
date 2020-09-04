import React from "react";
import { Accordion, Card } from "react-bootstrap";

function DecCom(props)  {
    const mappedDecisions = props.decisions.map(decision => {
        return(
            <React.Fragment key={decision.id}>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey={decision.id}>
                    {decision.decTitle}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={decision.id}>
                    <Card.Body>{decision.decBody}</Card.Body>
                    </Accordion.Collapse>
                </Card> 
            </React.Fragment>
        )
    })
        return(
            <div>
                <Accordion defaultActiveKey={props.decisions[0].id}>
                    {mappedDecisions}
                </Accordion>
            </div>
        );
}

export default DecCom;