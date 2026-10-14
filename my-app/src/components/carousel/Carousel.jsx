import { useState, useEffect, useRef } from 'react';
import './carousel.css'

const Carousel = ({ imageUrls, title }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const timeRef = useRef(null)
    useEffect(() => {
        timeRef.current = setInterval(handleNext, 3000)
        return () => clearInterval(timeRef.current)
    }, [])
    const resetTimer = () => {
        clearInterval(timeRef.current)
        timeRef.current = setInterval(handleNext, 3000)
    }

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % imageUrls.length);
        
    };

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + imageUrls.length) % imageUrls.length);
        //resetTimer();
    };

    return (
        <div className='main-carousel'>
            <div className='carousel-container'>
                <button
                    className="image-button"
                    onClick={() => {
                        handlePrevious()
                        resetTimer()
                    }}>
                    <strong> &lt; </strong>
                </button>
                <img
                    alt={title}
                    style={{ width: '12rem', height: '12rem' }}
                    src={imageUrls[currentIndex]}
                />
                <button
                    className="image-button"
                    onClick={() => {
                        handleNext()
                        resetTimer()
                    }}>
                    <strong> &gt; </strong>
                </button>
            </div>
            <div className='carousel-indicator'>
                {
                    imageUrls.map((_, i) => (
                        <span key={i}
                            className={`indicator ${i===currentIndex?"active":""}`}
                            onClick={() => {
                                setCurrentIndex(i)
                                resetTimer()
                            }} />
                    ))
                }
            </div>
        </div>
    );
};

export default Carousel;
