import React from 'react';
import './App.css';
import profilephoto from './assets/img/profile.jpg';
import sun from './assets/img/light.svg'
import moon from './assets/img/dark.svg'

function Header({ profile, isDarkMode, toggleDarkMode }) {
    return (
        <>
            <div className="relative h-20 mb-16 bg-[url('./assets/img/header-background.svg')]">
                <button onClick={toggleDarkMode} className={`absolute p-0.5 z-10 flex justify-end top-2 right-1 lg:right-4 rounded-full ${isDarkMode ? 'bg-zinc-900' : 'bg-white'}`}>
                    {isDarkMode ? <img src={moon} className='w-5 h-5' /> : <img src={sun} className='w-5 h-5' />}
                </button>
                <img
                    src={profilephoto}
                    alt="Profile"
                    className={`absolute z-10 left-8 sm:left-4 w-18 h-18 rounded-full overflow-hidden mt-12 border-4 ${isDarkMode ? 'border-zinc-900' : 'border-white'}`}
                />
                <div className={`absolute ml-18 sm:ml-12 pl-10 z-10 mt-14 ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>
                    <h1 className="text-2xl font-bold mt-6">{profile.nama}</h1>
                    <p className="text-sm">{profile.bio}</p>
                </div>
            </div>

        </>
    );
}

export default Header;