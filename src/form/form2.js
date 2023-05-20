// import React, { useState } from 'react';
// import CalculatedAnswers from "./answers";
// import { useState } from 'react';
// import ReactDOM from 'react-dom';
// import { Equation, EquationEvaluate, EquationContext, EquationOptions, defaultErrorHandler } from 'react-equation';
// import { defaultVariables, defaultFunctions } from 'equation-resolver';
// import MathJax from 'react-mathjax2';
//
// function Points({ value_x, value_y, handleX0Changed, handleY0Changed }) {
//
//     return (
//         <div>
//             <label> x: </label>
//             <input type="number" value={value_x} onChange={handleX0Changed.bind(this)}/>
//             <br/>
//             <label> y: </label>
//             <input type="number" value={value_y} onChange={handleY0Changed.bind(this)}/>
//             <br/>
//         </div>
//     )
// }
//
// function Display({}) {
//
//     function handleX0Changed(event) {
//         var given        = this.state.given;
//         given.x0  = event.target.value;
//         const re = /^[0-9\b]+$/;
//         if (event.target.value === '' || re.test(event.target.value)) {
//             this.setState({given: given});
//         }else{
//             console.log("⛔️ Input is not a valid number")
//         }
//     }
//
//     function handleY0Changed(event) {
//         var given        = this.state.given;
//         given.y0  = event.target.value;
//         const re = /^[0-9\b]+$/;
//         if (event.target.value === '' || re.test(event.target.value)) {
//             this.setState({given: given});
//         }else{
//             console.log("⛔️ Input is not a valid number")
//         }
//     }
//
//     function handleClick(i) {
//
//     }
//
//
//     return (
//         <div>
//             <CalculatedAnswers
//                 delta_x={x1 - x0}
//             />
//             <label>
//                 Given:
//             </label>
//             <p> test </p>
//             <hr/>
//             <Points
//                 value_x={null}
//                 value_y={null}
//
//             ></Points>
//             <hr/>
//             <button onClick={this.handleButtonClicked.bind(this)}>
//                 Calculate
//             </button>
//         </div>
//     );
// }
