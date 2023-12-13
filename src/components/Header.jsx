import React from 'react';
import profilephoto from '../assets/img/profile.jpg';
import sun from '../assets/img/light.svg'
import moon from '../assets/img/dark.svg'
import crown from '../assets/img/crown.svg'

function Header({ isDarkMode, toggleDarkMode }) {
    return (
        <>
            <div className={`relative h-20 mb-16 transition-all duration-300 z-1 ${isDarkMode ? "bg-[url('./assets/img/header-dark.svg')]" : "bg-[url('./assets/img/header-light.svg')]"}`}>
                <button onClick={toggleDarkMode} className={`absolute p-0.5 flex justify-end top-2 right-2 rounded-full ${isDarkMode ? 'bg-zinc-900' : 'bg-white'}`}>
                    {isDarkMode ? <img src={moon} className='w-5 h-5' /> : <img src={sun} className='w-5 h-5' />}
                </button>
                <img
                    src={profilephoto}
                    alt="Profile"
                    className={`absolute z-10 left-8 sm:left-4 w-18 h-18 rounded-full overflow-hidden mt-12 border-4 ${isDarkMode ? 'border-zinc-900' : 'border-white'}`}
                />
                <div className='absolute ml-18 sm:ml-12 pl-10 z-10 mt-14'>
                    <h1 className="text-2xl font-bold mt-6">AGTSHA ID</h1>
                    <p className="text-sm flex">Your Daily Hijab <span><img src={crown} alt='crown' className='w-3.5 h-3.5' /></span></p>
                </div>
            </div>

        </>
    );
}

export default Header;