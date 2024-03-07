import Image from 'next/image';
import foto from '../../../assets/photoMarco2.png';
import style from './PortfolioPage.module.scss';
import chawiz from '../../../assets/chawiz.jpg';
import chaCypher from '../../../assets/chaCypher.jpg';
import Project from 'components/components/molecules/Project/Project';
import Social from 'components/components/atoms/Social/Social';
import CardExperience from 'components/components/organism/CardExperience/CardExperience';

export default function PortfolioPage() {
    return (
        <div className={style.home}>
            <a id="inicio"></a>
            <header className={style.home_header}>
                <div className={style.home_header_info}>
                    <h1>Hola!, soy Anderson Castaño</h1>
                    <p>
                        Desarrollador de software con más de 5 años de
                        experiencia. He participado en proyectos transaccionales
                        para instituciones bancarias, así como en la creación de
                        páginas estáticas e interactivas.
                    </p>

                    <ul className={style.home_header_social}>
                        <Social
                            logo="ri-youtube-line"
                            href="https://www.youtube.com/channel/UClLLQJnsCXZoZe--qJYjwEw"
                            name="youtube"
                        />
                        <Social
                            logo="ri-linkedin-box-line"
                            href="https://www.linkedin.com/in/andercc/"
                            name="linkedin"
                        />
                        <Social
                            logo="ri-github-fill"
                            href="https://github.com/Anderrc"
                            name="gitHub"
                        />
                        <Social
                            logo="ri-instagram-line"
                            href="https://www.instagram.com/andercdev/"
                            name="instagram"
                        />
                    </ul>
                </div>
                <Image
                    src={foto}
                    alt="Foto personal"
                    className={style.home_header_photo}
                    loading="lazy"
                    placeholder="blur"
                />
            </header>
            <main className={style.home_container}>
                <section className={style.home_container_experience}>
                    <header className={style.home_container_experience_header}>
                        <a id="experience"> </a>
                        <h2>Experiencia</h2>
                        <h3>Mi experiencia laboral</h3>
                    </header>
                    <main className={style.home_container_experience_container}>
                        <CardExperience
                            title={'Front end senior'}
                            place={'Grupo mutual | Remoto'}
                            date={'Feb 2023 - Presente'}
                            description={`En cargado del desarrollo de nuevas funcionalidades,
                            solución de bugs y liderar iniciativas de mejora en buenas
                            practicas de codigo.`}
                            skills={[
                                'ts',
                                'js',
                                'sass',
                                'next js',
                                'micro-front-ends',
                                'redux'
                            ]}
                        />
                        <CardExperience
                            title={'Full Stack - senior'}
                            place={'Pagalo - Colombia'}
                            date={'Feb 2022 - Feb 2023'}
                            description={`En cargado del desarrollo de nuevas funcionalidades,
                            solución de bugs y atención de impudencias en producción`}
                            skills={[
                                'ts',
                                'js',
                                'sass',
                                'react',
                                'Spring boot',
                                'Bucket s3'
                            ]}
                        />
                        <CardExperience
                            title={'Front end Mid - senior'}
                            place={'Grupo Reditos - Gana'}
                            date={'May 2021 - Ene 2022'}
                            description={`En cargado del desarrollo de nuevas funcionalidades,
                            solución de bugs y liderar iniciativas de mejora en buenas
                            practicas de codigo.`}
                            skills={['ts', 'js', 'sass', 'gatsby']}
                        />
                        <CardExperience
                            title={'Front end Junior - Montajista contenido'}
                            place={'Bam - Guatemala'}
                            date={'Nov 2020 - Abr 2021'}
                            description={`En cargado del desarrollo de nuevas funcionalidades,
                            solución de bugs y liderar iniciativas de mejora en buenas
                            practicas de codigo.`}
                            skills={[
                                'js',
                                'styled components',
                                'gatsby',
                                'contentful'
                            ]}
                        />

                        <CardExperience
                            title={'Backend Junior'}
                            place={'Pragma'}
                            date={'Jun 2020 - Oct 2020'}
                            description={`En cargado del desarrollo de nuevas funcionalidades,
                            solución de bugs y liderar iniciativas de mejora en buenas
                            practicas de codigo.`}
                            skills={[
                                'java',
                                'Spring boot',
                                'Mysql',
                                'Bucket s3',
                                'Aws cognito'
                            ]}
                        />
                        <CardExperience
                            title={'Junior developer'}
                            place={'Sena'}
                            date={'Jun 2018 - Jun 2020'}
                            description={`En cargado del desarrollo de nuevas funcionalidades,
                            solución de bugs y liderar iniciativas de mejora en buenas
                            practicas de codigo.`}
                            skills={['jQuery', 'PHP', 'Js', 'Mysql']}
                        />
                    </main>
                </section>

                <section className={style.home_container_projects}>
                    <a id="project"> </a>

                    <h2>Proyectos</h2>
                    <main className={style.home_container_projects_container}>
                        <Project
                            img={{
                                src: chawiz,
                                alt: 'Chawiz Logo'
                            }}
                            href={
                                'https://chromewebstore.google.com/detail/chawiz/mkllcpiagoibjaapcbkoigbbblkmcked'
                            }
                            title={'ChaWiz'}
                            description={`ChaWiz optimiza tu flujo de trabajo al simplificar tareas de
						manejo de caracteres. Desarrollado para escritores, editores y
						desarrolladores, mejora la eficiencia y calidad del texto.`}
                            subTitle={'Extension Chrome'}
                        />

                        <Project
                            img={{
                                src: chaCypher,
                                alt: 'chaCypher Logo'
                            }}
                            href={
                                'https://chromewebstore.google.com/detail/cmmmgojfaaaabjlpamnlocgkhabfnfip'
                            }
                            title={'chaCypher'}
                            description={`ChaCypher simplifica el proceso de encriptar y desencriptar textos utilizando AES. Con la capacidad de personalizar claves y contenido, garantiza una seguridad sólida para tus datos sensibles.`}
                            subTitle={'Extension Chrome'}
                        />
                    </main>
                </section>
            </main>
        </div>
    );
}
