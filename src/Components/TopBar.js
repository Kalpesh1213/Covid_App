import React from "react";
import "./TopBar.css";
import { Navbar, Container, NavDropdown, Dropdown } from "react-bootstrap";

function TopBar() {
  return (
    <div className='top-header'>
      <Navbar>
        <Container>
          <span className='govindia'>
            <Navbar.Brand href='https://www.india.gov.in/'>
              <span className='logo1'>
                <img
                  src='	https://dashboard.cowin.gov.in/assets/images/emblem-gov.svg'
                  alt='emblem'
                />
              </span>
              <a title='Ministry of Health and Family Welfare'>
                <span className='gov'>
                  Ministry of Health and <br /> Family Welfare
                </span>
              </a>
            </Navbar.Brand>
          </span>
        </Container>
      </Navbar>
    </div>
  );
}

export default TopBar;
