import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import ButtonLink from './ButtonLink';
import Showcase from './Showcase';
import Footer from './Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const mockProfile = {
    nama: 'AGTSHA ID',
    bio: 'Your Daily Hijab',
  };

  const buttonLink = [
    {
      name: 'WhatsApp',
      img: '',
      url: '',
    },
    {
      name: 'Shopee',
      img: '',
      url: '',
    },
    {
      name: 'Tokopedia',
      img: '',
      url: '',
    },
    {
      name: 'Lazada',
      img: '',
      url: '',
    },
    {
      name: 'Instagram',
      img: '',
      url: '',
    },
    {
      name: 'Tiktok',
      img: '',
      url: '',
    },
  ]

  return (
    <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
      <Header profile={mockProfile} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <div className="flex flex-wrap">
        {buttonLink.map((button, index) =>
          <ButtonLink key={index} buttonLink={button} />)}
      </div>
      <Showcase></Showcase>
      <Footer></Footer>


    </div>
  );
}

export default App;
