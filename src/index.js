import React from 'react';
import ReactDOM from 'react-dom/client';

import { name,age } from "./person.js";
import message from "./message.js";


const myFirstElement = <h1>Hello React!</h1>

// how to make and then print each element of an array
// don't forget to render the result but changing root.render(myList)
const myArray = ['apple', 'banana', 'orange'];
const myList = myArray.map((item) => <p>{item}</p>)




const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(myList);
