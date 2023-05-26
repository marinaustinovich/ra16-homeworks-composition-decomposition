import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

/**
 * Компонент Card представляет карточку с картинкой, заголовком,
 * текстом, дополнительным текстом и ссылкой.
 *
 * @component
 * @param {object} props - Свойства компонента.
 * @returns {JSX.Element} - Компонент Card.
 */
function Card({ img, title, text, textSecondery, href, className, ...props }) {
    return (
        <div {...props} className={`card ${className || ''}`}>
        <a href={href || '#'}>
            {img && <img className='card-image' src={img} alt=''/>}
            {title && <div className='card-title'>{title}</div>}
            {text && <div className='card-text-main'>{text}</div>}
            {textSecondery && <div className='card-text-secondery'>{textSecondery}</div>}
        </a>
        </div>
    );
}

Card.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    textSecondery: PropTypes.string,
    href: PropTypes.string,
    className: PropTypes.string,
};

export default Card;