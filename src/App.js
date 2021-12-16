import { Navbar } from "react-bootstrap";
import navbar from './navbar'
import { Button } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>

        <Button variant='success' onClick={() => console.log("click")}>Click me</Button>{' '}
        <Button variant="primary">Primary</Button>{' '}
        <Button variant="secondary">Secondary</Button>{' '}
        <Button variant="success">Success</Button>{' '}
        <Button variant="warning">Warning</Button>{' '}
        <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
        <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
        <Button variant="link">Link</Button>

        <Navbar />

    </>
  );
}

export default App;
