import {React, forwardRef} from "react";
import Graph from "../components/Graph";

const Result = ({data, method}) => {


  var points = [];
  var column_labels = [];

  const dummy = [
    {x: 0.0, y: 0.000, dif1: 1.015, dif2: 0.2124999999999999, dif3: 0.5000000000000032, dif4:0.5208333333333183},
    {x: 0.2, y: 0.203, dif1: 1.0999999999999999, dif2: 0.5125000000000018, dif3: 0.9166666666666579	},
    {x: 0.4, y: 0.423, dif1: 1.3050000000000006, dif2: 1.0624999999999967},
    {x: 0.6, y: 0.684, dif1: 1.7299999999999993},
    {x: 0.8, y: 1.030},
  ];

  // calculator with input function
  if (method == 1){
      // console.log(data)
      // change to input expression
      var exp = "Math.sin(x)";

      for (var x = data['initX'], count = 1; count < data['numX']; x += data['diffX'], count++) {
          points.push({
            x: x,
            y: eval(exp)
          })
          column_labels.push(count)
      }
      points.push({
        x: x,
        y: eval(exp)
      })
  }else if(method == 2){
    // calculator with x and y inputs
    for (var x = data['initX'], count = 1; count < data['numX']; x += data['diffX'], count++) {
      points.push({
        x: x,
        y: data['yValues'][count-1]
      })
      column_labels.push(count)
    }
    points.push({
      x: x,
      y: data['yValues'][count-1]
    })
  }


  //calculate y

    return(
      <div>
        <div className="container mt-5">
          <hr></hr>
          <br></br>
          <h5>Points</h5>
          <table className="table text-center table-striped">
            <thead>
              <tr>
                <th scope="col">x</th>
                <th scope="col">y</th>
              </tr>
            </thead>
            <tbody>
              {points.map((point, ndx) => {
                return (
                  <tr key={ndx}>
                    <td>{point.x}</td>
                    <td>{point.y}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        <div className="container mt-5">
        <hr></hr>
        <br></br>
        <h5>Interpolation Table</h5>
        <div className="table-responsive">     
        <table className="table text-center table-striped ">
          <thead>
            <tr >
              <th scope="col">x<sub>i</sub></th>
              <th scope="col">f<sub>i</sub></th>
              {
                column_labels.map((col, ndx) => {
                  return(<th key={ndx}  scope="col">&#x25B3;<sup>{col}</sup>f</th>)
                })
              }
            </tr>
          </thead>
          <tbody>
              {dummy.map((point, ndx) => {
                return (
                  <tr key={ndx}>
                    <td>{point.x}</td>
                    <td>{point.y}</td>
                    <td>{point.dif1}</td>
                    <td>{point.dif2}</td>
                    <td>{point.dif3}</td>
                    <td>{point.dif4}</td>
                        {/* {
                          column_labels.map((col, ndx) => {
                            return(<td key={ndx}  scope="col">0.00123
                            </td>)
                          })
                        } */}
                  </tr>
                )
              })}
            </tbody>
          </table>
          </div>
        </div>

        <div className="container mt-5">
          <hr></hr>
          <br></br>
            <h5>Polynomial</h5>
            <p></p>
        </div>

        <div className="container mt-5">
          <hr></hr>
          <br></br>
            <h5>Interpolated y-value at x=</h5>
            <p></p>
        </div>

        <div className="container mt-5">
          <hr></hr>
          <br></br>
          <h5>Graph</h5>
          <Graph points={points}/>
        </div>
      </div>
    )
}

export default Result;