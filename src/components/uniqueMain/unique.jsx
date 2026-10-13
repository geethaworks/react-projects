import react, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import DiceRoll from '../diceRoll/diceRoll';
import WordCounter from '../wordCounter/wordCounter';
import Timer from '../timer/timer';


const Unique = () => {
    // const [data, setData] = useState("");

    return (
        //     <>
        //         <a onClick={() => {
        //             setData('dice')
        //         }}>dice</a>
        //         <br />
        //         <br />
        //         <a onClick={() => {
        //             setData('word')
        //         }}>word</a>
        //         <br />
        //         <br />
        //         <a onClick={() => {
        //             setData('timer')
        //         }}>timer</a>
        //         {
        //             data == 'dice' && (<DiceRoll />)
        //         }{
        //             data == 'word' && (<WordCounter />)
        //         }{
        //             data == 'timer' && (<Timer />)
        //         }
        //   </>
        <div>
            <BrowserRouter>
                <div>
                    <nav>
                        <Link to="/dice-roll">Dice Roll</Link><br />
                        <Link to="/word-counter">Word Counter</Link><br />
                        <Link to="/timer">Timer</Link>
                    </nav>
                    <Routes>
                        <Route path="/dice-roll" element={<DiceRoll />} />
                        <Route path="/word-counter" element={<WordCounter />} />
                        <Route path="/timer" element={<Timer />} />
                    </Routes>
                </div>

            </BrowserRouter>
        </div>
    );
};

export default Unique;