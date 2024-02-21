import React from 'react';
import ReactDOM from 'react-dom/client';

import Car from './Car.js';

const myelement = (
    <table>
      <tr>
        <th>Name</th>
      </tr>
      <tr>
        <td>John</td>
      </tr>
      <tr>
        <td>Elsa</td>
      </tr>
    </table>
  );

/*
class Car extends React.Component {
    render() {
        return <h2>Hi, I am a Car!</h2>;
    }
}
*/

function Football() {
    const shoot = (a, b) => {
      alert(b.type);
      /*
      'b' represents the React event that triggered the function,
      in this case the 'click' event
      */
    }
  
    return (
      <button onClick={(event) => shoot("Goal!", event)}>Take the shot!</button>
    );
}

/* This is a expanded way to get root
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Football />);
