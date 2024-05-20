
import React from 'react';
import { Component } from 'react';
import {Link,
} from "react-router-dom";

export class Navbar extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark ">
  <div className="container-fluid">
    <Link className="navbar-brand" to=" ">ZenithExpress</Link>
    <buthrefn className="navbar-hrefggler" type="buthrefn" data-bs-hrefggle="collapse" data-bs-target="navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="hrefggle navigation">
      <span className="navbar-hrefggler-icon"></span>
    </buthrefn>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auhref mb-2 mb-lg-0">
        
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/business">Business</Link> 
        </li> 
        <li className="nav-item">
          <Link className="nav-link" to="/entertainment">Entertainment</Link>
        </li> 
        
        <li className="nav-item">
          <Link className="nav-link" to="/health">Health</Link>
        </li> 
        <li className="nav-item">
          <Link className="nav-link" to="/science">Science</Link>
        </li> <li className="nav-item">
          <Link className="nav-link" to="/sports">Sports</Link>
        </li> 
        <li className="nav-item">
          <Link className="nav-link" to="/technology">Technology</Link>
        </li>


      </ul>
      
    </div>
  </div>
</nav>

      </div>
    )
  }
}

export default Navbar