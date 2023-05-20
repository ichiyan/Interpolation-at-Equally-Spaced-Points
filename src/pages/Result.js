import {React, forwardRef} from "react";
import Graph from "../components/Graph";

const Result = ({data, method}) => {


  var points = [];
  var column_labels = [];

  // calculator with input function
  if (method == 1){
      console.log(data)
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
        <div class="table-responsive">     
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
              {points.map((point, ndx) => {
                return (
                  <tr key={ndx}>
                    <td>{point.x}</td>
                    <td>{point.y}</td>
                        {
                          column_labels.map((col, ndx) => {
                            return(<td key={ndx}  scope="col">
                            </td>)
                          })
                        }
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