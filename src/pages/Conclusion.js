import {React, forwardRef} from "react";

const Conclusion = ({}, ref) => {
    return(
        <div className="container pt-3">
            <h2 ref={ref}>Conclusion</h2>
        </div>
    )
}

export default forwardRef(Conclusion);