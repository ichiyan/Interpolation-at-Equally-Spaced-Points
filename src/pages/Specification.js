import {React, forwardRef} from "react";

const Specification = ({}, ref) => {
    return(
        <div className="container pt-3">
            <h2 ref={ref}>Specification</h2>
            <ul>
                <li>Inputs for initial value of x, number of x values, difference between x values, and y values can be any rational number.</li>
                <li>Inputs for the expression are valid so long as they follow Math JS expression syntax: </li>
                <li>Float precision...</li>
                <li>Accuracy...</li>
            </ul>
        </div>
    )
}

export default forwardRef(Specification);