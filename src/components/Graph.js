import React from 'react';
import Plot from 'react-plotly.js';
import {evaluate} from "mathjs";
import "@stdlib/array-linspace";

const Graph = ({points, interpolation, data}) => {

    // interpolation polynomial
    var linspace = require( '@stdlib/array-linspace' );
    var xValues = linspace(points[0].x, points[points.length - 1].x, data['numX'] + 50)
    var yValues = [];

    var inputXValues = [];
    var inputYValues = [];
    points.map((point) => {
        inputXValues.push(point.x);
        inputYValues.push(point.y)
    })

    for(var ndx = 0; ndx < xValues.length; ndx++){
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