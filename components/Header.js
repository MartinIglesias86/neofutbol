import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { glowOnHover } from "../styles/Hero.module.css";

function Header() {
  const [show, setShow] = useState(false);
  const handleClose = () => setTimeout(() => setShow(!show), 500);
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} bg="dark" variant="dark" expand={expand} className="mb-3" sticky="top">
          <Container fluid>
          <Navbar.Brand href="#home">
            <img
              alt="logo"
              src="/logo.png"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} onClick={handleClose}/>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              show={show}
              onHide={handleClose}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#home" onClick={handleClose}>Home</Nav.Link>
                  <Nav.Link href="#info" onClick={handleClose}>Como funciona?</Nav.Link>
                  <Nav.Link href="#scoreboard" onClick={handleClose}>Tabla de posiciones</Nav.Link>
                  <Button className={glowOnHover} variant="danger" size="sm">Conecta tu wallet</Button>{' '}
                  <Nav.Link href="#action2">Mi album</Nav.Link>
                  <Nav.Link href="#action2">Intercambio</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;