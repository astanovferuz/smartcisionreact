import React, { Component } from "react";
import CardsDirectory from "./CardsDirectoryComponent";
import HrLine from "./HrCompnent";
import JumbotronComponent from "./JumbotronComponent";
import { PROCARDS } from "../shared/procards"
import { motion } from "framer-motion";

class Home extends Component    {
    constructor(props)  {
        super(props);

        this.state = {
            procards: PROCARDS
        }
    }
    render()    {
        const pageTransition = {
            in: {
                opacity: 1,
                x: 0
            },
            out: {
                opacity: 0,
                x: "-5%"
            }
        }
        return(
            <motion.div exit="out" animate="in" initial="out" variants={pageTransition}>
                <JumbotronComponent />
                <HrLine />
                <CardsDirectory instCards={this.state.procards} />
            </motion.div>
        );
    }
}

export default Home;