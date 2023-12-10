import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import ButtonLink from './ButtonLink';
import Showcase from './Showcase';
import Footer from './Footer';
import whatsapp from './assets/img/whatsapp.svg'
import shopee from './assets/img/shopee.png'
import tokopedia from './assets/img/tokopedia.svg'
import lazada from './assets/img/icon-lazada.png'
import instagram from './assets/img/instagram.svg'
import tiktok from './assets/img/tiktok.svg'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const buttonLink = [
    {
      name: 'WhatsApp',
      img: whatsapp,
      url: '',
    },
    {
      name: 'Shopee',
      img: shopee,
      url: '',
    },
    {
      name: 'Tokopedia',
      img: tokopedia,
      url: '',
    },
    {
      name: 'Lazada',
      img: lazada,
      url: '',
    },
    {
      name: 'Instagram',
      img: instagram,
      url: '',
    },
    {
      name: 'Tiktok',
      img: tiktok,
      url: '',
    },
  ]

  return (
    <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <div className="flex flex-wrap">
        {buttonLink.map((button, index, isDarkMode) =>
          <ButtonLink key={index} buttonLink={button} isDarkMode={isDarkMode} />)}
      </div>
      <Showcase></Showcase>
      <Footer></Footer>


    </div>
  );
}

export default App;
