'use client';
import SwitchMode from 'components/components/atoms/SwitchMode/SwitchMode';
import useThemeDetector from 'components/hooks/useThemeDetector';
import React, { useEffect, useState } from 'react';
import style from './Layout.module.scss';

function Layout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const theme = useThemeDetector();

    useEffect(() => {
        setIsDarkMode(theme);
    }, []);

    return (
        <div
            className={`${style.container} theme ${isDarkMode ? 'theme-dark' : 'theme-light'}`}
        >
            <header className={style.header}>
                <h1 className={style.header_logo}>ChaReader</h1>
                <div className={style.header_navbar}>
                    <div className={style.header_navbar_actions}>
                        <SwitchMode
                            isDarkMode={isDarkMode}
                            setIsDarkMode={setIsDarkMode}
                        />
                        <button
                            className={`${style.header_navbar_actions_trigger} ${
                                toggleMenu &&
                                style.header_navbar_actions_trigger_active
                            }`}
                            onClick={() => {
                                setToggleMenu(!toggleMenu);
                            }}
                        >
                            Open menu
                        </button>
                    </div>

                    <nav
                        className={` ${style.header_navbar_menu} ${
                            toggleMenu && style.header_navbar_menu_active
                        }`}
                    >
                        <ul className={style.nav}>
                            <li className={style.item}>
                                <a
                                    href="#inicio"
                                    onClick={() => {
                                        setToggleMenu(false);
                                    }}
                                >
                                    Inicio{' '}
                                </a>
                            </li>

                            <li className={style.actions}>
                                <SwitchMode
                                    isDarkMode={isDarkMode}
                                    setIsDarkMode={setIsDarkMode}
                                />
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main className={style.main}>
                {children}
                <footer className={style.main_footer}>
                    Developed by{' '}
                    <b>
                        <a
                            href="https://www.instagram.com/andercdev/"
                            target="_blank"
                            rel="noreferrer nofollow"
                        >
                            Anderson Castaño
                        </a>{' '}
                    </b>
                    2024{' '}
                </footer>
            </main>
        </div>
    );
}

export default Layout;
