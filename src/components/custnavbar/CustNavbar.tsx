import classNames from "classnames";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { NavbarSetup } from "../../core/types";
import "./CustNavbar.scss";

export const CustNavbar = ({ appConst, isSticky }: any) => {
  let navConst: NavbarSetup = appConst.nav;
  // const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);
  // useEffect(() => {
  //   window.addEventListener(
  //     "resize",
  //     () => {
  //       const ismobile = window.innerWidth < 1200;
  //       if (ismobile !== isMobile) setIsMobile(ismobile);
  //     },
  //     false
  //   );
  // }, [isMobile]);
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
                  {navConst.navLinks.map((sl, i) => {
                    return (
                      <Nav.Link href={sl.url} key={i}>
                        {sl.name}
                        {/* <FontAwesomeIcon
                        icon={["fab", sl.fa_icon as IconName]}
                        className="heading m-r-8"
                      /> */}
                      </Nav.Link>
                    );
                  })}
                </Nav>
              </Navbar.Collapse>
            </>
          )}
        </Navbar>
      </Container>
    </div>
  );
};
