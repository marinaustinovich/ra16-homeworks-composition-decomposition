import React from 'react'
import dayjs from 'dayjs';
import './NewsHeader.css'

/**
 * Компонент NewsHeader представляет собой блок с заголовком новостей.
 *
 * @component
 * @param {object} props - Свойства компонента.
 * @param {Array} props.newsSections - Массив объектов с информацией о разделах новостей.
 * @returns {JSX.Element} - Компонент NewsHeader.
 */

function NewsHeader({newsSections, ...props}) {
    return (
        <div className='news-header'>
            {newsSections.map((o, index) =>
            <a className={`h3 ${o.faded && 'faded'}`} href={o.href || '#'} key={index}>{o.text}</a>
            )}
            <div className='header-date'>{dayjs().locale('ru').format('D MMMM, dddd HH:mm')}</div>
        </div>   
    )
}


export default NewsHeader
