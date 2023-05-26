import React from 'react';
import PropTypes from 'prop-types';
import './Banner.css';

/**
 * Компонент Banner представляет баннер с изображением и ссылкой.
 *
 * @component
 * @param {object} props - Свойства компонента.
 * @param {string} props.src - URL изображения.
 * @param {string} props.href - URL ссылки.
 * @param {string} props.alt - Альтернативный текст для изображения.
 * @returns {JSX.Element} - Компонент Banner.
 */
function Banner({href, src, alt}) {
    return (
        <a href={href}>
            <img src={src} alt={alt} className='banner'/>
        </a>
    )
}

Banner.propTypes = {
    src: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
}

export default Banner