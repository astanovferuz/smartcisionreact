import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Col, ButtonGroup } from "reactstrap";
import DecCom from "./DecCom";
import { DECISIONS } from "../shared/decisions";
import "../coreapplogicstyles/demopage.css"

class Demo extends Component    {
    constructor(props)  {
        super(props);
        
        this.state = {
            isModalOpen: false,
            id: null,
            decTitle: "",
            decProblem: "",
            decPriority: "",
            decSolution: "",
            decisions: DECISIONS,
            editMode: false
        }


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleDeleteDec = this.handleDeleteDec.bind(this);
        this.editDecision = this.editDecision.bind(this);
        this.switchEditMode = this.switchEditMode.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleEdit(e)   {
        e.preventDefault();

        const decs = [...this.state.decisions];
        let index = decs.findIndex(dec => dec.id === this.state.id);
        decs[index] = {
            id: this.state.id,
            decTitle: this.state.decTitle,
            decProblem: this.state.decProblem,
            decPriority: this.state.decPriority,
            decSolution: this.state.decSolution
        }
        this.setState({...this.state, decisions: decs});
        console.log(this.state.decisions)
    }

    switchEditMode()    {
        this.setState({
            editMode: true
        });
    }

    editDecision(decision)  {
        this.toggleModal();
        this.setState({
            id: decision.id,
            decTitle: decision.decTitle,
            decProblem: decision.decProblem,
            decPriority: decision.decPriority,
            decSolution: decision.decSolution
        });
        
    }

    handleDeleteDec(id) {
        const filteredDecs = this.state.decisions.filter(decision => {return(decision.id !== id)});
        this.setState({
            decisions: filteredDecs
        });
    }

    toggleModal()   {
        this.setState({isModalOpen: !this.state.isModalOpen});
    }

    handleClick(e)  {
        const value = e.target.value
        e.preventDefault();
        this.setState( state => ({
            ...this.state, decPriority: value
        }));
    }

    handleChange(e) {
        const target = e.target;
        const name = target.name;
        const value = target.value;

        this.setState({...this.state,
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const newDec = {
            decTitle: this.state.decTitle,
            decProblem: this.state.decProblem,
            decPriority: this.state.decPriority,
            decSolution: this.state.decSolution,
            id: this.state.decisions.length + 1
        }

        this.setState(state => ({
            decTitle: "",
            decProblem: "",
            decPriority: "",
            decSolution: "",
            decisions: this.state.decisions.concat(newDec)
        }));
    }

    render()    {
        return(
                <div className="container-fluid stripe-z">
                    <div className="row">
                        <div className="col-md-6 mar-y decisionCol">
                            <h2 className="text-center text-white gray-box py-2">Decisions</h2>
                        </div>
                        <div className="col-md-6 mar-y decisionCol">
                            <Button onClick={this.toggleModal} size="lg" className="addDecButton btn-yellow addDecButton-btn-scale col-md-12"><i className="fa fa-plus fa-lg text-black" /></Button>
                        </div>
                    </div>
                    <DecCom decisions={this.state.decisions}
                            handleDeleteDec={this.handleDeleteDec}
                            editDecision={this.editDecision}
                            editMode={this.switchEditMode}
                    />
                    
                    <React.Fragment>
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} size="lg">
                        <ModalHeader className="btn-yellow border-bottom-0" toggle={this.toggleModal}>{this.state.editMode ? "Edit The Decision" : "Create a new decision"}</ModalHeader>
                        <ModalBody className="modalBodyColor">
                            <Form onSubmit={ this.state.editMode ? this.handleEdit : this.handleSubmit}>
                                <FormGroup row>
                                    <Label md={4} htmlFor="decTitle" className="pt-0 text-white">Decision Name</Label>
                                    <Col>
                                    <Input
                                        className="form-control-custom"
                                        md={8}
                                        type="text"
                                        name="decTitle" 
                                        id="decTitle" 
                                        placeholder="Please name your decision" 
                                        onChange={this.handleChange}
                                        value={this.state.decTitle}
                                        autoComplete="off"
                                    />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label md={4} htmlFor="decBody" className="pt-0 text-white">Problem</Label>
                                    <Col md={8}>
                                    <Input 
                                        className="form-control-custom"
                                        type="textarea" 
                                        name="decProblem" 
                                        id="decProblem" 
                                        placeholder="Please describe your problem" 
                                        onChange={this.handleChange}
                                        value={this.state.decProblem}
                                        autoComplete="off"
                                    />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label md={4} htmlFor="decSolution" className="pt-0 text-white">Solution</Label>
                                    <Col md={8}>
                                    <Input 
                                        className="form-control-custom"
                                        type="textarea" 
                                        name="decSolution" 
                                        id="decSolution" 
                                        placeholder="Please write your solution" 
                                        onChange={this.handleChange}
                                        value={this.state.decSolution}
                                        autoComplete="off"
                                    />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label md={4} htmlFor="decPriority" className="pt-0 text-white">Decision Priority</Label>
                                    <Col md={8}>
                                        <ButtonGroup size="sm">
                                            <Button
                                            type="radio"
                                            onClick={this.handleClick}
                                            className="btn-success"
                                            name="decPriority"
                                            value="low">
                                            Low
                                            </Button>
                                            <Button
                                            type="radio"
                                            onClick={this.handleClick}
                                            className="btn-yellow text-black"
                                            name="decPriority"
                                            value="mid">
                                            Mid
                                            </Button>
                                            <Button 
                                            type="radio"
                                            onClick={this.handleClick}
                                            className="btn-danger"
                                            name="decPriority"
                                            value="high">
                                            High
                                            </Button>
                                        </ButtonGroup>
                                    </Col>
                                </FormGroup>
                                <Button onClick={() => {
                                    this.toggleModal();
                                    }} type="submit" className="btn-yellow text-black" value="submit">{this.state.editMode ? "Update" : "Submit"}</Button>
                            </Form>
                        </ModalBody>
                    </Modal>
                    </React.Fragment>
                </div>
        );
    }
}

export default Demo;