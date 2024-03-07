import HeadPage from 'components/components/atoms/HeadPage/HeadPage';
import HomePage from 'components/components/page/HomePage/HomePage';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
    title: 'Anderson Castaño | Portfolio',
    description: 'Archetype nextjs',
    openGraph: {
        title: 'Anderson Castaño | Archetype',
        description: 'Archetype ',
        images: '/imgPortada.jpeg'
    }
};
export default function Home() {
    const jsonLd = {
        '@context': 'http://schema.org',
        '@type': 'CreativeWork',
        name: 'Portafolio de Anderson Castaño',
        description:
            'Este es mi portafolio donde muestro mi experiencia y algunos de mis trabajos',
        url: 'https://anderc-dev.vercel.app/',
        author: {
            '@type': 'Person',
            name: 'Anderson Castaño'
        },
        keywords: [
            'Frontend Developer',
            'Desarrollador Web',
            'React Developer',
            'Next.js Developer',
            'HTML5',
            'CSS3',
            'JavaScript (JS)',
            'TypeScript (TS)',
            'Java',
            'Desarrollo Web Responsivo',
            'Interfaz de Usuario (UI)',
            'Experiencia de Usuario (UX)',
            'Diseño Web',
            'Desarrollo Ágil',
            'Git',
            'Control de Versiones',
            'Proyectos de React',
            'Proyectos de Next.js',
            'Portafolio de Desarrollo Web',
            'Desarrollo Frontend Moderno'
        ]
    };

    return (
        <>
            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLd)
                }}
            />
            <HeadPage />
            <HomePage />
        </>
    );
}
