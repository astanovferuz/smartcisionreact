import React, { Component } from "react";
import "../coreapplogicstyles/demopage.css"

class Archive extends Component    {

    render()    {
        return(
                <div className="container-fluid stripe-z">
                    <div className="row">
                        <div className="col-md-6 mar-y decisionCol">
                            <h2 className="text-center text-white gray-box py-2">Archive</h2>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Archive;