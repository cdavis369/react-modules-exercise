import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {choice, remove} from "./helpers.js";
import foods from "./foods.js";
import App from './App';
import reportWebVitals from './reportWebVitals';


const randomFruit = choice(foods);
console.log(`I'd like one ${randomFruit}, please.`);
console.log(`Here you go: ${randomFruit}`);
console.log("Delicious! May I have another?");
remove(foods, randomFruit);
console.log(`I'm sorry, we're all out. We have ${foods.length} left`);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
