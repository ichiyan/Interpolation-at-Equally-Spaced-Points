import {React, useState, Fragment, forwardRef} from "react";
import {useForm} from "react-hook-form";
import  {parse, evaluate} from 'mathjs';
import Result from "./Result";

const Calculator = ({}, ref) => {

    const {
        register, 
        formState: {errors},
        handleSubmit,
    } = useForm();

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [showInputY, setShowInputY] = useState(true);
    const [showInputExpression, setShowInputExpression] = useState(false);
    const [showYValuesLengthError, setShowYValuesLengthError] = useState(false);
    const [showExpressionError, setShowExpressionError] = useState(false);
    const [expressionErrorMssg, setExpressionErrorMssg] = useState();
    const [method, setMethod] = useState();

    const methodFillYSelected = (method) => {
        if (method == "input-y"){
            setShowInputY(true);
            setShowInputExpression(false);
        }else if(method == "input-expression"){
            setShowInputExpression(true);
            setShowInputY(false);
        }
    }

    const [data, setData] = useState();
    const onSubmit = (inputs) => {
        if(showInputExpression == true){
            try{
                parse(inputs['expression'])
                try{
                    evaluate(['x=1.5', inputs['expression']])
                    console.log(evaluate(['x=1.5', inputs['expression']]))
                    setData({
                        initX: parseFloat(inputs['initX']),
                        numX: parseInt(inputs['numX']),
                        diffX: parseFloat(inputs['diffX']),
                        calculateY: inputs['calculateY'],
                        expression: inputs['expression'],
                    });
                    setMethod(1);
                    setIsSubmitted(true);
                    setShowExpressionError(false);
                }catch(ex){
                    setExpressionErrorMssg("Unknown variable must be x.");
                    setShowExpressionError(true);
                    setIsSubmitted(false);
                }
            }catch(ex){
                setExpressionErrorMssg("Input must be a valid mathematical expression.");
                setShowExpressionError(true);
                setIsSubmitted(false);
            }
        }else if(showInputY == true){
            var yValuesString = inputs['yValues'].replace(/,\s*$/, "");
            var yValues = yValuesString.split(',').map(parseFloat);
            if(yValues.length < parseInt(inputs['numX'])){
                setShowYValuesLengthError(true);
                setIsSubmitted(false);
            }else{
                setData({
                    initX: parseFloat(inputs['initX']),
                    numX: parseInt(inputs['numX']),
                    diffX: parseFloat(inputs['diffX']),
                    // parse calculateY after checking length (see Result component)
                    calculateY: inputs['calculateY'],                   
                    yValues: yValues,
                })
                setMethod(2);
                setIsSubmitted(true);
                setShowYValuesLengthError(false);
            }  
        }
    }
    
    return(
        <Fragment>
            <div className="container">
                <h2 ref={ref}>Interpolation at Equally Spaced Points Calculator</h2>
                <br></br>
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
                        <label htmlFor="methodYValues">Select method of filling in the y values</label>
                        <div className="d-inline-flex w-100 justify-content-between">
                            <button type="button" onClick={() => {methodFillYSelected("input-y")}} className="btn btn-primary mt-3" style={{width: "49%", color: "black"}}>input y values</button>
                            <button type="button" onClick={() => {methodFillYSelected("input-expression")}} className="btn btn-warning mt-3" style={{width: "49%"}}>input expression</button>
                        </div>
                    </div>
                    
                    {
                        showInputY && (
                            <div className="form-group pt-3">
                                <label htmlFor="yValues">List down y values, separated by a comma (no spaces). Excess y values will be removed.</label>
                                <textarea className="form-control" rows={3} placeholder="ex: 1.5,-2,+3,-4.9"
                                {...register("yValues", {required: true, pattern:/^[-+]?\d+.?\d*(,[-+]?\d+.?\d*)*$/})}></textarea>
                                <error>
                                    {errors.yValues?.type === "required" && "List of y values is required."}
                                    {errors.yValues?.type === "pattern" && "y values should be a positive or negative number seperated by a comma."}
                                </error>
                                {
                                    showYValuesLengthError && (<p className="input-error">Number of y values is less than number of x values.</p>)
                                }
                            </div>
                        )
                    }

                    { showInputExpression && 
                         (<div className="form-group pt-3">
                            <label htmlFor="simplifyingExpression">Simplifying Expression (f(x))</label>
                            <input type="" className="form-control" id="differenceValue" placeholder="ex: x^3+sqrt(2*x^2)+3*x+sin(1/2)-e^2"
                            {...register("expression", {required: true})}></input>
                            <error>
                                {errors.expression?.type === "required" && "Expression is required."}
                            </error>
                            {
                                showExpressionError && (<p className="input-error">{expressionErrorMssg}</p>)
                            }
                        </div>)
                    }
                    <div className="form-group pt-3">
                        <h5><label htmlFor="calculateY_Value">Calculate y-value at specific x-value</label></h5>
                        <input type="" className="form-control" id="calculateY_Value" placeholder="Optional"
                        {...register("calculateY", {pattern: /^[-+]?\d+.?\d*$/})}></input>
                        <error>
                            {errors.calculateY?.type === "pattern" && "x should be a positive or negative number."}
                        </error>
                    </div>
                    <button type="submit" className="btn btn-dark mt-3 w-100">Calculate</button>
                </form>
            </div>
            <br></br>
            {isSubmitted && <Result data={data} method={method}/>}
        </Fragment>
    )
}

export default forwardRef(Calculator);