import React from 'react';
import './App.css';
import News from './components/News/News';
import Card from './components/Card/Card';
import WeatherCard from './components/WeatherCard/WeatherCard';
import SearchCard from './components/SearchCard/SearchCard';
import Banner from './components/Banner/Banner';

const newsSections = [
  { text: 'Сейчас в СМИ', faded: false },
  { text: 'в Германии', faded: true },
  { text: 'Рекомендуем', faded: true },
];

const news = [
  { img: 'https://img.freepik.com/premium-vector/breaking-news-isolated-vector-icon-sign-of-main-news-on-white-background_545399-1205.jpg', text: 'news1'},
  { img: 'https://img.freepik.com/premium-vector/breaking-news-isolated-vector-icon-sign-of-main-news-on-white-background_545399-1205.jpg', text: 'news2'},
  { img: 'https://img.freepik.com/premium-vector/breaking-news-isolated-vector-icon-sign-of-main-news-on-white-background_545399-1205.jpg', text: 'news3'},
  { img: 'https://img.freepik.com/premium-vector/breaking-news-isolated-vector-icon-sign-of-main-news-on-white-background_545399-1205.jpg', text: 'news4'},
  { img: 'https://img.freepik.com/premium-vector/breaking-news-isolated-vector-icon-sign-of-main-news-on-white-background_545399-1205.jpg', text: 'news5'},
];

const currencies = [
  { title: 'USD MOEX 63,52', textSecondery: '+0.09' },
  { title: 'EUR MOEX 70.86', textSecondery: '+0.14' },
  { title: 'НЕФТЬ 64,90', textSecondery: '+1,63%' },
  { textSecondery: '...' },
];

const topRightCard = {
  img: 'https://documents.infourok.ru/47113dbe-05c0-4645-9b36-8b6fc4c0f747/0/slide_04.jpg',
  title: 'Работа над ошибками',
  text: 'Смотрите на Яндексе и запоминайте',
};

const GermanyMap = {
  title: 'Карта Германии',
  text: 'Расписания',
  href: 'https://example.com/',
};

const products = [
  { text: 'Видео', href: '#' },
  { text: 'Картинки', href: '#' },
  { text: 'Новости', href: '#' },
  { text: 'Карты', href: '#' },
  { text: 'Маркет', href: '#' },
  { text: 'Переводчик', href: '#' },
  { text: 'Эфир', href: '#' },
  { text: 'еще', href: '#' },
];

const banner = {
  src: 'https://img.freepik.com/free-vector/online-cinema-banner-with-open-clapper-board-and-film-strip_1419-2242.jpg?q=10&h=200',
  alt: 'Movie Time',
  href: 'https://example.com/',
}

/**
 * Главное приложение
 * @returns {JSX.Element} Элемент главного приложения
 */

function App() {
  return (
    <div className="App">
      <div className='header'>
        <News {...{newsSections, news, currencies}}/>
        <Card {...topRightCard} style={{width: '15rem'}}/>
      </div>
      
      <SearchCard {...{products}} />

      <Banner {...banner}/>

      <div className='footer'>
        <WeatherCard/>
        <Card {...GermanyMap}/>
        {/* Прочие специфичные карточки, содержащие InlineCard*/}
      </div>
    </div>
  );
}

export default App;
