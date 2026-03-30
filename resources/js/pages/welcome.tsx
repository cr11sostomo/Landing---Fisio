import { Head } from '@inertiajs/react';
import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import About from '@/components/landing/About';
import PelvicHealth from '@/components/landing/PelvicHealth';
import Contacts from '@/components/landing/Contacts';
import Footer from '@/components/landing/Footer';

export default function Welcome() {
    return (
        <div className="min-h-screen bg-white font-sans text-gray-900 scroll-smooth antialiased">
            <Head>
                <title>Heloisa Costa - Fisioterapia Domiciliar</title>
                {/* Carregando a fonte Bree Serif que era usada no design original */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap" rel="stylesheet" />
            </Head>

            <Header />
            
            <main>
                <Hero />
                <About />
                <PelvicHealth />
                <Contacts />
            </main>

            <Footer />
        </div>
    );
}