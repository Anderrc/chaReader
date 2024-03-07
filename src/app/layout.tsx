import { Analytics } from '@vercel/analytics/react';
import Layout from 'components/components/templates/Layout/Layout';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import 'remixicon/fonts/remixicon.css';
import '../styles/_globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: {
        template: '%s | AndercDev',
        default: 'Blog AndercDev'
    },
    description: 'Pagina de inicio del blog de anderson castaño',
    metadataBase: new URL('https://anderc-dev.vercel.app')
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link
                    href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700,800,900|Open+Sans&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className={`${inter.className}`}>
                <Layout>{children}</Layout>
                <Analytics />
            </body>
        </html>
    );
}
