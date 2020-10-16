import React from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import About from "./AboutComponent";
import Contact from "./ContactComponent";
import Demo from "../coreapplogic/DemoPageComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function Main(props){
        return(
            <div>
                <Header baseName={props.baseName} />
                <AnimatePresence exitBeforeEnter>
                    <Switch>
                    <Route path="/home" component={Home} />
                    <Route exact path="/aboutus" component={About} />
                    <Route exact path="/demo" component={Demo} />
                    <Route exact path="/contactus" component={Contact} />
                    <Redirect to="/home" />
                    </Switch>
                </AnimatePresence>
                <Footer />
            </div>
    );
}

export default Main;