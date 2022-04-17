import React from 'react';
import './App.css';

function App() {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img className='logo'
                     src="https://cdn.pixabay.com/photo/2020/12/05/06/45/flag-5805228__340.png"
                     alt="logo"/>
            </header>
            <nav className='nav'>
                <ul className='navList'>
                    <li>
                        <a className='navLink' href="/">
                            Profile
                        </a>
                    </li>
                    <li>
                        <a className='navLink' href="/">
                            Messages
                        </a>
                    </li>
                    <li>
                        <a className='navLink' href="/">
                            News
                        </a>
                    </li>
                    <li>
                        <a className='navLink' href="/">
                            Music
                        </a>
                    </li>
                    <li>
                        <a className='navLink' href="/">
                            Settings
                        </a>
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
