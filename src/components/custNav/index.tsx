import { IconName } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavbarSetup, PageSetup, ProfileSetup } from "../../core/types";
function CustNav({ appConst }: { appConst: PageSetup }) {
  const navConst: NavbarSetup = appConst.nav;
  const profileConst: ProfileSetup = appConst.profile;
  return (
    <div className="nav-container">
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        className=" justify-content-between"
      >
        {navConst.brand && (
          <Navbar.Brand href={navConst.brand.path}>
            <b>{navConst.brand.name}</b>
          </Navbar.Brand>
        )}
        {navConst.navLinks && (
          <>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-end"
            >
              <Nav>
                {navConst.navLinks.map((sl, i) => {
                  return (
                    <Nav.Link key={i} className="nav-link" href={sl.key}>
                      {sl.name}
                    </Nav.Link>
                  );
                })}
              </Nav>
            </Navbar.Collapse>
          </>
        )}
      </Navbar>
      <div className="social-links">
        <ul className="d-flex justify-content-end">
          {profileConst.socialLinks?.map((sl, i) => {
            return (
              <li key={i + "sl"} className=" ml-5">
                <a href={sl.url} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon
                    icon={["fab", sl.fa_icon as IconName]}
                    className="heading m-r-8 icon"
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default CustNav;
