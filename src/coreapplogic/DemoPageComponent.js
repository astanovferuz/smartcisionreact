import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Col, ButtonGroup } from "reactstrap";
import DecCom from "./DecCom";
import { DECISIONS } from "../shared/decisions";
import ReactStars from "react-rating-stars-component";
import Archive from "../components/ArchiveComponent";
import "../coreapplogicstyles/demopage.css"


class Demo extends Component    {
    constructor(props)  {
        super(props);
        
        this.state = {
            isArchiveOn: false,
            isEvaModalOpen: false,
            isModalOpen: false,
            id: null,
            decSatisfied: null,
            decSolved: null,
            decDiff: null,
            decDiffExplain: "",
            rating: 0,
            decTitle: "",
            decProblem: "",
            decPriority: "",
            decSolution: "",
            yesSatisfied: "",
            noSatisfied: "",
            decisions: DECISIONS,
            arcDecs: [{
                id: Date.now(),
                decTitle: "My evaluated decision",
                decProblem: "Some problem I described",
                decPriority: "high",
                decSolution: "Some random solution",
                decSatisfied: "yes",
                decSolved: "yes",
                decDiff: "yes",
                decDiffExplain: "nothing to explain",
                rating: 5
            }],
            editMode: false,
            touched: {
                decTitle: false,
                decProblem: false,
                decPriority: false,
                decSolution: false,
                yesSatisfied: false,
                noSatisfied: false
            }
        }


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleDeleteDec = this.handleDeleteDec.bind(this);
        this.editDecision = this.editDecision.bind(this);
        this.switchEditMode = this.switchEditMode.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.resetModal = this.resetModal.bind(this);
        this.toggleEvaModal = this.toggleEvaModal.bind(this);
        this.setDecSat = this.setDecSat.bind(this);
        this.decSatNull = this.decSatNull.bind(this);
        this.ratingChanged = this.ratingChanged.bind(this);
        this.scrollToArc = React.createRef();
        this.scrolltoDec = React.createRef();
        this.handleArcClick = this.handleArcClick.bind(this);
        this.setArcOnTrue = this.setArcOnTrue.bind(this);
        this.handleDecClick = this.handleDecClick.bind(this);
        this.handleEvaluateSubmit = this.handleEvaluateSubmit.bind(this);
        this.getEvaluatedDecision = this.getEvaluatedDecision.bind(this);
    }

    getEvaluatedDecision(decision)  {
        this.setState({
            id: decision.id,
            decTitle: decision.decTitle,
            decProblem: decision.decProblem,
            decPriority: decision.decPriority,
            decSolution: decision.decSolution
        });
        console.log(this.state);
    }

    handleEvaluateSubmit(e) {
        e.preventDefault();
        const arcDec = {
            id: Date.now(),
            decTitle: this.state.decTitle,
            decProblem: this.state.decProblem,
            decPriority: this.state.decPriority,
            decSolution: this.state.decSolution,
            decSatisfied: this.state.decSatisfied,
            decSolved: this.state.decSolved,
            decDiff: this.state.decDiff,
            decDiffExplain: this.state.decDiffExplain,
            rating: this.state.rating

        }

        this.setState(state => ({
            isArchiveOn: false,
            isEvaModalOpen: false,
            isModalOpen: false,
            id: null,
            decSatisfied: null,
            decSolved: null,
            decDiff: null,
            decDiffExplain: "",
            rating: 0,
            decTitle: "",
            decProblem: "",
            decPriority: "",
            decSolution: "",
            yesSatisfied: "",
            noSatisfied: "",
            decisions: DECISIONS,
            editMode: false,
            touched: {
                decTitle: false,
                decProblem: false,
                decPriority: false,
                decSolution: false,
                yesSatisfied: false,
                noSatisfied: false
            },
            arcDecs: this.state.arcDecs.concat(arcDec)
        }));

        console.log(this.state.arcDecs)
    }

    setArcOnTrue()  {
        this.setState({
            isArchiveOn: true
        });
    }

    handleDecClick(e)   {
        if(this.scrolltoDec.current)    {
            this.scrolltoDec.current.scrollIntoView({
                behavior: "smooth"
            })
        }
    }

    handleArcClick(e)   {
        if(this.scrollToArc.current)    {
            this.scrollToArc.current.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            });
        }
    }

    ratingChanged(newRating)    {
        this.setState({
            rating: newRating
        });
        console.log(this.state.rating)
    }

    handleBlur = (field) => () =>   {
        this.setState({
            touched: {...this.state.touched, [field]: true}
        });
        console.log(this.state.touched.yesSatisfied)
    }

    decSatNull()    {
        this.setState({
            ...this.state, 
            decSatisfied: null,
            decSolved: null,
            decDiff: null,
            decDiffExplain: ""
        })
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
        this.setState({...this.state,
            editMode: false,
            id: null,
            decTitle: "",
            decProblem: "",
            decPriority: "",
            decSolution: "", 
            decisions: decs});
        console.log(this.state.decisions)
    }

    resetModal()    {
        this.setState({
            ...this.state,
            isEvaModelOpen: false,
            isModalOpen: false,
            id: null,
            decTitle: "",
            decProblem: "",
            decPriority: "",
            decSolution: "",
            editMode: false
        })
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

    toggleEvaModal()    {
        this.setState({isEvaModalOpen: !this.state.isEvaModalOpen});
    }

    setDecSat(e)  {
        const value = e.target.value
        const name = e.target.name
        this.setState( state => ({
            ...this.state, [name]: value
        }));
        console.log(this.state.decDiff)
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
        console.log(this.state.decDiffExplain)
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
                <div ref={this.scrolltoDec} className="container-fluid stripe-z">
                    <div className="row">
                        <div className="col mt-3"><Button className="addDecButton btn btn-info col-md-12 fontBold text-black">Decisions</Button></div>
                        <div className="col mt-3"><Button onMouseOver={this.setArcOnTrue} onClick={this.handleArcClick} className="addDecButton btn btn-info col-md-12 fontBold text-black">Archived Decisions</Button></div>
                        <div className="col mt-3"><Button className="addDecButton btn btn-info col-md-12 fontBold text-black">Filtered Decisions</Button></div>
                    </div>
                    <div className="row pt-0">
                        <div className="col-md-6 mar-y decisionCol">
                            <h2 className="text-center text-white gray-box py-2">Decisions</h2>
                        </div>
                        <div className="col-md-6 mar-y decisionCol">
                            <Button onClick={() => {
                                this.resetModal();
                                this.toggleModal();
                            }} size="lg" className="addDecButton btn-yellow addDecButton-btn-scale col-md-12"><i className="fa fa-plus fa-lg text-black" /></Button>
                        </div>
                    </div>
                    <DecCom decisions={this.state.decisions}
                            handleDeleteDec={this.handleDeleteDec}
                            editDecision={this.editDecision}
                            editMode={this.switchEditMode}
                            toggleEvaModal={this.toggleEvaModal}
                            getEvaluatedDecision={this.getEvaluatedDecision}
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

                    <React.Fragment>
                        <Modal onClosed={this.decSatNull} isOpen={this.state.isEvaModalOpen} toggle={this.toggleEvaModal} size="lg">
                            <ModalHeader className="btn-yellow border-bottom-0" toggle={this.toggleEvaModal}>Evaluate Decision</ModalHeader>
                            <ModalBody className="modalBodyColor">
                                <Form onSubmit={this.handleEvaluateSubmit}>
                                    <FormGroup row>
                                        <Label className="text-white" md={7} htmlFor="decSatisfied" check>Are you satisfied with your decision?</Label>
                                        <Col className="align-self-center" md={2}>
                                            <Input className="mr-0" onClick={this.setDecSat} value="yes" name="decSatisfied" type="radio" /><span className="text-white">Yes</span>
                                        </Col>
                                        <Col className="align-self-center" md={2}>
                                            <Input onClick={this.setDecSat} value="no" name="decSatisfied" type="radio" /><span className="text-white">No</span>
                                        </Col>
                                    </FormGroup>
                                    { this.state.decSatisfied === "yes" || this.state.decSatisfied === "no" ? <FormGroup row>
                                        <Label className="text-white" md={7} htmlFor="yesSatisfied">Were you able to solve your problem with this decision?</Label>
                                        <Col className="align-self-center" md={2}>
                                            <Input className="mr-0" onClick={this.setDecSat} value="yes" name="decSolved" type="radio" /><span className="text-white">Yes</span>
                                        </Col>
                                        <Col className="align-self-center" md={2}>
                                            <Input onClick={this.setDecSat} value="no" name="decSolved" type="radio" /><span className="text-white">No</span>
                                        </Col>
                                    </FormGroup> : <div /> }
                                    { this.state.decSolved === "yes" || this.state.decSolved === "no"  ? <FormGroup row>
                                        <Label className="text-white" md={7} htmlFor="decDiff">Is there anything you would have done differently?</Label>
                                        <Col className="align-self-center" md={2}>
                                            <Input className="mr-0" onClick={this.setDecSat} value="yes" name="decDiff" type="radio" /><span className="text-white">Yes</span>
                                        </Col>
                                        <Col className="align-self-center" md={2}>
                                            <Input onClick={this.setDecSat} value="no" name="decDiff" type="radio" /><span className="text-white">No</span>
                                        </Col>
                                    </FormGroup> : <div /> }
                                    { this.state.decDiff === "yes" || this.state.decDiff === "no" ? <FormGroup row>
                                        <Label className="text-white" md={7} htmlFor="decDiffExplain">Please explain</Label>
                                        <Col className="pl-0">
                                            <Input value={this.state.decDiffExplain} onChange={this.handleChange} className="form-control-custom" type="textarea" name="decDiffExplain" placeholder="Provide a detailed explanation"/>
                                        </Col>
                                    </FormGroup> : <div /> }
                                    { this.state.decDiff === "yes" || this.state.decDiff === "no" ? <FormGroup row>
                                        <Label className="text-white" md={7} htmlFor="rating">Please rate your decision</Label>
                                        <Col className="pl-0">
                                        <ReactStars
                                            count={5}
                                            onChange={this.ratingChanged}
                                            size={30}
                                            activeColor="#ffd700"
                                        />
                                        </Col>
                                    </FormGroup> : <div /> }
                                    { this.state.decSatisfied !== null && 
                                      this.state.decSolved !== null && 
                                      this.state.decDiff !== null && 
                                      this.state.rating !== 0 ? 
                                      <Button className="btn-yellow text-black">Archive Decision</Button> : 
                                      <Button disabled >Archive Decision</Button>}
                                </Form>
                            </ModalBody>
                        </Modal>
                    </React.Fragment>
                    <div>
                        { this.state.isArchiveOn ? 
                        <div>
                        <div className="row">
                        <div className="col mt-3"><Button onClick={this.handleDecClick} className="addDecButton btn btn-info col-md-12 fontBold text-black">Decisions</Button></div>
                        <div className="col mt-3"><Button onMouseOver={this.setArcOnTrue} onClick={this.handleArcClick} className="addDecButton btn btn-info col-md-12 fontBold text-black">Archived Decisions</Button></div>
                        <div className="col mt-3"><Button className="addDecButton btn btn-info col-md-12 fontBold text-black">Filtered Decisions</Button></div>
                        </div>
                        <div ref={this.scrollToArc} className="row">
                        <div className="col-12">
                            <Archive arcDecs={this.state.arcDecs} />
                        </div>
                        </div>
                        </div> : 
                        <div />}
                    </div>
                </div>
        );
    }
}

export default Demo;