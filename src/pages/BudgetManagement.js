import React from "react";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ButtonReturn from "../components/ButtonReturn";
import { Link } from "react-router-dom";


const BudgetManagement = () => {
    return (
        <div>
            <Container className="bg-info p-3">
                <Row>
                    <Col>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-file-person-fill" viewBox="0 0 16 16">
                            <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-1 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm-3 4c2.623 0 4.146.826 5 1.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1.245C3.854 11.825 5.377 11 8 11z" />
                        </svg>
                    </Col>
                    <Col>
                        <div>
                            <h1 className="text-center">Gestion de budget</h1>
                        </div>
                    </Col>
                    <Col>
                        <Link to="/MainPage">
                            <ButtonReturn />
                        </Link>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <Card className="bg-dark text-white m-3">
                            <Card.Header>
                                <Nav variant="tabs" defaultActiveKey="#first">
                                    <Nav.Item>
                                        <Nav.Link href="#">Detail</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="#link">Couleur</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Item>
                                            Supprimer
                                        </Nav.Item>
                                    </Nav.Item>
                                </Nav>
                            </Card.Header>
                            <Card.Body>
                                <Card.Title className="m-3 d-flex justify-content-around">Nourriture</Card.Title>
                                <Card.Text className="m-3 d-flex justify-content-around">
                                    <InputGroup>
                                        <Form.Control type="number" placeholder="entrer somme" />
                                        <InputGroup.Append>
                                            <InputGroup.Text className="basic-addon2">€</InputGroup.Text>
                                        </InputGroup.Append>
                                    </InputGroup>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="bg-dark text-white m-3">
                            <Card.Header>
                                <Nav variant="tabs" defaultActiveKey="#first">
                                    <Nav.Item>
                                        <Nav.Link href="#">Detail</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="#link">Couleur</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Item>
                                            Supprimer
                                        </Nav.Item>
                                    </Nav.Item>
                                </Nav>
                            </Card.Header>
                            <Card.Body>
                                <Card.Title className="m-3 d-flex justify-content-around">Facture</Card.Title>
                                <Card.Text className="m-3 d-flex justify-content-around">
                                    <InputGroup>
                                        <Form.Control type="number" placeholder="entrer somme" />
                                        <InputGroup.Append>
                                            <InputGroup.Text className="basic-addon2">€</InputGroup.Text>
                                        </InputGroup.Append>
                                    </InputGroup>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className="bg-dark text-white m-3">
                            <Card.Header>
                                <Nav variant="tabs" defaultActiveKey="#first">
                                    <Nav.Item>
                                        <Nav.Link href="#">Detail</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="#link">Couleur</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Item>
                                            Supprimer
                                        </Nav.Item>
                                    </Nav.Item>
                                </Nav>
                            </Card.Header>
                            <Card.Body>
                                <Card.Title className="m-3 d-flex justify-content-around">Entretient maison</Card.Title>
                                <Card.Text className="m-3 d-flex justify-content-around">
                                    <InputGroup>
                                        <Form.Control type="number" placeholder="entrer somme" />
                                        <InputGroup.Append>
                                            <InputGroup.Text className="basic-addon2">€</InputGroup.Text>
                                        </InputGroup.Append>
                                    </InputGroup>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="bg-dark text-white m-3">
                            <Card.Header>
                                <Nav variant="tabs" defaultActiveKey="#first">
                                    <Nav.Item>
                                        <Nav.Link href="#">Detail</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="#link">Couleur</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Item>
                                            Supprimer
                                        </Nav.Item>
                                    </Nav.Item>
                                </Nav>
                            </Card.Header>
                            <Card.Body>
                                <Card.Title className="m-3 d-flex justify-content-around">Loisirs</Card.Title>
                                <Card.Text className="m-3 d-flex justify-content-around">
                                    <InputGroup>
                                        <Form.Control type="number" placeholder="entrer somme" />
                                        <InputGroup.Append>
                                            <InputGroup.Text className="basic-addon2">€</InputGroup.Text>
                                        </InputGroup.Append>
                                    </InputGroup>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className="justify-content-center">
                    <Col xs={4} md={8}>
                        <InputGroup>
                            <Form.Control type="number" placeholder="total" />
                            <InputGroup.Append>
                                <InputGroup.Text className="basic-addon2">€</InputGroup.Text>
                            </InputGroup.Append>
                        </InputGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default BudgetManagement;