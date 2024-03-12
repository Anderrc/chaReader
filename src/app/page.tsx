import HeadPage from 'components/components/atoms/HeadPage/HeadPage';
import HomePage from 'components/components/page/HomePage/HomePage';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
    title: 'chaReader: convierte texto a audio',
    description:
        'Convierte tu texto en audio con chaReader. ¡Escucha tus ebooks, artículos y documentos mientras haces otras cosas!',
    openGraph: {
        title: 'chaReader: convierte texto a audio',
        description:
            'Convierte tu texto en audio con chaReader. ¡Escucha tus ebooks, artículos y documentos mientras haces otras cosas! ',
        images: '/imgPortada.jpeg'
    }
};
export default function Home() {
    const jsonLd = {
        '@context': 'http://schema.org',
        '@type': 'SoftwareApplication',
        name: 'chaReader',
        description: 'Convierte texto a audio',
        image: 'https://stock.adobe.com/es/search?k=charreria',
        url: 'https://dereader.ca/',
        function: [
            {
                function: 'Convertir texto a audio',
                input: 'Texto',
                output: 'Audio'
            }
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
