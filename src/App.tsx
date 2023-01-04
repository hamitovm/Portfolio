import React from 'react';
import './App.css';
import s from "./common/styles/mainCSS.module.css";
import logo from "./image/logo.png";
import photo from "./image/photo.png";
import {Project} from "./Project/Project";
import todolist_image from "./image/To_Do_List.png";
import social_network_image from "./image/social-network.jpg";
import no_name_project_image from "./image/no-name-project.png";

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

function App() {
    return (
        <div className={'app'}>
            <div className={s.main}>
                <header>
                    <div className={`${s.wrapper}`}>
                        <div className={`${s.mainHeader}`}>
                            <img className={s.logo} src={logo} alt={'main logo'}/>
                            <nav className={s.mainHeader__menu}>
                                <ul className={s.mainHeader__linkList}>
                                    <li className={s.mainHeader__link}><a href="#about">About</a></li>
                                    <li className={s.mainHeader__link}><a href="#projects">Projects</a></li>
                                    <li className={s.mainHeader__link}><a href="#contacts">Contacts</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </header>
                <main>
                    <section className={`${s.firstScreen} ${s.wrapper}`} id={'about'}>
                        <div className={s.first_screen__text}>
                            <h1 className={s.heading}>
                                Frontend developer
                            </h1>
                            <p className={s.subtitle_red}>Murat Khamitov</p>
                            <p className={s.text}>Kazan</p>
                        </div>
                        <img className={s.first_screen__image} src={photo} alt="developer"/>
                    </section>
                    <section className={`${s.technologies}`}>
                        <div className={`${s.technologies__wrapper}`}>
                            <h2 className={s.subtitle_alt}>Technologies</h2>
                            <ul className={s.technologies_list}>
                                <li className={s.technology_item}>HTML/CSS</li>
                                <li className={s.technology_item}>JavaScript/TypeScript</li>
                                <li className={s.technology_item}>React JS</li>
                                <li className={s.technology_item}>REST API</li>
                                <li className={s.technology_item}>Git</li>
                            </ul>
                        </div>
                    </section>
                    <section className={`${s.projects} ${s.wrapper}`} id={'projects'}>
                        <h2 className={s.subtitle}>Projects</h2>
                        <Project title={'Todolist'}
                                 desciption={loremIpsum}
                                 type={"left"}
                                 img={todolist_image}
                                 link={'https://www.google.ru/'}
                        />
                        <Project title={'Social Network'}
                                 desciption={loremIpsum}
                                 type={"right"}
                                 img={social_network_image}
                                 link={'google.com'}
                        />
                        <Project title={'No name'}
                                 desciption={loremIpsum}
                                 type={"left"}
                                 img={no_name_project_image}
                                 link={'google.com'}
                        />
                    </section>
                </main>
                <footer id={'contacts'}>
                    <div className={`${s.wrapper}`}>
                        <p className={s.subtitle_alt}>Contacts</p>
                        <ul className={s.contacts_list}>
                            <li className={s.contacts_item}><a href="https://mail.google.com/">hamitovm@gmail.com</a></li>
                            <li className={s.contacts_item}><a href="https://web.telegram.org/">Telegram</a></li>
                            <li className={s.contacts_item}><a href="https://github.com/hamitovm">GitHub</a></li>
                        </ul>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default App;
