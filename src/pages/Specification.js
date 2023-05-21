import {React, forwardRef} from "react";
import Equation from "./Equation";

const Specification = ({}, ref) => {
    return(
        <div className="container pt-3">
            <h2 ref={ref}>Specifications</h2>
            <br></br>
            <ul className="specifications">
                <li>The calculator outputs an interpolating polynomial only of degree <Equation math="n"/> where <Equation math="n"/> is one less than the number of points. </li>
                <li>The initial value of x, the difference between x values, and the y values must be a rational number (not in fraction form).</li>
                <li>The number of x values must be a positive integer.</li>
                <li>Inputs for the expression are valid so long as they are mathematical, the unknown variable is x and only x, and they follow the <a href="https://mathjs.org/docs/expressions/syntax.html" target="_blank">Math JS expression syntax</a>.</li>
                <li>The computations are done using floating point numbers with a limited precision of 64 bits (approx. 16 decimal digits). Values that exceed this limit will suffer from round-off errors during calculation.</li>
                <li>The interpolating polynomial may not be in its simplest form.</li>
            </ul>
        </div>
    )
}

export default forwardRef(Specification);