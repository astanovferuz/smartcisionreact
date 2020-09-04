import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from "reactstrap";
import DecCom from "./DecCom";
import "../coreapplogicstyles/demopage.css"

class Demo extends Component    {
    constructor(props)  {
        super(props);
        
        this.state = {
            isModalOpen: false,
            decTitle: "",
            decBody: "",
            decisions: [
                {
                    id: Date.now(),
                    decTitle: "Fly to Dubai",
                    decBody: "I need to do whatever it takes to succeed and fly to Dubai"
                }
            ]

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal()   {
        this.setState({isModalOpen: !this.state.isModalOpen});
    }

    handleChange(e) {
        const target = e.target;
        const name = target.name;
        const value = target.value;

        this.setState({...this.state,
            [name]: value
        });

        console.log(this.state);
    }

    handleSubmit(e) {
        e.preventDefault();
        const newDec = {
            decTitle: this.state.decTitle,
            decBody: this.state.decBody,
            id: Date.now()
        }

        this.setState(state => ({
            decTitle: "",
            decBody: "",
            decisions: this.state.decisions.concat(newDec)
        }));
        console.log(this.state.decisions);
    }

    render()    {
        return(
                <div className="container-fluid stripe-z">
                    <div className="row">
                        <div className="col-md-6 mar-y decisionCol">
                            <h2 className="text-center text-white gray-box">Decisions</h2>
                            <DecCom decisions={this.state.decisions} />
                        </div>
                        <div className="col-md-6 mar-y d-flex justify-content-center">
                            <Button onClick={this.toggleModal} color="warning" size="lg" className="roundButton btn-yellow roundButton-scale"><i className="fa fa-plus fa-lg" /></Button>
                            {/* <form onSubmit={this.handleSubmit}>
                                <input
                                    type="text"
                                    name="decTitle"
                                    value={this.state.decTitle}
                                    onChange={this.handleChange}
                                    placeholder="Decision title" 
                                />
                                <input
                                    type="text"
                                    name="decBody"
                                    value={this.state.decBody}
                                    onChange={this.handleChange}
                                    placeholder="Decision description" 
                                />
                                <button type="submit">Add Decision</button>
                            </form> */}
                        </div>
                    </div>
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Create a new decision</ModalHeader>
                        <ModalBody>
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup>
                                    <Label htmlFor="decTitle">Decision Name</Label>
                                    <Input 
                                        type="text" 
                                        name="decTitle" 
                                        id="decTitle" 
                                        placeholder="Please name your decision" 
                                        onChange={this.handleChange}
                                        value={this.state.decTitle}
                                        autoComplete="off"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="decBody">Desision Details</Label>
                                    <Input 
                                        type="text" 
                                        name="decBody" 
                                        id="decBody" 
                                        placeholder="Please describe your decision" 
                                        onChange={this.handleChange}
                                        value={this.state.decBody}
                                        autoComplete="off"
                                    />
                                </FormGroup>
                                <Button onClick={this.toggleModal} type="submit" className="btn-yellow" value="submit">Submit</Button>
                            </Form>
                        </ModalBody>
                    </Modal>
                </div>
        );
    }
}

export default Demo;