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

function Garage() {
    return (
        <>
            <h1>Who lives in my Garage?</h1>
            <Car />
        </>
    );
}

/* This is a expanded way to get root
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);
