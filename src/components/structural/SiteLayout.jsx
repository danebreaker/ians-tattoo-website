import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

export default function SiteLayout(props) {
    return <div>
        <Navbar fixed="top" bg="dark" data-bs-theme="dark">
            <Container>
            <Nav className="me-auto">
                <Nav.Link as={Link} to="./SiteHome">Home</Nav.Link>
                <Nav.Link as={Link} to="./AboutMe">About Me</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
        
        <div style={{ margin: "1rem" }}>
            <Outlet />
        </div>
    </div>
}