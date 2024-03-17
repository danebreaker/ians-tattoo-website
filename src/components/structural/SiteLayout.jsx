import { Nav, Navbar } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

export default function SiteLayout(props) {
    return <div>
        <Navbar>
            <Nav>
                <Nav.Link as={Link} to="./SiteHome">Home</Nav.Link>
                <Nav.Link as={Link} to="./AboutMe">About Me</Nav.Link>
            </Nav>
        </Navbar>
        <div style={{ margin: "1rem" }}>
            <Outlet />
        </div>
    </div>
}