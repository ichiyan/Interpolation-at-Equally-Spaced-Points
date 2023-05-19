import {React, forwardRef} from "react";
import Graph from "../components/Graph";

const Result = ({initX, numX, diffX, calculateY, expression}) => {


  var points = [];
  var column_labels = [];
  var exp = "Math.sin(x)";

  for (var x = initX, count = 1; count < numX; x += diffX, count++) {
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

  console.log(column_labels)

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
        <table className="table text-center table-striped">
          <thead>
            <tr >
              <th scope="col">x<sub>i</sub></th>
              <th scope="col">f<sub>i</sub></th>
              {
                column_labels.map((col) => {
                  return(<th scope="col">&#x25B3;<sup>{col}</sup>f</th>)
                })
              }
            </tr>
          </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr>
                <td>1</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
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
          <Graph points={points} numX={numX}/>
        </div>
      </div>
    )
}

export default Result;