import React, {useState} from "react";
import {Dropdown} from "react-bootstrap";

import './LanguageDropdown.css';

const LanguageDropdown = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('en'); // Устанавливаем начальный выбранный язык

    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
        // Здесь можно выполнить дополнительные действия при изменении языка, например, изменить переводы на странице
    };

    return (
        <Dropdown className={'dropdown-language'}>
            <Dropdown.Toggle variant="light" id="dropdown-language" className="nav-link mr-3 fw-bold">
                <img src={`/img/${selectedLanguage}.png`} alt=""/>
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item onClick={() => handleLanguageChange('en')} className={selectedLanguage === 'English' ? 'active' : ''}>
                    <img src="/img/en.png" alt="English" className="mr-1" /> English
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleLanguageChange('ru')} className={selectedLanguage === 'Russian' ? 'active' : ''}>
                    <img src="/img/ru.png" alt="Russian" className="mr-1" /> Russian
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}
export default LanguageDropdown;