import {React, forwardRef} from "react";

const Specification = ({}, ref) => {
    return(
        <div className="container pt-3">
            <h2 ref={ref}>Specifications</h2>
            <br></br>
            <ul className="specifications">
                <li>Inputs for initial value of x, number of x values, difference between x values, and y values can be any rational number (not in fraction form).</li>
                <li>Inputs for the expression are valid so long as they are mathematical, the unknown variable is x and only x, and they follow the <a href="https://mathjs.org/docs/expressions/syntax.html" target="_blank">Math JS expression syntax</a>.
                </li>
                <li>Float precision...</li>
                <li>Accuracy...</li>
            </ul>
        </div>
    )
}

export default forwardRef(Specification);