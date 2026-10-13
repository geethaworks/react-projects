import react from 'react';
import './timer.css';

const Timer = () => {
    const [time, setTime] = react.useState(0);
    const [isRunning, setIsRunning] = react.useState(false);
    const intervalRef = react.useRef(null);

    react.useEffect(() => {
        if (!isRunning) return;

        intervalRef.current = setInterval(() => {
            setTime((prevTime) => prevTime + 1);
        }, 1000);

        return () => clearInterval(intervalRef.current);

    }, [isRunning]);

    const formatTime = (value) => String(value).padStart(2, '0');
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return (
        <div className='container'>
            <h1>Timer</h1>
            <div>
                <h2>
                    <span>{formatTime(hours)}</span>
                    <span>:</span>
                    <span>{formatTime(minutes)}</span>
                    <span>:</span>
                    <span>{formatTime(seconds)}</span>
                </h2>
            </div>
            <div className='button-container'>
                <button className='timer-button' onClick={() => {
                    setTime(0);
                    setIsRunning(false);
                }}>Reset</button>
                <button className='timer-button' onClick={() => setIsRunning((prev) => !prev)}>
                    {isRunning ? 'Stop' : 'Start'}
                </button>
            </div>
        </div>
    );
};

export default Timer;