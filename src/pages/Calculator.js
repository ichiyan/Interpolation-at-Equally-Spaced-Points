import React from "react";

const Calculator = () => {
    return(
        <div class="container pt-3">
            <h2>Interpolation at Equally Spaced Points</h2>
            <form action="Result.html">
                <div class="form-group pt-3 ">
                <label for="initialValue">Initial Value for x</label>
                <input type="text" class="form-control" id="initialValue"></input>
                </div>
                <div class="form-group pt-3">
                <label for="numberValue">Number of x values</label>
                <input type="text" class="form-control" id="numberValue"></input>
                </div>
                <div class="form-group pt-3">
                    <label for="differenceValue">Difference between x values</label>
                    <input type="text" class="form-control" id="differenceValue"></input>
                </div>
                <div class="form-group pt-3">
                    <label for="simplifyingExpression">Simplifying Expression (f(x))</label>
                    <input type="text" class="form-control" id="differenceValue"></input>
                </div>
                <div class="form-group pt-3">
                    <h5><label for="calculateY_Value">Calculate y-value at specific x-value</label></h5>
                    <input type="text" class="form-control" id="calculateY_Value" placeholder="Optional"></input>
                </div>
                <button type="submit" class="btn btn-primary mt-3 w-100">Calculate</button>
            </form>
        </div>
    )
}

export default Calculator;