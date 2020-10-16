import React, { Component } from "react";
import { Card, CardImg, CardBody, CardText } from "reactstrap";

class CardsDirectory extends Component{
    render()    {
        const mappedCards = this.props.instCards.map(instCard =>    {
            return(
                <React.Fragment key={instCard.id}>
                    <div className="col-md-6 card-prop mb-4">
                        <Card outline color="primary" className="cardBor-radius scaleCard">
                            <CardImg top src={instCard.proCardImgUrl} alt={instCard.proCardTitle} />
                            <div className="cardTitle text-center mb-0">{instCard.proCardTitle}</div>
                            <CardBody>
                                <CardText>{instCard.proCardPara}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                </React.Fragment>
            )
        })

        return(
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2 className="headline text-center mt-5 mb-4">One of a kind app to refine your decision-making!</h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {mappedCards}
                </div>
            </div>
        )
    }
}
export default CardsDirectory;