import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

const name = <h1> Daniel Hartley </h1>
const googleImg = <img alt='chaf' src="C:\Users\Daniel_Hartley\Projects\react\daniel-test-app\src\pictures\AlternateRealityChad.png" />


ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  googleImg,
  document.getElementById('root'),
);


