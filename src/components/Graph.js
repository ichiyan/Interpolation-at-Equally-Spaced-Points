import React from 'react';
import Plot from 'react-plotly.js';

const Graph = () => {

    var exp = "Math.sin(x)";
    var xValues = [];
    var yValues = [];
    for (var x = 0; x <= 10; x += 0.1) {
        xValues.push(x);
        yValues.push(eval(exp));
    }

    return(
        <Plot
            data={[
                {
                    x: [1, 2, 3],
                    y: [2, 6, 3],
                    type: 'scatter',
                    mode: 'markers',
                    marker: {color: 'red'},
                },
                {
                    x: xValues,
                    y: yValues,
                    mode: 'lines',
                },
            ]}
            layout={{width: 640, height: 480, title: 'A Fancy Plot'}}
        />
    )
}

export default Graph