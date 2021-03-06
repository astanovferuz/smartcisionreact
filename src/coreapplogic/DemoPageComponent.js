import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Col, ButtonGroup, FormFeedback } from "reactstrap";
import DecCom from "./DecCom";
import { DECISIONS } from "../shared/decisions";
import { ARCDECS } from "../shared/arcdecs"
import ReactStars from "react-rating-stars-component";
import Archive from "../components/ArchiveComponent";
import EvaDec from "./EvaMyDecMakingComponent";
import "../coreapplogicstyles/demopage.css"
import { motion } from "framer-motion";


class Demo extends Component    {
    constructor(props)  {
        super(props);
        
        this.state = {
            evaDecFilter: false,
            isArchiveOn: false,
            isEvaModalOpen: false,
            isModalOpen: false,
            id: null,
            decSatisfied: null,
            decSolved: null,
            decDiff: null,
            progressBarValue: 0,
            decDiffExplain: "",
            rating: 0,
            decTitle: "",
            decProblem: "",
            decPriority: "",
            decSolution: "",
            yesSatisfied: "",
            noSatisfied: "",
            decisions: DECISIONS,
            arcDecs: ARCDECS,
            editMode: false,
            touched: {
                decTitle: false,
                decProblem: false,
                decPriority: false,
                decSolution: false,
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
        this.setEvaDecTrue = this.setEvaDecTrue.bind(this);
    }

    handleBlur = (field) => () =>   {
        this.setState({
            touched: {...this.state.touched, [field]: true}
        });
    }
    
    validate(decTitle, decProblem, decSolution, decPriority)  {
        const errors = {
            decTitle: "",
            decProblem: "",
            decSolution: "",
            decPriority: ""
        }

        if (this.state.touched.decTitle)   {
            if (decTitle.length < 10)   {
                errors.decTitle = "Decision title must be at least 10 characters."
            } 
        }

        if (this.state.touched.decProblem)    {
            if (decProblem.length < 10)   {
                errors.decProblem = "Decision problem must be at least 10 characters."
            }  
        }

        if(this.state.touched.decSolution)  {
            if(decSolution.length < 10)  {
                errors.decSolution = "Decision solution must be at least 10 characters."
            }
        }

        if(this.state.touched.decProblem)   {
            if(decPriority)    {
                errors.decPriority = "Please set your decision priority"
            }
        }

        return errors;
    }


    setEvaDecTrue() {
        this.setState({
            evaDecFilter: true,
            setArcOnTrue: false
        });
    }

    getEvaluatedDecision(decision)  {
        this.setState({
            id: decision.id,
            decTitle: decision.decTitle,
            decProblem: decision.decProblem,
            decPriority: decision.decPriority,
            decSolution: decision.decSolution,
            progressBarValue: 0
        });
        console.log(this.state);
    }

    handleEvaluateSubmit(e) {
        e.preventDefault();
        const decToBeDel = this.state.decisions.filter(decision => decision.id === this.state.id)[0];
        const newDecs = this.state.decisions.filter(decision => decision.id !== decToBeDel.id);
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
            progressBarValue: 0,
            decDiffExplain: "",
            rating: 0,
            decTitle: "",
            decProblem: "",
            decPriority: "",
            decSolution: "",
            yesSatisfied: "",
            noSatisfied: "",
            decisions: newDecs,
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
            isArchiveOn: true,
            evaDecFilter: false
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
        this.setState({
            isArchiveOn: true,
            evaDecFilter: false
        })
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
            editMode: false,
            touched: {
                decTitle: "",
                decProblem: "",
                decPriority: "",
                decSolution: ""
            }
        });

        console.log(this.state)
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
        console.log("decSatisfied" + this.state.decSatisfied)
        console.log("decSolved" + this.state.decSolved)
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
            id: Date.now()
        }

        this.setState(state => ({
            id: null,
            decTitle: "",
            decProblem: "",
            decPriority: "",
            decSolution: "",
            decisions: this.state.decisions.concat(newDec)
        }));
    }

    render()    {

        const errors = this.validate(this.state.decTitle, this.state.decProblem, this.state.decSolution, this.state.decPriority);
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
                <motion.div exit="out" animate="in" initial="out" variants={pageTransition} ref={this.scrolltoDec} className="container-fluid stripe-z">
                    <div className="row">
                        <div className="col mt-3"><Button className="addDecButton btn navButtons-box col-md-12 fontBold text-black">Current Decisions</Button></div>
                        <div className="col mt-3"><Button onClick={this.handleArcClick} className="addDecButton btn navButtons-box col-md-12 fontBold text-black">Archived Decisions</Button></div>
                    </div>
                    <div className="row pt-0">
                        <div className="col-md-6 mar-y decisionCol">
                            <h2 className="text-center text-white gray-box py-2">Current Decisions</h2>
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
                                        onBlur={this.handleBlur("decTitle")}
                                        invalid={errors.decTitle.length > 0}
                                    />
                                    <FormFeedback>{errors.decTitle}</FormFeedback>
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
                                        onBlur={this.handleBlur("decProblem")}
                                        invalid={errors.decProblem.length > 0}
                                    />
                                    <FormFeedback>{errors.decProblem}</FormFeedback>
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
                                        onBlur={this.handleBlur("decSolution")}
                                        invalid={errors.decSolution.length > 0}
                                    />
                                    <FormFeedback>{errors.decSolution}</FormFeedback>
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
                                            value="low"
                                            onBlur={this.handleBlur("decPriority")}
                                            invalid={errors.decPriority}>
                                            Low
                                            </Button>
                                            <Button
                                            type="radio"
                                            onClick={this.handleClick}
                                            className="btn-yellow text-black"
                                            name="decPriority"
                                            value="mid"
                                            onBlur={this.handleBlur("decPriority")}
                                            invalid={errors.decPriority}>
                                            Mid
                                            </Button>
                                            <Button 
                                            type="radio"
                                            onClick={this.handleClick}
                                            className="btn-danger"
                                            name="decPriority"
                                            value="high"
                                            onBlur={this.handleBlur("decPriority")}
                                            invalid={errors.decPriority}>
                                            High
                                            </Button>
                                        </ButtonGroup>
                                        <FormFeedback>{errors.decPriority}</FormFeedback>
                                    </Col>
                                </FormGroup>
                                {this.state.decTitle.length >= 10 && this.state.decProblem.length >10 && this.state.decSolution.length >= 10 && this.state.decPriority !== "" ? 
                                <Button onClick={() => {
                                    this.toggleModal();
                                    }} type="submit" className="btn-yellow text-black" value="submit">{this.state.editMode ? "Update" : "Submit"}
                                </Button> :
                                <Button disabled>Submit</Button>}
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
                                            <Input className="mr-0" onClick={(e) => {this.setDecSat(e)}} value="yes" name="decSatisfied" type="radio" /><span className="text-white">Yes</span>
                                        </Col>
                                        <Col className="align-self-center" md={2}>
                                            <Input onClick={(e) => {this.setDecSat(e)}} value="no" name="decSatisfied" type="radio" /><span className="text-white">No</span>
                                        </Col>
                                    </FormGroup>
                                    { this.state.decSatisfied === "yes" || this.state.decSatisfied === "no" ? <FormGroup row>
                                        <Label className="text-white" md={7} htmlFor="yesSatisfied">Were you able to solve your problem with this decision?</Label>
                                        <Col className="align-self-center" md={2}>
                                            <Input className="mr-0" onClick={(e) => {this.setDecSat(e)}} value="yes" name="decSolved" type="radio" /><span className="text-white">Yes</span>
                                        </Col>
                                        <Col className="align-self-center" md={2}>
                                            <Input onClick={(e) => {this.setDecSat(e)}} value="no" name="decSolved" type="radio" /><span className="text-white">No</span>
                                        </Col>
                                    </FormGroup> : <div /> }
                                    { this.state.decSolved === "yes" || this.state.decSolved === "no"  ? <FormGroup row>
                                        <Label className="text-white" md={7} htmlFor="decDiff">Is there anything you would have done differently?</Label>
                                        <Col className="align-self-center" md={2}>
                                            <Input className="mr-0" onClick={(e) => {this.setDecSat(e)}} value="yes" name="decDiff" type="radio" /><span className="text-white">Yes</span>
                                        </Col>
                                        <Col className="align-self-center" md={2}>
                                            <Input onClick={(e) => {this.setDecSat(e)}} value="no" name="decDiff" type="radio" /><span className="text-white">No</span>
                                        </Col>
                                    </FormGroup> : <div /> }
                                    { this.state.decDiff === "yes" || this.state.decDiff === "no" ? <FormGroup row>
                                        <Label className="text-white" md={7} htmlFor="decDiffExplain">Please explain</Label>
                                        <Col className="pl-0">
                                            <Input value={this.state.decDiffExplain} onChange={(e) => {this.handleChange(e)}} className="form-control-custom" type="textarea" name="decDiffExplain" placeholder="Provide a detailed explanation"/>
                                        </Col>
                                    </FormGroup> : <div /> }
                                    { this.state.decDiff === "yes" || this.state.decDiff === "no" ? <FormGroup row>
                                        <Label className="text-white" md={7} htmlFor="rating">Please rate your decision</Label>
                                        <Col className="pl-0">
                                        <ReactStars
                                            count={5}
                                            onChange={(newRating) => {this.ratingChanged(newRating)}}
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
                        <div className="col mt-3"><Button onClick={this.handleDecClick} className="addDecButton btn navButtons-box col-md-12 fontBold text-black">Current Decisions</Button></div>
                        <div className="col mt-3"><Button onClick={this.handleArcClick} className="addDecButton btn navButtons-box col-md-12 fontBold text-black">Archived Decisions</Button></div>
                        <div className="col mt-3"><Button onClick={this.setEvaDecTrue} className="addDecButton btn navButtons-box col-md-12 fontBold text-black">Evaluate DM Skills</Button></div>
                        </div>
                        <div ref={this.scrollToArc} className="row">
                        { this.state.evaDecFilter ? 
                        
                            <EvaDec decisions={this.state.decisions} arcDecs={this.state.arcDecs} /> : 
                            <div className="col-12">
                                <Archive 
                                    arcDecs={this.state.arcDecs}
                                />
                            </div> }
                        
                        </div>
                        </div> : 
                        <div />}
                    </div>
                </motion.div>
        );
    }
}

export default Demo;