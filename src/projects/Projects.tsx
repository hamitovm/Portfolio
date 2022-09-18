import React from 'react';
import style from './Projects.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Project} from "./project/Project";


export const Projects = () => {
    const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '

    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>
                    Projects
                </h2>
                <div className={style.projects}>
                    <Project title={'TodoList'} description={loremIpsum}/>
                    <Project title={'Social Network'} description={loremIpsum}/>
                </div>
            </div>
        </div>
    );
}
