import React from "react";
import s from './ProjectStyles.module.css'


export type PorjectPropsType = {
    type: 'left' | 'right'
    img: string
    title: string
    link: string
    desciption: string

}
export const Project = (props: PorjectPropsType) => {

    return (
        <div className={s.project}>
            <div className={s.project__image}>
                <img src={props.img} alt={`${props.title} project`}/>
            </div>
            <div className={s.project__textContainer}>
                <div className={s.project__text}>
                    <p className={s.project__title}>{props.title}</p>
                    <p className={s.project__description}>{props.desciption}</p>
                    <a className={s.project__link} href={props.link}>Read more</a>
                </div>
            </div>
        </div>
    )
}