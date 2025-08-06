import React from 'react';
import Head from 'next/head';
import { Button } from '@/components/ui/button';

const ThankYouPage: React.FC = () => {
    return (
        <>
            <Head>
                <title>Thank You</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <main className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
                <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg text-center max-w-md w-full">
                    <h1 className="text-3xl md:text-4xl font-bold text-primaryYellow mb-4">Thank You!</h1>
                    <p className="text-gray-700 text-base md:text-lg">
                        Your submission has been received. We'll get back to you shortly.
                    </p>
                    <div className="mt-6">
                        <Button>
                            <a
                                href="/"
                            >
                                Back to Home
                            </a>
                        </Button>
                    </div>
                </div>
            </main>
        </>
    );
};

export default ThankYouPage;
