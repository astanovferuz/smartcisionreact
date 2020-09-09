import React from "react";
import { Jumbotron } from "reactstrap";

function JumbotronComponent()    {
    return(
        <Jumbotron fluid className="jumbo-mt-zero">
            <div className="container">
                <div className="row">
                    <div className="col mt-4">
                        <h1 className="text-center">Smart Decisions</h1>
                        <p className="text-center">Don't make the same mistake twice. Make smart decisions.</p>
                    </div>
                </div>
                    <div className="row">
                    <div className="col d-flex justify-content-center">
                        <a href="#first-main-headline" className="btn btn-warning fontBold mt-3 btn-lg btn-yellow">Learn More</a>
                    </div>
                </div>
            </div>
        </Jumbotron>
    );
}

export default JumbotronComponent;