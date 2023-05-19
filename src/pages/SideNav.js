import React from "react";

const SideNav = () => {
    return(
      <nav id="sidebar">
				<div class="p-4 pt-5">
					<h5>Content</h5>
	        <ul class="list-unstyled components mb-5">
	          <li><a>Introduction</a></li>
	          <li><a>Calculator</a></li>
            <li><a>Result</a></li>
            <li><a>Specifications</a></li>
            <li><a>Conclusion</a></li>
	        </ul>
	      </div>
    	</nav>
    )
}

export default SideNav;