import React from "react";

export const Navbar = () => {
    return (
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
    )
}