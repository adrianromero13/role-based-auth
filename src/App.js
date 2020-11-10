import React from 'react';
import { Alert } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Alert variant='success'>
        <Alert.Heading>Hello World!</Alert.Heading>
        <p>
          Aww yeah, you succesfully read this important alert message. This
          example text is going to run a bit longer so that you can see how 
          spacing within an alert works with this kind of content.
        </p>
          <br />
          <p className='mb-0'>
            Whenever you need to, be sure to use margin utilities to keep things 
            nice and tidy.
          </p>
      </Alert>
    </div>
  );
}

export default App;
