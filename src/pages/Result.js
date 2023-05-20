import {React, useState} from "react";
import Graph from "../components/Graph";
import {simplify, parse, derivative, forEach, factorial, evaluate} from "mathjs";
import {create, all } from 'mathjs';

const config = { };
const math = create(all, config);

const Result = ({data, method}) => {

  // const [interpolation, setInterpolation] = useState();

  var points = [];
  var column_labels = [];
  let diff = math.matrix();

  diff.resize([(data.numX), (data.numX)]);

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
     
      var exp = data.expression;
      let last_x = 0;

      for (var x = data['initX'], count = 1; count < data['numX']; x += data['diffX'], count++) {
          const scope = {x:x};
          let f = math.evaluate(exp, scope)
          points.push({
            x: x,
            y: f
          })
          column_labels.push(count)
          last_x = x;
      }
      const scope = {x:last_x+data['diffX']};
      let f = math.evaluate(exp, scope)
      points.push({
        x: last_x+data['diffX'],
        y: f
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
console.log(points)
  //calculate y

    function find_s(s, n){//calculates  s = (x-x0)/delta_x
        let temp_s = s;
        for (let i = 1; i < (n - 1); i++) {
            temp_s = temp_s * (s - i);
        }
        return temp_s;
    }
    let n = Number(data['numX']);
    let temp = 0;

    diff.set([0,0],9)

    console.log(diff)
    console.log("diff ^")
    console.log(diff.get([0,0]))

    for(let ndx=0; ndx<n; ndx++){
        diff.set([ndx, 0], points[ndx].y);
    }
    console.log(diff)

    for (let i=1; i<n; i++){
        for(let j = n-i; j>0; j--){
            temp = diff.get([j, (i-1)]) - diff.get([(j-1), (i-1)]);
            diff.set([j-1, i], temp);
        }
    }
    console.log(diff)

    //interpolate
    let x0 = points[0].x;
    let x1 = points[0].x;
    let val = 'x';
    console.log(x1)
    console.log(typeof(x1))

    let s = '((x-'+x0.toString()+')/'+data['diffX'].toString()+') ';
    let partial_eq = '';
    let degree = n-1;
    console.log(s)

    for(let i=1; i<=degree; i++){ //generate co-efficient
        let num = '';

        for(let j=1; j<=i; j++){ //generate numerator
            let num_temp = '(' + s + ' - ' + (j-1).toString()+') ';
            num = num + num_temp;
        }
        let co_ef = diff.get([0,i])/factorial(n);
        console.log(co_ef)
        partial_eq = partial_eq + ' + '  + co_ef.toString() + num;
    }
    let f0 = points[0].y;
    var f_eq = f0.toString() + partial_eq;
    console.log("Answer: ")
    console.log(f_eq)

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
                  </tr>
                )
              })}
            </tbody>
            <tbody>
            {points.map((point, ndx) =>{
                return(
                    <tr key={ndx}>
                        <td>{point.x}</td>
                        <td>{point.y}</td>
                        <td>{point.dif1}</td>
                        <td>{point.dif2}</td>
                        <td>{point.dif3}</td>
                        <td>{point.dif4}</td>
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
          <Graph points={points} interpolation={f_eq} data={data}/>
        </div>
      </div>
    )
}

export default Result;