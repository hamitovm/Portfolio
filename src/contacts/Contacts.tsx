import React from 'react';
import style from './Contacts.module.css'
import styleContainer from '../common/styles/Container.module.css'

export const Contacts = () => {
    return (
        <div className={style.contacts}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h3 className={style.title}>
                    Contacts
                </h3>
                <form className={style.form} action="#">
                    <input className={style.contactsInput} type="text"/>
                    <input className={style.contactsInput} type="text"/>
                    <textarea className={style.contactsTextarea} name="textarea" id="" cols={30} rows={5}></textarea>
                    <input className={style.contactsButton} type="submit"/>
                </form>
            </div>
        </div>
    );
}
