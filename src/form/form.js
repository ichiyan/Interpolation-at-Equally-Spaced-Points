import React from 'react';
import CalculatedAnswers from "./answers";
import ReactDOM from 'react-dom';
// import { Equation, EquationEvaluate, EquationContext, EquationOptions, defaultErrorHandler } from 'react-equation'
// import { defaultVariables, defaultFunctions } from 'equation-resolver'
import MathJax from 'react-mathjax2';

export default class InputForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            given: {
                x0: props.x0,
                y0: props.y0,
                x1: props.x1,
                y1: props.y1,
                degree: props.degree
            }
        }
    }

    handleX0Changed(event) {
        var given        = this.state.given;
        given.x0  = event.target.value;
        const re = /^[0-9\b]+$/;
        if (event.target.value === '' || re.test(event.target.value)) {
            this.setState({given: given});
        }else{
            console.log("⛔️ Input is not a valid number")
        }
    }

    handleY0Changed(event) {
        var given        = this.state.given;
        given.y0  = event.target.value;
        const re = /^[0-9\b]+$/;
        if (event.target.value === '' || re.test(event.target.value)) {
            this.setState({given: given});
        }else{
            console.log("⛔️ Input is not a valid number")
        }
    }

    handleX1Changed(event) {
        var given      = this.state.given;
        given.x1 = event.target.value;
        const re = /^[0-9\b]+$/;
        if (event.target.value === '' || re.test(event.target.value)) {
            this.setState({given: given});
        }else{
            console.log("⛔️ Input is not a valid number")
        }
    }

    handleY1Changed(event) {
        var given      = this.state.given;
        given.y1 = event.target.value;
        const re = /^[0-9\b]+$/;
        if (event.target.value === '' || re.test(event.target.value)) {
            this.setState({given: given});
        }else{
            console.log("⛔️ Input is not a valid number")
        }
    }

    handleDegreeChanged(event) {
        var given    = this.state.given;
        given.degree = event.target.value;
        const re = /^[0-9\b]+$/;
        if (event.target.value === '' || re.test(event.target.value)) {
            this.setState({given: given});
        }else{
            console.log("⛔️ Input is not a valid number")
        }
    }

    handleButtonClicked() {
        console.log(this.state.given);
        this.calculate();
    }

    calculate(){
        // var ans: {delta_x: 0, f_i: 0, f_i-1: 0, f_1+1: 0};
        let delta_x = this.state.given.x1 - this.state.given.x0;
        console.log(delta_x);
    }

    render() {
        return (
            <div>
                {/*<CalculatedAnswers*/}
                {/*    delta_x={this.state.given.x1 - this.state.given.x0}*/}
                {/*/>*/}
                {/*<EquationContext render={(equation) => (*/}
                {/*    <>*/}
                {/*        {equation('a = 2')} Renders a = 2 and defines a*/}
                {/*        {equation('b = 5a =')} Renders b = 5a = 10 and defines b*/}
                {/*        {equation('c = 1/b = _ %')} Renders c = 1/b = 10% and defines c*/}
                {/*        {equation('f(x) = x^2')} Renders f(x) = x^2 and defines f(x)*/}
                {/*        {equation('2a + f(a) =')} Renders 2a + f(a) = 8*/}
                {/*    </>*/}
                {/*)} />*/}
                <label>
                    Given:
                </label>
                <p>{this.state.given.x0}</p>
                <p>{this.state.given.x1}</p>
                <p>{this.state.given.degree}</p>
                <hr/>
                <label>
                    x0:
                </label>
                <input type="number" value={this.state.given.x0} onChange={this.handleX0Changed.bind(this)}/>
                <br/>
                <label>
                    y0:
                </label>
                <input type="number" value={this.state.given.y0} onChange={this.handleY0Changed.bind(this)}/>
                <br/>
                <label>
                    x1:
                </label>
                <input type="number" value={this.state.given.x1} onChange={this.handleX1Changed.bind(this)}/>
                <br/>
                <label>
                    x1:
                </label>
                <input type="number" value={this.state.given.y1} onChange={this.handleY1Changed.bind(this)}/>
                <br/>
                <label>
                    Degree:
                </label>
                <input type="number" value={this.state.given.degree} onChange={this.handleDegreeChanged.bind(this)}/>
                <br/>
                <hr/>
                <button onClick={this.handleButtonClicked.bind(this)}>
                    Calculate
                </button>
            </div>
        );
    }
}