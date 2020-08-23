import React, { Component } from "react";
import Header from "./HeaderComponent";
import { BrowserRouter } from "react-router-dom";
import HrLine from "./HrCompnent";
import { PROCARDS } from "../shared/procards"
import CardsDirectory from "./CardsDirectoryComponent"

class Main extends Component    {
    constructor(props)  {
        super(props);

        this.state = {
            proCards: PROCARDS
        }
    }
    render() {
        return(
            <BrowserRouter>
                <div>
                    <Header />
                    <HrLine />
                    <CardsDirectory instCards={this.state.proCards} />
                </div>
            </BrowserRouter>
        );
    }
}

export default Main;