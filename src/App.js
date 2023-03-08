import logo from './logo.svg';
import './App.css';
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import CheckList from './component/CheckList';
import { useState } from 'react';
import { Form } from 'react-bootstrap';

function App() {

  const [daily, setDaily] = useState(true);
  const [level, setLevel] = useState(250);

  const toWeekly = () => setDaily(false);
  const toDaily = () => setDaily(true);
  const changeLevel = (e) => {
    console.log(e.target.value);
    setLevel(e.target.value);
  }

  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">아 맞다 메이플</Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link onClick={toDaily}>일간아맞다</Nav.Link>
                <Nav.Link onClick={toWeekly}>주간아맞다</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
      </Navbar>
      <header className="App-header">
        <Container className="mb-5">
          <h3>캐릭터 레벨 : </h3>
          <Form.Control style={{textAlign: 'center'}} type="number" width="10%" value={level} onChange={changeLevel}></Form.Control>
        </Container>
        <CheckList daily={daily} level={level}/>
      </header>
    </div>
  );
}

export default App;
