import React, { useContext, useState } from 'react';
import './Main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/context';

const Main = () => {
    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);
    const [theme, setTheme] = useState('light');

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            onSent();
        }
    };

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <div className={`main ${theme}`}>
            <div className="nav">
                <p>Gemini-GPT</p>
                <button title='Switch the theme' className = 'theme-toggle' onClick={toggleTheme}>
                        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                    </button>
                <img title=" Created and Designed by Rajdip" src={assets.user_icon} alt='image not found' />
            </div>
            <div className="main-container">
                {!showResult ? (
                    <>
                        <div className="greet">
                            <p><span>Hello, Raj.</span></p>
                            <p className='greetings'>How can I assist you today?</p>
                        </div>
                        <div className="cards">
                            <div className="card">
                                <p>Suggest some beautiful places to see on an upcoming road trip</p>
                                <img src={assets.compass_icon} alt="compass" />
                            </div>
                            <div className="card">
                                <p>Write a beautiful English poem about the beauty of nature</p>
                                <img src={assets.message_icon} alt="message" />
                            </div>
                            <div className="card">
                                <p>Briefly summarize the concept of Urban planning</p>
                                <img src={assets.bulb_icon} alt="bulb" />
                            </div>
                            <div className="card">
                                <p>Write the code for Binary search</p>
                                <img src={assets.code_icon} alt="code" />
                            </div>
                        </div>
                    </>
                ) : (
                    <div className='result'>
                        <div className="result-title">
                            <img src={assets.user_icon} alt="" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="" />
                            {loading ? (
                                <div className='loader'>
                                    <hr className='hr1' />
                                    <hr className='hr2' />
                                    <hr className='hr3' />
                                </div>
                            ) : (
                                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            )}
                        </div>
                    </div>
                )}
                <div className="main-bottom">
                    <div className="search-box">
                        <input
                        title='Enter a message'
                            onChange={(e) => setInput(e.target.value)}
                            value={input}
                            type="text"
                            placeholder='Enter a prompt here'
                            onKeyPress={handleKeyPress}
                        />
                        <div className='imgss'>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            {input ? <img onClick={() => onSent()} title="Send Message" src={assets.send_icon} alt="" /> : null}
                        </div>
                    </div>
                    <p className='bottom-info'>
                        Gemini may display inaccurate info, including about people, so double-check its responses. Powered by Gemini AI
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Main;
