import React from 'react';
import { Button, Card } from 'react-bootstrap'
import './Modal.css';

const Modal = (props) => {
  return(
      <Card
        style = {{
          transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0'
        }}>
        <Card.Header>
          Modal Header
          <Button variant="danger" className="btn-right" onClick={props.close}>x</Button>
        </Card.Header>
        <Card.Body>
            {props.children}
        </Card.Body>
        <Card.Footer>
          <Button variant="danger" onClick={props.close}>Close</Button>
        </Card.Footer>
        
        </Card>
  )
}

export default Modal;
