import React from "react";

function ExpandedDecision(props) {
    return(
        <div className="exDecisionBack p-2">
            <h3 className="text-white">{props.selectedDecision.decTitle}</h3>
        </div>
    );
}

export default ExpandedDecision;