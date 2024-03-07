import React from 'react';
import style from './SwitchMode.module.scss';

const SwitchMode = ({
    isDarkMode,
    setIsDarkMode
}: {
    isDarkMode: boolean;
    setIsDarkMode: (param: boolean) => void;
}) => {
    const randomID = 'switchMode-' + Math.random();

    return (
        <form
            className={` ${style.switchMode} ${isDarkMode ? style.switchMode_darkMode : 'theme-light'}`}
        >
            <label htmlFor={randomID}>
                {isDarkMode ? (
                    <i className="ri-sun-line"></i>
                ) : (
                    <i className="ri-moon-line"></i>
                )}
                <input
                    type="checkbox"
                    onClick={() => {
                        setIsDarkMode(!isDarkMode);
                    }}
                    id={randomID}
                    name="switchMode"
                />
            </label>
        </form>
    );
};

export default SwitchMode;
