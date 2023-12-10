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

  const products = [
    {
      title: 'Pashmina Credenza Silk',
      photo: '',
      price: 'Rp.45.000,-',
    },
    {
      title: 'Pleated Skirt Summer',
      photo: '',
      price: 'Rp.75.000,-',
    },
    {
      title: 'Pashmina Plisket',
      photo: '',
      price: 'Rp.35.000,-',
    },
    {
      title: 'Alwa Scarf',
      photo: '',
      price: 'Rp.35.000,-',
    },
    {
      title: 'Pashmina Ceruty',
      photo: '',
      price: 'Rp.40.000,-',
    },
    {
      title: 'Voal Scarf',
      photo: '',
      price: 'Rp.40.000,-',
    },
  ]

  return (
    <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      <div className="flex flex-wrap">
        {buttonLink.map((button, index, isDarkMode) =>
          <ButtonLink key={index} buttonLink={button} isDarkMode={isDarkMode} />)}
      </div>

      <div className='my-6'>
        <h1 className='text-2xl font-bold mx-3 my-1'>Showcase</h1>
        <div className='flex flex-wrap'>
          {products.map((item, index) =>
            <Showcase products={item} key={index} />)}
        </div>
      </div>

      <Footer></Footer>


    </div>
  );
}

export default App;
