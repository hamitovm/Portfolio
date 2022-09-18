import React from 'react';
import style from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";

export const Skills = () => {
    const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>
                    Skills
                </h2>
                <div className={style.skills}>
                    <Skill title={'HTML'} description={loremIpsum}/>
                    <Skill title={'CSS'} description={loremIpsum}/>
                    <Skill title={'JavaScript'} description={loremIpsum}/>
                </div>
            </div>
        </div>
    );
}
