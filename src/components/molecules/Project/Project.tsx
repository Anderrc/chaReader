import Image, { StaticImageData } from 'next/image';
import style from './Project.module.scss';

interface IPropsProject {
    img: {
        src: StaticImageData;
        alt: string;
    };

    href: string;
    title: string;
    description: string;
    subTitle: string;
}

const Project = (props: IPropsProject) => {
    const { img, href, title, description, subTitle } = props;

    return (
        <article className={style.project}>
            <a href={href} target="_blank" rel="nofollow noreferrer">
                <Image
                    src={img.src}
                    alt={img.alt}
                    className={style.project_logo}
                    loading="lazy"
                    placeholder="blur"
                />
                <main className={style.project_info}>
                    <h3>{title}</h3>
                    <small>{subTitle}</small>
                    <p>{description}</p>
                </main>
            </a>
        </article>
    );
};

export default Project;
