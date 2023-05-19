import {React, forwardRef} from "react";

const Specification = ({}, ref) => {
    return(
        <div className="container pt-3">
            <h2 ref={ref}>Specification</h2>
        </div>
    )
}

export default forwardRef(Specification);