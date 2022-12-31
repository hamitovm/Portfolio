import React from 'react';
import './App.css';
import s from './common/styles/Container.module.css'
import logo from './image/logo.png'
import photo from './image/photo.png'
import {Project} from "./Project/Project";

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

function App() {
    return (
        <div className={s.app}>
            {/*<div className={s.wrapper}>*/}
            <header>
                <div className={s.wrapper}>
                    <div className={s.header}>
                        <div className={s.logo}>
                            <img src={logo} alt=""/>
                        </div>
                        <nav className={s.menu}>
                            <ul className={s.menu__item_list}>
                                <li className={s.menu__item}><a href="#">About</a></li>
                                <li className={s.menu__item}><a href="#">Projects</a></li>
                                <li className={s.menu__item}><a href="#">Contacts</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
            <main>
                <section>
                    <div className={s.wrapper}>
                        <div className={s.first_screen}>
                            <div className={s.first_screen__text}>
                                <h1 className={s.heading}>
                                    Frontend developer
                                </h1>
                                <p className={s.subtitle_red}>Murat Khamitov</p>
                                <p className={s.location}>Kazan</p>
                            </div>
                            <div className={s.first_screen__image}>
                                <img src={photo} alt=""/>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className={s.technologies_wrapper}>
                        <div className={s.wrapper}>
                            <div className={s.technologies}>
                                <p className={s.subtitle_alt}>Technologies</p>
                                <ul className={s.technologies_list}>
                                    <li className={s.technology_item}>HTML/CSS</li>
                                    <li className={s.technology_item}>JavaScript/TypeScript</li>
                                    <li className={s.technology_item}>React JS</li>
                                    <li className={s.technology_item}>REST API</li>
                                    <li className={s.technology_item}>Git</li>
                                </ul>
                            </div>
                        </div>
                    </div>


                </section>
                <section>
                    <div className={s.wrapper}>
                        <div className={s.projects_section}>
                            <p className={s.subtitle}>Projects</p>
                            <Project projectName={'Todolist'}
                                     text={loremIpsum}
                                     type={"left"}
                                     img={'#'}
                                     link={'https://www.google.ru/'}
                            />
                            <Project projectName={'Social Network'}
                                     text={loremIpsum}
                                     type={"right"}
                                     img={'#'}
                                     link={'google.com'}
                            />
                            <Project projectName={'Todolist'}
                                     text={loremIpsum}
                                     type={"left"}
                                     img={'#'}
                                     link={'google.com'}
                            />
                        </div>
                    </div>

                </section>
            </main>
            <footer>
                <div className={s.wrapper}>
                    <div className={s.contacts}>
                        <p className={s.subtitle_alt}>Contacts</p>
                        <ul className={s.contacts_list}>
                            <li className={s.contacts_item}><a href="#">Email: hamitovm@gmail.com</a></li>
                            <li className={s.contacts_item}><a href="#">Telegram</a></li>
                            <li className={s.contacts_item}><a href="#">GitHub</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
            {/*</div>*/}
        </div>
    );
}

export default App;
