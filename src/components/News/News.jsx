import React from 'react'
import InlineCard from '../InlineCard/InlineCard';
import './News.css'
import NewsHeader from '../NewsHeader/NewsHeader';

/**
 * Компонент News представляет блок с новостями.
 *
 * @component
 * @param {object} props - Свойства компонента.
 * @param {Array} props.newsSections - Массив объектов с информацией о разделах новостей.
 * @param {Array} props.news - Массив объектов с информацией о новостях.
 * @param {Array} props.currencies - Массив объектов с информацией о курсах валют.
 * @returns {JSX.Element} - Компонент News.
 */

function News({newsSections, news, currencies, ...props}) {
    return (
        <div className='news'> {/* можно завернуть в компонент */}
            <NewsHeader newsSections={newsSections} />
            <div className='news-body'>
                {news.map((o, index) => <InlineCard {...o} key={index}/>)}
            </div>
            <div className='news-footer'>
                {currencies.map((o, index) => <InlineCard {...o} key={index}/>)}
            </div>
        </div>
    )
}


export default News
