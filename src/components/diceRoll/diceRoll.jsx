import react from 'react';
import './diceRoll.css';
const DiceRoll = () => {
  
    return (
        <div className='main'>  
        <h1>Dice Roll</h1>
        <div className='dice'>
            <span><h1>.</h1></span>
        </div>
        <div className='dice'>
            <span><h1>.</h1></span>
        </div>
        <button onClick={() => {
            const rollValue1 = Math.floor(Math.random() * 6) + 1;
            const rollValue2 = Math.floor(Math.random() * 6) + 1;
            const diceElements = document.querySelectorAll('.dice span h1');
            diceElements[0].textContent = '';
            diceElements[1].textContent = '';
            for(let i=0;i<rollValue1;i++){
                diceElements[0].textContent += '.';
            }
            for(let i=0;i<rollValue2;i++){
                diceElements[1].textContent += '.';
            }
           //diceElements[0].textContent = '.'.repeat(rollValue1);
           //diceElements[1].textContent = '.'.repeat(rollValue2);
            
        }}>Roll</button>
        
        </div>
)};

export default DiceRoll;