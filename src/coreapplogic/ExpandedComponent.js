import React from "react";
import { Badge, Button } from "reactstrap";

function ExpandedDecision({selectedDecision, handleDeleteDec, editDecision, editMode, toggleEvaModal}) {
    return(
        <div className="exDecisionBack p-3 borderYellow">
            <h6 className="text-white expandCardTitle">{selectedDecision.decTitle}
            {selectedDecision.decPriority === "low" ? <Badge className="ml-2" color="success">Low Priority</Badge> : 
             selectedDecision.decPriority === "mid" ? <Badge className="ml-2" color="warning">Medium Priority</Badge> :
             selectedDecision.decPriority === "high" ? <Badge className="ml-2" color="danger">High Priority</Badge> : null}
            </h6>
            <p className="text-aqua">Problem</p>
            <p className="text-white fontSmall mt-2">{selectedDecision.decProblem}</p>
            <p className="text-aqua">Solution</p>
            <p className="text-white fontSmall">{selectedDecision.decSolution}</p>
            <Button onClick={() => toggleEvaModal()} size="sm" className="fontBold backWhite text-black primButton">Evaluate Decision</Button>
            <Button onClick={() => {
                editDecision(selectedDecision);
                editMode();
            }} size="sm ml-2" className="fontBold backWhite text-black warnButton">Edit Decision</Button>
            <Button onClick={() => handleDeleteDec(selectedDecision.id)} size="sm ml-2" className="fontBold backWhite text-black danButton">Delete Decision</Button>
        </div>
    );
}

export default ExpandedDecision;