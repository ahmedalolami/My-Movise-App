import { useState } from 'react';
import './Maincontent.css'
import Card from './Cart'
import img1 from "../assets/Al-Araf.jpg"
import img2 from "../assets/Fastx.jpg"
import img3 from "../assets/kingdom.jpg"
import img4 from "../assets/images.jpg"

function MainContent() {
  const[search,setsearch]= useState('');
  const cardsData = [
    { 
      image: 'https://media.linkonlineworld.com/img/original/2017/12/25/2017_12_25_16_24_43_756.jpg',
      title: 'ALBAH',
      description: 'This is the filme.'
    },
    { 
      image: img1,
      title: 'Al-Arf',
      description: 'This is the filme.'
    },
    { 
      image:img2,
      title: 'Fastx',
      description: 'This is the filme.'
    },
    { 
      image: img3,
      title: 'kingdom',
      description: 'This is the filme.'
    }
    ,
  
    { 
      image:img4,
      title: 'The Conjuring',
      description: 'This is the filme.'
    },
    { 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMDmyO69ib8ggN-X2G8seBkt-syELsZJcPVQ&s',
      title: 'GLASS',
      description: 'This is the filme.'
    },
    { 
      image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjU0FFrvrBl0LwKUt2ydmHCx1FYhvBrsAv4dyJRt7O3Vu3kVUIua20Dy4dHe4LmlXPuIxzioLRttTkK_KUXr1vL0UZwMoXV_77XquIfRzcKftU9eOxM71Z2V8py9zQ6HKkenPrbEBJwgYLMJ7ZbvUC8TI9g9VgQZW_9pm32uHd40QedCb8YsrFMkZaWIg/s737/IMG_20220825_022257_944.jpg',
      title: 'FRRY',
      description: 'This is the filme.'
    },
    { 
      image: 'https://media0084.elcinema.com/uploads/_640x_6fcff3302c068fb50cdc180b2b10202b52cda02f151f5c3ec26a4fc480883aa8.jpg',
      title: 'BLADE',
      description: 'This is the filme.'
    }
  ];
  // فلترة الكروت حسب البحث
  const filteredCards = cardsData.filter(card =>
    card.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <main className="main-content">

      <section id="home">
    <h1>Welcome to my movies!</h1>
    <p>You will find all the new and exclusive movies you love.</p>
  </section>
  <input 
  type="text"
  placeholder="...search movies"
  value={search}
  onChange={e=>setsearch(e.target.value)}
  className='search-input'
  />
      <div className="cards"> 
        {filteredCards.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
       <section id="about">
    <h1>About Us</h1>
    <p>This is the about section.</p>
  </section>
 
    </main>
  )
}

export default MainContent