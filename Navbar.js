import { NavLink } from "react-router-dom/dist";
import { Container, Nav, Navbar as Navbarbs } from "react-bootstrap";

 export function Navbar() {
  return (
    <Navbarbs sticky='top' className="bg-secondary shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/homepage" as={NavLink}>
            Homepage
          </Nav.Link>
          <Nav.Link to="/product" as={NavLink}>
            Product
          </Nav.Link>
          {/* <Nav.Link to="/productdetails" as={NavLink}>
            ProductDetails
          </Nav.Link> */}

        </Nav>


      </Container>
    </Navbarbs>

  );
}
export default Navbar;