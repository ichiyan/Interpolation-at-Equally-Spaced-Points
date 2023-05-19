import {React, useState, Fragment, forwardRef, useRef} from "react";
import {useForm} from "react-hook-form";
import Result from "./Result";

const Calculator = ({}, ref) => {

    const {
        register, 
        formState: {errors},
        handleSubmit,
    } = useForm();

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [initX, setInitX] = useState();
    const [numX, setNumX] = useState();
    const [diffX, setDiffX] = useState();
    const [calculateY, setCalculateY] = useState();
    const [expression, setExpression] = useState();

    const onSubmit = (data) => {
        setIsSubmitted(true);
        console.log(data)
        setInitX(data['initX']);
        setNumX(data['numX']);
        setDiffX(data['diffX']);
        setCalculateY(data['calculateY']);
        setExpression(data['expression']);
    }

    return(
        <Fragment>
            <div className="container">
                <h2 ref={ref}>Interpolation at Equally Spaced Points Calculator</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group pt-3 ">
                        <label htmlFor="initialValue">Initial Value for x</label>
                        <input type="" className="form-control" id="initialValue" 
                        {...register("initX", {required: true, pattern: /^[-+]?\d+.?\d*$/})}></input>
                        <error>
                            {errors.initX?.type === "required" && "Initial value for x is required."}
                            {errors.initX?.type === "pattern" && "x should be a positive or negative number."}
                        </error>
                    </div>
                    <div className="form-group pt-3">
                        <label htmlFor="numberValue">Number of x values</label>
                        <input type="number" className="form-control" id="numberValue"
                        {...register("numX", {required: true, pattern: /^\d*[1-9]\d*$/ })}></input>
                        <error>
                            {errors.numX?.type === "required" && "Number of x values is required."}
                            {errors.numX?.type === "pattern" && "Number of x values should be a positive integer."}
                        </error>
                    </div>
                    <div className="form-group pt-3">
                        <label htmlFor="differenceValue">Difference between x values</label>
                        <input type="" className="form-control" id="differenceValue"
                        {...register("diffX", {required: true, pattern: /^[-+]?\d+.?\d*$/})}></input>
                        <error>
                            {errors.diffX?.type === "required" && "Difference between x values is required."}
                            {errors.diffX?.type === "pattern" && "x should be a positive or negative number."}
                        </error>
                    </div>
                    <div className="form-group pt-3">
                        <label htmlFor="simplifyingExpression">Simplifying Expression (f(x))</label>
                        <input type="" className="form-control" id="differenceValue"
                        {...register("expression", {required: true})}></input>
                        <error>
                            {errors.expression?.type === "required" && "Expression is required."}
                        </error>
                    </div>
                    <div className="form-group pt-3">
                        <h5><label htmlFor="calculateY_Value">Calculate y-value at specific x-value</label></h5>
                        <input type="" className="form-control" id="calculateY_Value" placeholder="Optional"
                        {...register("calculateY", {pattern: /^[-+]?\d+.?\d*$/})}></input>
                        <error>
                            {errors.calculateY?.type === "pattern" && "x should be a positive or negative number."}
                        </error>
                    </div>
                    <button type="submit" className="btn btn-primary mt-3 w-100">Calculate</button>
                </form>
            </div>
            <br></br>
            {isSubmitted && <Result initX={initX} numX={numX} diffX={diffX} calculateY={calculateY} expression={expression}/>}
        </Fragment>
    )
}

export default forwardRef(Calculator);