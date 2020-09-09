import React from "react";
import CardsDirectory from "./CardsDirectoryComponent";
import HrLine from "./HrCompnent";
import JumbotronComponent from "./JumbotronComponent";

function Home(props)    {
    return(
        <React.Fragment>
            <JumbotronComponent />
            <HrLine />
            <CardsDirectory instCards={props.proCards} />
        </React.Fragment>
    );
}

export default Home;