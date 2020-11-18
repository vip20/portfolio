import classNames from "classnames";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { NavbarSetup } from "../../core/types";
import "./CustNavbar.scss";
import * as Scroll from "react-scroll";

export const CustNavbar = ({ appConst, isSticky }: any) => {
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
                      <Scroll.Link
                        key={i}
                        className="nav-link"
                        activeClass="active"
                        to={sl.key}
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                      >
                        {sl.name}
                      </Scroll.Link>
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
