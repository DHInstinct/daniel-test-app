import { Navbar } from "react-bootstrap";
import navbar from './navbar'
import { Button, Container, Row, Alert, Breadcrumb } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <div className='App'>
        <Container>
          <Alert variant='primary'>These are buttons</Alert>
            <Breadcrumb>
              <Breadcrumb.item>Test1</Breadcrumb.item>
              <Breadcrumb.item>Test2</Breadcrumb.item>
              <Breadcrumb.item active >Test3</Breadcrumb.item>
            </Breadcrumb>
          <Row>
            <Button variant='success' onClick={() => console.log("click")}>Click me</Button>{' '}
            <Button variant="primary">Primary</Button>{' '}
            <Button variant="secondary">Secondary</Button>{' '}
          </Row>

        <Row>
          <Button variant="success">Success</Button>{' '}
          <Button variant="warning">Warning</Button>{' '}
          <Button variant="danger">Danger</Button> {' '}
          <Button variant="info">Info</Button>{' '}
        </Row>
        
        <Row>
          <Button variant="light">Light</Button>{' '}
          <Button variant="dark">Dark</Button>{' '}
          <Button variant="link">Link</Button>{' '}
        </Row>

        <Navbar />
        </Container>
       </div>

    </>
  );
}

export default App;
