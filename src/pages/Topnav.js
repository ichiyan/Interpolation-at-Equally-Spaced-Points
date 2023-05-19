import React from "react";

const Topnav = () => {
    return(
    <nav class="navbar navbar-expand-sm bg-light">
        <div class="container-fluid">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="Introduction.html">Introduction</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="Calculator.html">Calculator</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="Specification.html">Specification</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="Conclusion.html">Conclusion</a>
              </li>
          </ul>
        </div>
    </nav>
    )
}

export default Topnav;