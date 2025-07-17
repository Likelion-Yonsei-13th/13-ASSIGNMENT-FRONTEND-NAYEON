import React, { useState, useEffect } from 'react';
import AboutMe from './AboutMe';
import History from './History';
import Favorites from './Favorites';
import Contact from './Contact';
import '../App.css';
import Introduce from './Introduce';

const Portfolio = () => {
    const [page, setPage] = useState('home');
    const [name, setName] = useState('');
    const [timeGreeting, setTimeGreeting] = useState('');
    const [showGreeting, setShowGreeting] = useState(false);
    const [isTopVisible, setIsTopVisible] = useState(false);


    const handleClick = () => {
        const inputName = prompt('이름을 입력해주세요:');
        if (!inputName) return;

        setName(`${inputName}님 안녕하세요 😊`);

        const hour = new Date().getHours();
        if (hour < 6) setTimeGreeting('새벽에 방문해주셨군요!');
        else if (hour < 12) setTimeGreeting('좋은 아침입니다!');
        else if (hour < 18) setTimeGreeting('좋은 하루 보내고 계신가요?');
        else setTimeGreeting('오늘 하루도 수고 많으셨어요!');

        setShowGreeting(true);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsTopVisible(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };


    return (
        <div>
            <header className="portfolio-header">
                <span className="header-link" onClick={() => setPage('home')}>
                 I'm Nayeon Kim
                </span>
            </header>

            <nav className="portfolio-nav">
                <ul>
                    <li><button onClick={() => setPage('about')}>👩🏻 About me</button></li>
                    <li><button onClick={() => setPage('history')}>💻 History</button></li>
                    <li><button onClick={() => setPage('favorites')}>💜 Favorites</button></li>
                    <li><button onClick={() => setPage('contact')}>📞 Contact</button></li>
                </ul>
            </nav>

            <div className="portfolio-content">
                {page === 'home' && (
                    <>
                        <button onClick={handleClick}>HELLO</button>
                        {showGreeting && (
                            <p>
                                <span>{name}</span>
                                <br />
                                <span>{timeGreeting}</span>
                                <br />
                                13기 아기사자 김나연입니다
                            </p>
                        )}

                        <Introduce />
                    </>
                )}

                {page === 'about' && <AboutMe />}
                {page === 'history' && <History />}
                {page === 'favorites' && <Favorites />}
                {page === 'contact' && <Contact />}
            </div>

            <footer className="portfolio-footer">
                contact
                <br />
                📧 email: yeonamy@naver.com
                <br />
                📞 phone: 010-2893-7687
                <br />
                📱 instagram:
                <a href="https://www.instagram.com/nay3on_k/" target="_blank" rel="noreferrer">
                    nay3on_k
                </a>
            </footer>

            {isTopVisible && (
                <button className="top-button" onClick={scrollToTop}>
                    ↑ Top
                </button>
            )}
        </div>
    );
};

export default Portfolio;
