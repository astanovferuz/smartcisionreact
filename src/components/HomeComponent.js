import React from "react";
import CardsDirectory from "./CardsDirectoryComponent";
import HrLine from "./HrCompnent";

function Home(props)    {
    return(
        <React.Fragment>
            <HrLine />
            <CardsDirectory instCards={props.proCards} />
        </React.Fragment>
    );
}

export default Home;