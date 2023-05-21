import {React} from "react";
import Graph from "../components/Graph";
import {simplify, factorial, evaluate} from "mathjs";
import {create, all } from 'mathjs';
import 'katex/dist/katex.min.css';
import {InlineMath } from 'react-katex';


const config = { };
const math = create(all, config);

const Result = ({data, method}) => {

  // const [interpolation, setInterpolation] = useState();

  var points = [];
  var column_labels = [];
  let diff = math.matrix();

  diff.resize([(data.numX), (data.numX)]);

  // calculator with input function
  if (method == 1){
      // console.log(data)
      // change to input expression
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

    let s = '((x-'+x0.toString()+')/'+data['diffX'].toString()+') ';
    let s_d = '\\frac{x-'+x0.toString()+'}{'+data['diffX'].toString()+'} ';
    let partial_eq = '';
    let partial_pn = '';
    let degree = n-1;
    console.log(s)

    for(let i=1; i<=degree; i++){ //generate co-efficient
        let num = '';
        let num_d = '';
        let dnum = 1;

        for(let j=1; j<=i; j++){ //generate numerator
            let num_temp = '(' + s + ' - ' + (j-1).toString()+') ';
            let num_temp_d = '(' + s_d + ' - ' + (j-1).toString()+') ';
            num = num + num_temp;
            num_d = num_d + num_temp_d;
        }
        if(degree>1){
            dnum = factorial(i);
        }
        let co_ef = diff.get([0,i])/dnum;
        console.log(diff.get([0,i]))
        console.log(dnum)
        console.log(n)
        console.log("co ef: ")
        console.log(co_ef)
        partial_eq = partial_eq + ' + '  + co_ef.toString() + num;
        //partial_pn = partial_pn + ' + ((' + num +')/' + dnum.toString() + ') ('+diff.get([0,i]).toString()+') ';
        partial_pn = partial_pn + ' + \\frac{' + num_d +'}{' + dnum.toString() + '} ('+diff.get([0,i]).toString()+') ';
    }
    let f0 = points[0].y;
    let f_eq = f0.toString() + partial_eq;
    let pn = 'P_' + column_labels[column_labels.length - 1] + '(x) = ' + f0.toString() + partial_pn;
    console.log("Answer: ")
    console.log(pn)
    console.log("simplified: ")
    let simplified = 'P_' + column_labels[column_labels.length - 1] + '(x) = ' + simplify(f_eq).toString();
    console.log(simplified)

    //calculate y
    var interY = '';
    var interX = '';
    var interYString;
    if(data['calculateY'].length >= 1){
      interX = parseFloat(data['calculateY'])
      interY = evaluate(f_eq, {x: interX})
      interYString = "f(" + interX.toString() + ")" + " = " + interY.toString()
    }

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
            {points.map((point, ndx) =>{
                return(
                    <tr key={ndx}>
                        <td>{point.x}</td>
                        <td>{point.y}</td>
                        {
                            column_labels.map((col, i) => {
                                return(<td key={i}> {diff.get([ndx,i+1])} </td>)
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
            <br></br>
            <span style={{display: "block", padding: "10px 0"}}><InlineMath math={pn}/></span>
            <br></br>
            <h5>Simplified Polynomial</h5>
            <br></br>
            <span style={{display: "block", padding: "10px 0"}}><InlineMath math={simplified}/></span>
        </div>
        
        {
          interY != '' && (
            <div className="container mt-5">
              <hr></hr>
              <br></br>
                <h5>Interpolated y-value at x = {interX}</h5>
                <br></br>
                <span style={{display: "block", padding: "10px 0"}}><InlineMath math={interYString}/></span>
            </div>
          )
        }

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