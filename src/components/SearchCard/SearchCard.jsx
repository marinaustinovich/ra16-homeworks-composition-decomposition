import React, { useState } from 'react'
import PropTypes from 'prop-types'
import SearchForm from '../SearchForm/SearchForm';
import './SearchCard.css';

/**
 * Компонент SearchForm отображает поисковую строку.
 *
 * @component
 * @param {object} props - Свойства компонента.
 * @param {string} props.value - Значение поисковой строки.
 * @param {function} props.onChange - Обработчик изменения значения поисковой строки.
 * @param {function} props.onSubmit - Обработчик отправки формы поиска.
 * @param {string} props.className - Классы для стилизации компонента.
 * @returns {JSX.Element} - Компонент SearchForm.
 */

function SearchCard(props) {
    const {products} = props;
    const [value, setValue] = useState('');

    return (
        <div className='search'>
            <img className='' src='https://whoiswho.obs.ru-moscow-1.hc.sbercloud.ru/images/company/6116/93005E05-57F2-439D-8034-04118DDAE566.jpg' alt='Яндекс'/>
            <div className='search-body'>
                <div className='search-links'>
                    {products.map((o, index) =>
                    <a className={`h4 ${o.faded && 'faded'}`} href={o.href || '#'} key={index}>{o.text}</a>
                    )}
                </div>
                <SearchForm className='form' value={value} onChange={(value) => setValue(value)} onSubmit={()=>{}}/>
                <div className='search-footer'>
                    <span>{'Найдется всё. Например, '}</span>
                    <span className='faded'>{'фаза луны сегодня'}</span>
                </div>
            </div>
        </div>
    )
}

SearchCard.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            href: PropTypes.string.isRequired,
            })
    ).isRequired,
}

export default SearchCard
