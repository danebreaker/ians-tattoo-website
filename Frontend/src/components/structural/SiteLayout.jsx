import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

export default function SiteLayout(props) {
    return <div>
        <Navbar fixed="top" bg="dark" data-bs-theme="dark" fluid>
            <Container>
                <Navbar.Brand as={Link} to="/">Schultz Store</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="./SiteHome">Home</Nav.Link>
                    <Nav.Link as={Link} to="./Gallery">Gallery</Nav.Link>
                    <Nav.Link as={Link} to="./Tattoos">Tattoos</Nav.Link>
                    <Nav.Link as={Link} to="./Music">Music</Nav.Link>
                    <Nav.Link as={Link} to="./Commissions">Commissions</Nav.Link>
                    <Nav.Link as={Link} to="./Contact">Contact Me</Nav.Link>
                    <Nav.Link as={Link} to="./AboutMe">About Me</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

        {/* <div style={{ margin: "1rem" }}> */}
        <Outlet />
        {/* </div> */}
    </div>
}