import React from "react";

const Topnav = () => {
    return(
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 fixed-top">
          <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <h2><span class="fs-5 d-none d-sm-inline text-dark">Content</span></h2>
              <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                <li class="nav-item">
                  <a href="#Introduction" class="nav-link align-middle px-0">
                    <span class="ms-1 d-none d-sm-inline">Introduction</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#Calculator" class="nav-link align-middle px-0">
                    <span class="ms-1 d-none d-sm-inline">Calculator</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#Specification" class="nav-link align-middle px-0">
                    <span class="ms-1 d-none d-sm-inline">Specification</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="#Conclusion" class="nav-link align-middle px-0">
                    <span class="ms-1 d-none d-sm-inline">Conclusion</span>
                  </a>
                </li>
              </ul>
          </div>
        </div>
    )
}

export default Topnav;