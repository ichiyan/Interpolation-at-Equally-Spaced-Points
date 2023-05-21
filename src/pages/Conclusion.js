import {React, forwardRef} from "react";

const Conclusion = ({}, ref) => {
    return(
        <div className="container pt-3">
            <h2 ref={ref}>Conclusion</h2>
            <br></br>
            <p>
                When the x values are equally spaced, an interpolating polynomial, a function
                that passes through all the given points with no regard to the points between them,
                can be successfully derived using the Newton-Gregory forward polynomial approach, as
                demonstrated in this online calculator.
            </p>
        </div>
    )
}

export default forwardRef(Conclusion);