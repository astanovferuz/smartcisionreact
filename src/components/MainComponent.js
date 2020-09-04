import React, { Component } from "react";
import Header from "./HeaderComponent";
import { PROCARDS } from "../shared/procards"
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import About from "./AboutComponent";
import Contact from "./ContactComponent";
import Demo from "../coreapplogic/DemoPageComponent";
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component    {
    constructor(props)  {
        super(props);

        this.state = {
            proCards: PROCARDS
        }
    }
    render() {
        return(
            <div>
                <Header />
                <Switch>
                <Route path="/home" render={() => <Home proCards={this.state.proCards} />} />
                <Route exact path="/aboutus" component={About} />
                <Route exact path="/demo" component={Demo} />
                <Route exact path="/contactus" component={Contact} />
                <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
    );
    }
}

export default Main;