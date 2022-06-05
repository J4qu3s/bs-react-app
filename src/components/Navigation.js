import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const Navigation = () => {

    const [navBg, setNavBg] = useState("transparent");
    const [navVariant, setNavVariant] = useState("dark");
    const [bgTransparent, setBgTransparent] = useState("bg-transparent");

    const transparent = () => {
        setNavBg("transparent");
        setNavVariant("dark");
        setBgTransparent("transparent")
    }

    const dark = () => {
        setNavBg("dark");
        setNavVariant("dark");
        setBgTransparent("");
    }

    
      useEffect(() => {
        if(window.location.pathname === "/"){
          transparent();
        }else{
          dark()
        }
      }, []);

  return (
    
    <Navbar collapseOnSelect fixed="top" expand="lg" bg={navBg} variant={navVariant} className={bgTransparent}>
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={transparent}>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/about" onClick={dark}>About</Nav.Link>
            <Nav.Link  as={Link} to="/soft" onClick={dark}>Soft skills</Nav.Link>
            <Nav.Link  as={Link} to="/gallery" onClick={dark}>Gallery</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/">Action</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item  as={Link} to="/">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item  as={Link} to="/">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link  as={Link} to="/">More deets</Nav.Link>
            <Nav.Link eventKey={2}  as={Link} to="/">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;