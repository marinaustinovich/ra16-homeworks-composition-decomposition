import React from 'react';
import {nanoid} from 'nanoid';
import Card from '../Card/Card';
import './WeatherCard.css';

/**
 * Компонент WeatherCard отображает информацию о погоде.
 *
 * @component
 * @param {object} props - Свойства компонента.
 * @param {string} props.className - Классы для стилизации компонента.
 * @param {string} props.title - Заголовок карточки.
 * @param {Array} props.text - Содержимое карточки.
 * @returns {JSX.Element} - Компонент WeatherCard.
 */

function WeatherCard(props) {
    return (
        <Card
            {...props}
            className='weather-card'
            title='Погода'
            text={[
                <img className='weather-pic' src='https://png.pngtree.com/png-vector/20191002/ourmid/pngtree-heavy-rain-icon-in-cartoon-style-png-image_1784630.jpg' alt='rainy' key={nanoid()} />,
                <span className='weather-temp' key={nanoid()}>+17°</span>,
                <div className='weather-text' key={nanoid()}>Утром +17, днём +20</div>,
            ]}
        />
    );
}

export default WeatherCard;