import React from "react";
import { Badge } from "reactstrap";
import ReactStars from "react-rating-stars-component";


function ExpArc({selectedDecision})  {
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
            <p className="text-white fontSmall mb-0">{selectedDecision.decSolution}</p>
            <br />
            <p className="text-aqua fontSmall mb-0">Are you satisfied with your decision?</p>
            {selectedDecision.decSatisfied === "yes" ? <Badge className="ml-1 mt-1" color="success">{selectedDecision.decSatisfied}</Badge> : <Badge className="ml-1 mt-1" color="danger">{selectedDecision.decSatisfied}</Badge> }
            <p className="text-aqua fontSmall mb-0">Were you able to solve your problem with this decision?</p>
            {selectedDecision.decSolved === "yes" ? <Badge className="ml-1 mt-1" color="success">{selectedDecision.decSolved}</Badge> : <Badge className="ml-1 mt-1" color="danger">{selectedDecision.decSolved}</Badge> }
            <p className="text-aqua fontSmall mb-0">Is there anything you would have done differently?</p>
            {selectedDecision.decDiff === "yes" ? <Badge className="ml-1 mt-1" color="success">{selectedDecision.decDiff}</Badge> : <Badge className="ml-1 mt-1" color="danger">{selectedDecision.decDiff}</Badge> }
            <br />
            <p className="text-white fontSmall mt-3 mb-0">Your decision's rating</p>
            <ReactStars
                className="my-0"
                value={selectedDecision.rating}
                count={5}
                edit={false}
                size={30}
                activeColor="#ffd700"
            />
        </div>
    );
}

export default ExpArc;