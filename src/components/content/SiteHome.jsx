import React from "react";
import {Container, Image,Card, Button, CardGroup} from "react-bootstrap";

export default function SiteHome() {
    return (
    <>
        {/* <Container max-width='100%'> */}
        <Image src="src/images/DemoBanner.jpg" fluid style={{paddingTop: "0px;",marginTop:"0px", top: "50px", position:"relative", minHeight: "95vh", minWidth: "95vw"}}></Image>
        {/* </Container> */}
        <Container fluid style={{position: "relative", top:"50px", maxWidth:"100%"}}>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src="src/images/Tattoo.jpg"/>
                    <Card.Body>
                        <Card.Title>Tattoo</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Card.Text>
                    </Card.Body>
                    <Button>See More!</Button>
                </Card>
                <Card>
                    <Card.Img variant="top" src="src/images/Art.jpg"/>
                    <Card.Body>
                        <Card.Title>Art</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Card.Text>
                    </Card.Body>
                    <Button>See More!</Button>
                </Card>
                <Card>
                    <Card.Img variant="top" src="src/images/Music.jpg"/>
                    <Card.Body>
                        <Card.Title>Music</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Card.Text>
                    </Card.Body>
                   <Button>See More!</Button>
                </Card>
            </CardGroup>
        </Container>

    </>)
}