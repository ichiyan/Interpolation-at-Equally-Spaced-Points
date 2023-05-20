import React from 'react';
import {useState} from 'react';
import CalculatedAnswers from "./answers";
import ReactDOM from 'react-dom';
import {simplify, parse, derivative, forEach, factorial} from "mathjs";
import {create, all } from 'mathjs'

const config = { }
const math = create(all, config)

export default class InputForm2 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            given: {
                x0: props.x0,
                delta_x: props.delta_x,
                degree: props.degree,
                equation: props.equation
            },
            answers: {
                x_vals: props.x_vals,
                f_vals: props.f_vals,
                simplified: props.simplified,
                pn: props.pn
            }
        }
    }

    handleX0Changed(event) {
        let given        = this.state.given;
        given.x0  = event.target.value;
        const re = /^[0-9\b]+$/;
        if (event.target.value === '' || re.test(event.target.value)) {
            this.setState({given: given});
        }else{
            console.log("⛔️ Input is not a valid number")
        }
    }

    handleDXChanged(event) {
        let given      = this.state.given;
        given.delta_x = event.target.value;
        const re = /^[0-9\b]+$/;
        if (event.target.value === '' || re.test(event.target.value)) {
            this.setState({given: given});
        }else{
            console.log("⛔️ Input is not a valid number")
        }
    }

    handleDegreeChanged(event) {
        let given    = this.state.given;
        given.degree = event.target.value;
        const re = /^[0-9\b]+$/;
        if (event.target.value === '' || re.test(event.target.value)) {
            this.setState({given: given});
        }else{
            console.log("⛔️ Input is not a valid number")
        }
    }

    handleEqChanged(event) {
        let given    = this.state.given;
        given.equation = event.target.value;
        this.setState({given: given});
    }

    handleButtonClicked() {
        console.log(this.state.given);
        this.calculate();
    }

    find_s(s){ //calculates  s = (x-x0)/delta_x
        let temp_s = s
        for (let i = 1; i < this.state.given.degree; i++){
            temp_s = temp_s * (s-i)
        }
        return temp_s
    }

    // factorial_n(n){
    //     let f = 1
    //     for (let i = 2; i <= n; i++){
    //         f *= i
    //     }
    //     return f
    // }

    populate_x(n){
        let x = []
        let temp = Number(this.state.given.x0)
        let delta_x = Number(this.state.given.delta_x)
        let answer    = this.state.answers

        x.push(temp)
        for (let i = 1; i <= n; i++){
            temp = temp + delta_x
            x.push(temp)
        }
        answer.x_vals = x
    }

    populate_y(){
        let y = []
        let answer    = this.state.answers
        let temp = 0
        let max = Number(this.state.given.degree)
        max= max + 1
        let x_values = this.state.answers.x_vals
        console.log(x_values)

        for(let i=0; i<=max; i++){
            temp = this.state.answers.simplified.evaluate({x:x_values[i]})
            console.log(temp)
            y.push(temp)
        }

        answer.f_vals = y
    }

    calc_forward_difference(){
        let diff = math.matrix()
        let n = Number(this.state.given.degree)
        let temp = 0
        diff.resize([(n+1), (n+1)])

        for(let ndx=0; ndx<=n; ndx++){
            diff.set([ndx, 0], this.state.answers.f_vals[ndx])
        }
        console.log(diff)
        for (let i=1; i<n; i++){
            for(let j = n-1; j>=i; j--){
                temp = diff.get([j, (i-1)]) - diff.get([(j-1), (i-1)])
                diff.set([j, i], temp)
            }
        }
        console.log(diff)
    }

    calculate(){
        let answer    = this.state.answers
        let eq_sim = simplify(this.state.given.equation)

        answer.simplified = eq_sim
        this.setState({answers: answer})

        console.log(this.state.answers);
        console.log("Simplified Equation:  " + eq_sim.toString())
        console.log("f0:  " + eq_sim.evaluate({x:this.state.given.x0}))
        console.log(factorial(this.state.given.degree))

        this.populate_x(this.state.given.degree)
        this.populate_y()
        console.log(this.state.answers)

    }

    render() {
        return (
            <div>
                {/*<CalculatedAnswers*/}
                {/*    delta_x={this.state.given.x1 - this.state.given.x0}*/}
                {/*/>*/}
                <hr/>
                <label>
                    First Point:
                </label>
                <input type="number" value={this.state.given.x0} onChange={this.handleX0Changed.bind(this)}/>
                <br/>
                <label>
                    Difference between x points:
                </label>
                <input type="number" value={this.state.given.delta_x} onChange={this.handleDXChanged.bind(this)}/>
                <br/>
                <label>
                    Degree:
                </label>
                <input type="number" value={this.state.given.degree} onChange={this.handleDegreeChanged.bind(this)}/>
                <br/>
                <label>
                    Equation: [use x as the variable]
                </label>
                <input type="text" value={this.state.given.equation} onChange={this.handleEqChanged.bind(this)}/>
                <br/>
                <button onClick={this.handleButtonClicked.bind(this)}>
                    Calculate
                </button>
                <br/><hr/>
                <label>
                    Given:
                </label>
                <ul>
                    <li>x0 = {this.state.given.x0}</li>
                    <li>delta x = {this.state.given.delta_x}</li>
                    <li>n = {this.state.given.degree}</li>
                    <li>equation : {this.state.given.equation}</li> {/*needs a package to display equation neatly*/}
                </ul>

                <hr/>
            </div>
        );
    }
}