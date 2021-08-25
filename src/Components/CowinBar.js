import React from "react";
import "./CowinBar.css";
import { Navbar, Container, Dropdown, NavDropdown } from "react-bootstrap";

function CowinBar() {
  return (
    <div className='bar_container'>
      <Navbar bg='light' expand='lg'>
        <Container>
          <Navbar.Brand href='#home'>
            <span className='cowin_logo'>
              <img
                _ngcontent-cik-c20=''
                src='https://dashboard.cowin.gov.in/assets/images/covid19logo.jpg'
                alt='CoWIN'
                className='logo2'
                title='CoWIN'
              />
            </span>
          </Navbar.Brand>
        </Container>

        <NavDropdown
          align='end'
          title='Vaccination Services'
          id='dropdown-menu-align-end'>
          <Dropdown.Item eventKey='1'>Register Member</Dropdown.Item>
          <Dropdown.Item eventKey='2'>Search Vaccination Center</Dropdown.Item>
          <Dropdown.Item eventKey='3'>Book Vaccination Slots</Dropdown.Item>
          <Dropdown.Item eventKey='4'>Manage Appointment</Dropdown.Item>
        </NavDropdown>
        <NavDropdown align='end' title='Platform' id='dropdown-menu-align-end'>
          <Dropdown.Item eventKey='1'>Cowin International</Dropdown.Item>
          <Dropdown.Item eventKey='2'>Vaccibator</Dropdown.Item>
          <Dropdown.Item eventKey='3'>Department Login</Dropdown.Item>
          <Dropdown.Item eventKey='4'>Verify Certificate</Dropdown.Item>
        </NavDropdown>
        <NavDropdown align='end' title='Resources' id='dropdown-menu-align-end'>
          <Dropdown.Item eventKey='1'>How to get vaccinated</Dropdown.Item>
          <Dropdown.Item eventKey='2'>Do's and Dont's</Dropdown.Item>
          <Dropdown.Item eventKey='3'>Overview</Dropdown.Item>
        </NavDropdown>
        <NavDropdown align='end' title='Support' id='dropdown-menu-align-end'>
          <Dropdown.Item eventKey='1'>Frequently Asked Questions</Dropdown.Item>
          <Dropdown.Item eventKey='2'>Certificate Correction</Dropdown.Item>
          <Dropdown.Item eventKey='3'>Contact Us</Dropdown.Item>
        </NavDropdown>
      </Navbar>
    </div>
  );
}

export default CowinBar;
