import React from "react";

const Topnav = () => {
    return(
    <nav className="navbar navbar-expand-sm bg-light">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="Introduction.html">Introduction</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="Calculator.html">Calculator</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="Specification.html">Specification</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="Conclusion.html">Conclusion</a>
              </li>
          </ul>
        </div>
    </nav>
    )
}

export default Topnav;