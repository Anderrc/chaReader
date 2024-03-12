import { Metadata } from 'next';
import Head from 'next/head';
import React from 'react';

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app'
};

const HeadPage = () => {
    return (
        <Head>
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
};

export default HeadPage;
