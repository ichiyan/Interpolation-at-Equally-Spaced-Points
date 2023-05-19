import React from "react";

const Result = () => {
    return(
      <div>
        <div class="container mt-5">
          <hr></hr>
          <h5>Points</h5>
          <table class="table text-center table-striped">
            <thead>
              <tr>
                <th scope="col">x</th>
                <th scope="col">y</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>4</td>
              </tr>
              <tr>
                <td>2</td>
                <td>-5</td>
              </tr>
              <tr>
                <td>3</td>
                <td>6</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="container mt-5">
        <hr></hr>
        <h5>Interpolation Table</h5>
        <table class="table text-center table-striped">
          <thead>
            <tr >
              <th scope="col">x</th>
              <th scope="col">f(x)</th>
              <th scope="col">f[xi,xi+1]</th>
              <th scope="col">f[xi,...,xi+2]</th>
              <th scope="col">f[xi,...,xi+3]</th>
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

        <div class="container mt-5">
          <hr></hr>
            <h5>Polynomial</h5>
            <p></p>
        </div>

        <div class="container mt-5">
          <hr></hr>
            <h5>Interpolated y-value at x=</h5>
            <p></p>
        </div>

        <div class="container mt-5">
          <hr></hr>
          <h5>Graph</h5>
          </div>
        </div>
    )
}

export default Result;