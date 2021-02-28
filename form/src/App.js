import './App.css';
import React, { useRef, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Col, Accordion, Row, Form, Card} from "react-bootstrap"
import UserInfo from "./components/info"

function App() {
  const [cards, setCards] = useState([])
  const NameInput = useRef()
  const surnameInput = useRef()
  const emailInput = useRef()
  const messageInput = useRef()
  function handleInput(event) {
    event.preventDefault()
    const Name = NameInput.current.value
    const surname = surnameInput.current.value
    const email = emailInput.current.value
    const message = messageInput.current.value
    const object = {
      Name: Name,
      surname: surname,
      email: email,
      message: message
    }
    if (object.Name && object.surname && object.email && object.message) {
      setCards([...cards, object])
    }

    NameInput.current.value = ""
    surnameInput.current.value = ""
    emailInput.current.value = ""
    messageInput.current.value = ""
  }
  function deleteInfo(index) {
    cards.splice(index, 1)
    setCards([...cards])
  }
  return (
    <>
      <Container>
        <Form onSubmit={handleInput}>
          <h2 className="mb-4 text-right">Sing Up </h2>
          <Row>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Col>
                <Form.Label>Name</Form.Label>
                <Form.Control className="bg-red text-red" ref={NameInput} type="text" placeholder="name" />
              </Col>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Col>
                <Form.Label>Surname</Form.Label>
                <Form.Control className="bg-red text-red" ref={surnameInput} type="text" placeholder="surname" />
              </Col>
            </Form.Group>
          </Row>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Email </Form.Label>
            <Form.Control className="bg-red text-red" ref={emailInput} type="email" placeholder="name@hotmail.com" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Job</Form.Label>
            <Form.Control className="bg-red text-red" ref={messageInput} type="job" placeholder="job" as="textarea"/>
          </Form.Group>
          <Button className="text-red mb-4 bg-orange px-4 py-1" onClick={handleInput} variant="" type="submit">
            Save
      </Button>
        </Form>
        <UserInfo cards={cards} deleteInfo={deleteInfo} />
      </Container>
    </>
  );
}

export default App;