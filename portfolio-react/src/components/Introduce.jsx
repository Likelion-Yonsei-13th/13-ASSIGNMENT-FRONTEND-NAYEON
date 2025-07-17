import React, { useRef, useState } from 'react';
import '../App.css';

const IntroEditor = () => {
    const inputRef = useRef(null);
    const [intro, setIntro] = useState('');
    const [showInput, setShowInput] = useState(false);

    const handleButtonClick = () => {
        setShowInput(true); // ✅ input 보이게 만들고
        setTimeout(() => inputRef.current?.focus(), 0);
    };

    return (
        <div className="intro-editor">
            <button onClick={handleButtonClick} className="intro-button">자기소개 입력</button>

            {showInput && (
                <>
                    <input
                        ref={inputRef}
                        value={intro}
                        onChange={(e) => setIntro(e.target.value)}
                        placeholder="한 줄 소개를 입력하세요"
                        className="intro-input"
                    />
                    <p className="intro-output">한 줄 소개: {intro}</p>
                </>
            )}
        </div>
    );
};

export default IntroEditor;
