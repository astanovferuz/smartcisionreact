import React, { Component } from "react";
import Header from "./HeaderComponent";
import { BrowserRouter } from "react-router-dom";

class Main extends Component    {
    render() {
        return(
            <BrowserRouter>
                <div>
                    <Header />
                </div>
            </BrowserRouter>
        );
    }
}

export default Main;