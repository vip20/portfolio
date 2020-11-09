import { IconName } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { NavbarSetup } from "../../core/types";
import "./CustNavbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CustNavbar = (props: any) => {
  let navConst: NavbarSetup = props.appConst.nav;
  return (
    <Navbar bg="light" expand="lg">
      {navConst.brand && (
        <Navbar.Brand as={Link} to={navConst.brand.path} className="heading">
          {navConst.brand.name}
        </Navbar.Brand>
      )}
      {navConst.socialLinks && (
        <>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" justify-content-end">
              {navConst.socialLinks.map((sl, i) => {
                return (
                  <Nav.Link
                    href={sl.url}
                    key={i}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={["fab", sl.fa_icon as IconName]}
                      className="heading grey-dark-2 m-r-8"
                    />
                  </Nav.Link>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </>
      )}
    </Navbar>
  );
};
