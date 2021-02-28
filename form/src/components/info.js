import '../App.css';
import { Accordion, Card, Button, ListGroup } from "react-bootstrap"

function info(props) {
    return (
        <>
            {
                props.cards.map((card, index) => {
                    return (
                        <Accordion className="bg-orange mt-4">
                            <Card className="bg-orange">
                                <Card.Header>
                                    <Accordion.Toggle className="text-white text-decoration-none" as={Button} variant="link" eventKey="0">
                                        {card.name} {card.surname}
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <div>
                                        <ListGroup className="text-dark">
                                            <ListGroup.Item >Name: {card.Name} </ListGroup.Item>
                                            <ListGroup.Item>Surname: {card.surname}</ListGroup.Item>
                                            <ListGroup.Item>Email: {card.email}</ListGroup.Item>
                                            <ListGroup.Item>Job: {card.message}</ListGroup.Item>
                                        </ListGroup>
                                        <Card.Footer>
                                            <Button onClick={() => {
                                                props.deleteinfo(index)
                                            }
                                            }
                                                color="danger" className="bg-danger">out</Button>{' '}
                                        </Card.Footer>
                                    </div>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>

                    )
                })
            }
        </>
    )
}
export default info