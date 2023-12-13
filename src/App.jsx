import React, { useState } from 'react';

import Header from './components/Header';
import ButtonLink from './components/ButtonLink';
import Showcase from './components/Showcase';
import Footer from './components/Footer';
import Testi from './components/Testi';

import whatsapp from './assets/img/whatsapp.svg'
import shopee from './assets/img/shopee.png'
import tokopedia from './assets/img/tokopedia.svg'
import lazada from './assets/img/icon-lazada.png'
import instagram from './assets/img/instagram.svg'
import tiktok from './assets/img/tiktok.svg'
import alwa from './assets/img/alwa.jpg'
import ceruty from './assets/img/ceruty.jpg'
import silk from './assets/img/silk.jpg'
import skirt from './assets/img/skirt.jpg'
import plisket from './assets/img/plisket.jpg'
import voal from './assets/img/voal.jpg'
import amirathallya from './assets/img/amirathallya.jpg'
import ifqaadl from './assets/img/ifqaadl.jpg'
import tsaniaawk from './assets/img/tsaniaawk.jpg'
import sahiland from './assets/img/sahiland.jpg'
import nisasilha from './assets/img/nisasilha.jpg'
import zemogima from './assets/img/zemogima.jpg'


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
      title: 'Credenza Silk',
      photo: silk,
      price: 'Rp.45.000,-',
    },
    {
      title: 'Summer Skirt',
      photo: skirt,
      price: 'Rp.75.000,-',
    },
    {
      title: 'Pleated Pashmina',
      photo: plisket,
      price: 'Rp.35.000,-',
    },
    {
      title: 'Alwa Scarf',
      photo: alwa,
      price: 'Rp.35.000,-',
    },
    {
      title: 'Pashmina Ceruty',
      photo: ceruty,
      price: 'Rp.40.000,-',
    },
    {
      title: 'Voal Scarf',
      photo: voal,
      price: 'Rp.40.000,-',
    },
  ]

  const testimonialData = [
    {
      uname: '@amirathallya',
      content: 'Gatau senyaman itu seharian pake hijab dari @agtsha.id udah nyaman terus murah bangettttttttt mo nangis rasanya cinta deh',
      image: amirathallya,
    },
    {
      uname: '@ifqaadl',
      content: 'Kerudungnya tu super nyamannn, murah dan gampang diatur, pokonya recomended bangett dehh!!',
      image: ifqaadl,
    },
    {
      uname: '@zemogima',
      content: 'Gemoii bgt pashminanya sukaaa @agtsha.id',
      image: zemogima,
    },
    {
      uname: '@tsaniaawk',
      content: 'sukaak banget sama bahannyaa, lembut banget ini mah trus gampang diatur bangett, ah pokoknya mah suka bgt lah sama kerudung nyaaa',
      image: tsaniaawk,
    },
    {
      uname: '@sahiland',
      content: 'Fyi, harganya murah-murah bgt! Coba aja bandingin sama olshop lain. Kalo kualitas mah gausah ditanya, gakalah ko sama olshop lain yg ngasi harga sampe 2x lipat. Insya Allah trusted karena ini punya temenku tapi ini truly honest review kok tanpa dibuat-buat!',
      image: sahiland,
    },
    {
      uname: '@nisasilha',
      content: 'Jilbabnya belum aku setrika sama sekali tapi langsung rapih dipakenya Cocok juga buat aku yang wajahnya tembem jadi agak tirusan karena gak perlu pake jarum pentul',
      image: nisasilha,
    },

  ];

  return (
    <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      <div className="flex flex-wrap">
        {buttonLink.map((button, index, isDarkMode) =>
          <ButtonLink key={index} buttonLink={button} isDarkMode={isDarkMode} />)}
      </div>

      <div className='flex flex-wrap my-6'>

        <div className='w-2/3 md:w-full'>
          <h1 className='text-2xl font-bold mx-3 my-1'>Showcase</h1>
          <div className='flex flex-wrap'>
            {products.map((item, index) =>
              <Showcase products={item} key={index} />)}
          </div>
        </div>

        <div className='w-1/3 md:w-full border-l border-rose-200 px-4'>
          <h1 className='text-2xl font-bold mx-3 my-3'>Testimoni</h1>
          {testimonialData.map((testimonial, index) => (
            <Testi key={index} testimonial={testimonial} />
          ))}
        </div>

      </div>

      <Footer></Footer>


    </div>
  );
}

export default App;
