import React from 'react';
import style from './Project.module.css'
export type ProjectPropsType = {
    title: string
    description: string
}

export const Project = (props:ProjectPropsType) => {

    return (
        <div className={style.project}>
            <div className={style.imageContainer}>
                <button className={style.projectButton}>View</button>
                {/*<a href="#" className={style.projectButton}>View</a>*/}
            </div>
            <h3 className={style.title}>
                {props.title}
            </h3>
            <span className={style.description}>
                {props.description}
            </span>

        </div>
    );
}
