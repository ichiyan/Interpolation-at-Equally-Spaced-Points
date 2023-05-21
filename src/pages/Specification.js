import {React, forwardRef} from "react";

const Specification = ({}, ref) => {
    return(
        <div className="container pt-3">
            <h2 ref={ref}>Specifications</h2>
            <br></br>
            <ul className="specifications">
                <li>Inputs for initial value of x, number of x values, difference between x values, and y values can be any rational number (not in fraction form).</li>
                <li>Inputs for the expression are valid so long as they are mathematical, the unknown variable is x and only x, and they follow 
                    <a href="https://mathjs.org/docs/expressions/syntax.html" target="_blank"> Math JS expression syntax</a>.
                </li>
                <li>Accuracy: The computation is done with Number type variables, which is a floating point number. It has a limited precision of 64 bits [approx. 16 digits]. Values that exceed this limit will suffer from round-off errors during calculation.</li>
            </ul>
        </div>
    )
}

export default forwardRef(Specification);