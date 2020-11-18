import classNames from "classnames";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { NavbarSetup } from "../../core/types";
import "./CustNavbar.scss";

export const CustNavbar = ({ appConst, isSticky, activeSection }: any) => {
  let navConst: NavbarSetup = appConst.nav;
  let navBarClass = classNames({
    "navbar-sticky": isSticky,
    "navbar-fixed": true,
  });
  return (
    <div className={navBarClass}>
      <Container>
        <Navbar bg="light" expand="lg">
          {navConst.brand && (
            <Navbar.Brand
              as={Link}
              to={navConst.brand.path}
              className="heading"
            >
              {navConst.brand.name}
            </Navbar.Brand>
          )}
          {navConst.navLinks && (
            <>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className=" justify-content-end">
                  {/* <Scrollspy
                    items={navConst.navLinks.map((sl) => sl.key)}
                    currentClassName="is-selected"
                  > */}
                  {navConst.navLinks.map((sl, i) => {
                    return (
                      <Nav.Link
                        key={i}
                        className={activeSection === i ? "active" : ""}
                      >
                        {sl.name}
                      </Nav.Link>
                    );
                  })}
                  {/* </Scrollspy> */}
                </Nav>
              </Navbar.Collapse>
            </>
          )}
        </Navbar>
      </Container>
    </div>
  );
};
