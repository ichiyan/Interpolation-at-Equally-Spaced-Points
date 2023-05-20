import {React, forwardRef} from "react";

const Introduction = ({}, ref) => {
    return(
        <div className="container">
            <h2 ref={ref}>Introduction</h2>
            <br></br>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
        </div>
    )
}

export default forwardRef(Introduction);