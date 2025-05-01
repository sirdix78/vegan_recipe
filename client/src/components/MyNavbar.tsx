import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Logo from "../assets/fav2.png";

interface MyNavbarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const MyNavbar: React.FC<MyNavbarProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img src={Logo} className="logo-nav" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>

            <NavDropdown title="Categories" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/#Salads">
                Salads
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/#Soups">
                Soups
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/#Dishes">
                Main dishes
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/#Desserts">
                Desserts
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/#Drinks">
                Drinks
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search"
            />
            <Button className="search-btn">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
