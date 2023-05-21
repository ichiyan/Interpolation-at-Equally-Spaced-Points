import React from 'react';
import Plot from 'react-plotly.js';
import {evaluate} from "mathjs";

const Graph = ({points, interpolation, data}) => {


    var inputXValues = [];
    var inputYValues = [];

    // interpolation polynomial
    var xValues = [];
    var yValues = [];

    points.map((point) => {
        inputXValues.push(point.x);
        inputYValues.push(point.y)

        xValues.push(point.x)
    })

    for(var ndx = 0; ndx < data['numX']; ndx++){
        yValues.push(evaluate(interpolation, {x: xValues[ndx]}))
    }


    return(
        <Plot
            data={[
                {
                    x: xValues,
                    y: yValues,
                    mode: 'lines',
                    marker: {color: '#6495ED'},
                    name: "interpolation polynomial"
                },
                {
                    x: inputXValues,
                    y: inputYValues,
                    type: 'scatter',
                    mode: 'markers',
                    marker: {color: '#ff4716', size: 7},
                    name: "data points"
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