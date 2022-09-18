import React from 'react';
import style from './Project.module.css'
export type ProjectPropsType = {
    title: string
    description: string
}

export const Project = (props:ProjectPropsType) => {

    return (
        <div className={style.project}>
            <div className={style.image}>
                <button className={style.button}>View</button>
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
