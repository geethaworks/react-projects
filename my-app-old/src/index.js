import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
//import DiceRoll from './components/diceRoll';
//import Timer from './components/timer';
// import WordCounter from './components/wordCounter';
//import Unique from './components/uniqueMain/unique';
import ApiPro from './components/apiPro/apiPro';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<DiceRoll />*/}
    {/* <Timer />*/}
    {/*<WordCounter />*/}
    {/*<Unique />*/}
    <ApiPro />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
