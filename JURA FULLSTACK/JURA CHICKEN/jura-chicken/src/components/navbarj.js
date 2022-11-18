import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './logo.png';

export function NavbarJura() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
      <Navbar.Brand href="/">
            <img
              src={logo}
              width="60"
              height="60"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">All Menu</Nav.Link>
            <Nav.Link href="/keranjang">Keranjang</Nav.Link>
            <NavDropdown title="E-Jura" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Top Up E-Jura</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Cek Riwayat Top Up</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Laporkan Masalah</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Daftar</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}