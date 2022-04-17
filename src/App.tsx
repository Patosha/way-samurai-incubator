import React from 'react';
import './App.css';

function App() {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img
                    src="https://it-incubator.ru/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Flogo.8a063c2a.svg&w=256&q=75"
                    alt="logo"/>
            </header>
            <nav className='nav'>
                <ul>
                    <li>
                        Profile
                    </li>
                    <li>
                        Messages
                    </li>
                </ul>
            </nav>
            <div className='content'>
                Main content
            </div>
        </div>
    );
}

export default App;
