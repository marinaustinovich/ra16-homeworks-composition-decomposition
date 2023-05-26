import React from 'react';
import PropTypes from 'prop-types';
import './SearchForm.css';

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

function SearchForm({ value, onChange, onSubmit, className }) {
    return (
        <form className={className + ' search-form'} onSubmit={onSubmit}>
            <input
                className='search-input'
                name='request'
                type='text'
                onChange={(evt) => onChange(evt.target.value)}>
            </input>
            <img className='search-keyboard' src='https://cdn-icons-png.flaticon.com/512/6329/6329376.png' alt='search keyboard'/>
            <button type='submit'>{'Найти'}</button>
        </form>
    );
}

SearchForm.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
}

export default SearchForm;
