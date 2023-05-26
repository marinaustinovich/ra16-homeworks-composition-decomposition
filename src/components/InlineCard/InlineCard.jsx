import React from 'react';
import Card from '../Card/Card';
import './InlineCard.css';

/**
 * Компонент InlineCard представляет карточку в виде строки.
 *
 * @component
 * @param {object} props - Свойства компонента.
 * @returns {JSX.Element} - Компонент InlineCard.
 */

function InlineCard(props) {
    return (
        <Card {...props} className='inline-card'/>
    );
}

export default InlineCard;