import React from 'react';
import style from './CardExperience.module.scss';
import { Each } from 'components/utils/Each';

interface ICardExperience {
    title: string;
    place: string;
    date: string;
    description: string;
    skills?: string[];
}
const CardExperience = (props: ICardExperience) => {
    const { title, place, date, description, skills } = props;

    return (
        <article className={style.experience}>
            <header className={style.experience_header}>
                <h4>{title}</h4>
                <small>{place}</small>
                <small>{date}</small>
            </header>
            <main className={style.experience_container}>
                <h5>Descripción</h5>
                <p>{description}</p>
            </main>
            <footer className={style.experience_footer}>
                {skills && (
                    <Each
                        of={skills}
                        render={(item: any) => <span>{item}</span>}
                    />
                )}
            </footer>
        </article>
    );
};

export default CardExperience;
