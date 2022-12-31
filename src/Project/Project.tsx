import s from '../common/styles/Container.module.css'
import React from "react";

export type PorjectPropsType = {
    type: 'left' | 'right'
    img: string
    projectName: string
    link: string
    text: string

}
export const Project = (props: PorjectPropsType) => {
    const projectClassName = `${s.project} ${props.type === 'left'
        ? s.project__left
        : s.project__right}`

    const projectTextClassName = `${s.project__text} ${props.type === 'left'
        ? s.project__text__left
        : s.project__text__right}`

    const projectImageClassName = `${s.project__image} ${props.type === 'left'
        ? s.project__image__left
        : s.project__image__right}`

    return (
        <div className={projectClassName}>
            {props.type === 'left' &&
                <div className={projectImageClassName}>
                    <img src={props.img} alt=""/>
                </div>}
            <div className={projectTextClassName}>
                <p className={s.project_title}>{props.projectName}</p>
                <p className={s.project__desc}>{props.text}</p>
                <a href={props.link}>Read more</a>
            </div>
            {props.type === 'right' &&
                <div className={projectImageClassName}>
                    <img src={props.img} alt=""/>
                </div>}
        </div>
    )
}