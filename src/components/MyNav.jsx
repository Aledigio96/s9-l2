import { Container, Nav, Navbar } from "react-bootstrap";

const MyNav = function () {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">
          {" "}
          <img
            src="https://img.freepik.com/vettori-gratuito/logo-libreria-sfumato_23-2149332421.jpg?semt=ais_hybrid&w=740"
            alt=""
            style={{ height: "35px", width: "35px", marginRight: "10px", borderRadius: "50%" }}
          />
          React Library
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default MyNav;
