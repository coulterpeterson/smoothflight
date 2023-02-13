import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="Header__container p-3 border-bottom">
        <div className="container-fluid">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
              <img className="me-5" width="40" height="40" role="img" aria-label="SmoothFlight Logo" src="/assets/logo.svg"></img>
            </Link>
    
            <div className="dropdown col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <button className="btn btn-outline-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Select Project
                </button>
                <ul className="dropdown-menu px-2" aria-labelledby="dropdownMenuButton1">
                    <form>
                        <input type="text" className="form-control" id="project-search" placeholder="Search project name"></input>
                    </form>
                    <li><h6 className="dropdown-header">Recent projects:</h6></li>
                    <li><a className="dropdown-item" href="#">shmoogle.gov.ca.uk</a></li>
                    <li><a className="dropdown-item" href="#">foicebook.com</a></li>
                    <li><a className="dropdown-item" href="#">cokekoala.com</a></li>
                </ul>
            </div>
    
    
            <button type="button" className="btn btn-primary text-white">My Tasks</button>
          </div>
        </div>
      </div>
    );
};

export default Header;