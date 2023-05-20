import React from 'react';
import Plot from 'react-plotly.js';

const Graph = ({points}) => {

    // interpolation polynomial
    var exp = "Math.sin(x)";
    var xValues = [];
    var yValues = [];

    // to change: condition
    for (var x = 0; x <= 10; x += 0.1) {
        xValues.push(x);
        yValues.push(eval(exp));
    }

    // input points
    var inputXValues = [];
    var inputYValues = [];

    points.map((point) => {
        inputXValues.push(point.x);
        inputYValues.push(point.y)
    })

    

    return(
        <Plot
            data={[
                {
                    x: inputXValues,
                    y: inputYValues,
                    type: 'scatter',
                    mode: 'markers',
                    marker: {color: '#ff4716'},
                    name: "data points"
                },
                {
                    x: xValues,
                    y: yValues,
                    mode: 'lines',
                    marker: {color: '#6495ED'},
                    name: "interpolation polynomial"
                },
            ]}
            // layout={{width: 770, height: 510}}
            layout={{autosize: true, xaxis:{title:"x"}, yaxis:{title:"p(x)"}}}
            config={{scrollZoom:true}}
            useResizeHandler
            style={{width: "100%", height: "100%" }}
        />
    )
}

export default Graph