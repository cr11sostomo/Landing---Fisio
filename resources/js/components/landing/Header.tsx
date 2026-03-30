import { HeartHandshake } from 'lucide-react';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md transition-all duration-300">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex h-20 items-center justify-between">
                    {/* Logo Area */}
                    <div className="flex items-center gap-2 text-2xl font-bold tracking-tight text-[#0D2C40]" style={{ fontFamily: "'Bree Serif', serif" }}>
                        <HeartHandshake className="h-8 w-8 text-[#A60303]" />
                        <span>Heloisa <span className="text-[#A60303]">Costa</span></span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        <a href="#hero" className="text-sm font-medium text-[#0D2C40] transition-colors hover:text-[#A60303]">Home</a>
                        <a href="#sobre" className="text-sm font-medium text-[#0D2C40] transition-colors hover:text-[#A60303]">Sobre mim</a>
                        <a href="#saude-pelvica" className="text-sm font-medium text-[#0D2C40] transition-colors hover:text-[#A60303]">Saúde Pélvica</a>
                        <a href="#contatos" className="text-sm font-medium text-[#0D2C40] transition-colors hover:text-[#A60303]">Contatos</a>
                        {/* Example button style for Blog / CTA */}
                        {/* <a href="/blog" className="rounded-full bg-[#0D2C40] px-5 py-2 text-sm font-medium text-white transition-transform hover:scale-105">Blog</a> */}
                    </nav>

                    {/* Mobile Menu Button (Optional extra for the future) */}
                    <button className="md:hidden text-[#0D2C40]">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                    </button>
                </div>
            </div>
        </header>
    );
}
