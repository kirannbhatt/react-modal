import React, { Component } from 'react';

import { Button } from 'react-bootstrap'
import Modal from './components/Modal/Modal'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShown: false
    }
  }

  openModalHandler = () => {
    this.setState({
      isShown: true
    });
  }
  closeModalHandler = () => {
    this.setState({
      isShown: false
    });
  }

  render() {
    return (
      <div>
        { this.state.isShown ? <div onClick={this.closeModalHandler} className='back-drop'></div> : null}

        <Button variant="info" onClick={this.openModalHandler}>Open Modal</Button>

        <Modal
          className="modal"
          show={this.state.isShown}
          close={this.closeModalHandler}>
            This is the modal body
          </Modal>
      </div>
    );
  }
}

export default App;
