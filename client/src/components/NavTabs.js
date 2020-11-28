import React from 'react';
import { Navbar } from 'react-bootstrap';
// Props are passed through our functional component.
function NavTabs(props) {
  const tabs = ['Home', 'Submit', 'Select', 'Output'];
  return (
    <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Navbar.Brand>
          HADEDA
          <img
        src= './logo192.png'
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
          />
      </Navbar.Brand>
      {tabs.map(tab => (
        <li className="nav-item" key={tab}>
          <a
            href={'#' + tab.toLowerCase()}
            // Whenever a tab is clicked on,
            // the current page is set through the handlePageChange props.
            onClick={() => props.handlePageChange(tab)}
            className={
              props.currentPage === tab ? 'nav-link active' : 'nav-link'
            }
          >
            {tab}
          </a>
        </li>
      ))}
    </Navbar.Collapse>
    </Navbar>
  );
}

export default NavTabs;
