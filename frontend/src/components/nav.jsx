import Container from "react-bootstrap/Container";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavTabs() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="home">
          Bad Bank
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="createaccount">
              Create Account
            </Nav.Link>
            <Nav.Link as={Link} to="login">
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="#deposit">
              Deposit
            </Nav.Link>
            <Nav.Link as={Link} to="withdraw">
              Withdraw
            </Nav.Link>
            <Nav.Link as={Link} to="balance">
              Balance
            </Nav.Link>
            <Nav.Link as={Link} to="alldata">
              All Data
            </Nav.Link>
            <Nav.Link as={Link} to="logout">
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavTabs;
