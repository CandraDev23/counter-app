import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; //framework
import { Button } from 'react-bootstrap'; //import component button
import Stack from 'react-bootstrap/stack' //import component stack





function App() {
  const [counter, setCounter] = useState(0);

  //increase counter
  const increase = () => {
    setCounter(count => count + 1);
  };

  //decrease counter
  const decrease = () => {
    setCounter(count => count - 1);
  };

  //reset counter 
  const reset = () => {
    setCounter(0)
  }

  return (
      <div className={'d-flex align-items-center h-100 position-absolute start-50 top-50 translate-middle'} style={{ textAlign: "center"}}>
        <style>
          {"body { width: 100%; height: 100vh; background-color: #EAFDFC;}"}
          {"@import url(https://fonts.googleapis.com/css2?family=Rowdies&display=swap);"}
          {"* { font-family: 'Rowdies', cursive; }"}
        </style>
        <div className=''>
          <h3 style={{ fontWeight: 'bold' }}>Counter App</h3>
          <div>
            <span style={{ fontSize: "8rem" }}>{counter}</span>
          </div>
          <div id="allBtns" className='d-flex p-2 justify-content-center'>
            <div className='d-flex flex-row w-30'>
              <Stack direction='horizontal' gap={3}>
                <Button onClick={decrease} variant='danger'>Increment</Button>
                <Button onClick={reset} variant='dark'>Reset</Button>
                <Button onClick={increase} variant='success'>Decrement</Button>
              </Stack>
            </div>
          </div>
          <div className='position-absolute bottom-0' style={{width: '100%'}}>
            <p>Copyright © 2023 Candra Setiawan</p>
          </div>
        </div>
      </div>
  );
}

export default App;
