import { ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <section id="hero" className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden bg-[#0D2C40] px-4 py-24 text-center text-white">
            {/* Background Decorative Pattern (Optional subtle overlay) */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-[#0D2C40] to-[#0D2C40]"></div>

            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
                <h1 
                    className="mb-6 text-5xl tracking-tight sm:text-7xl font-bold" 
                    style={{ fontFamily: "'Bree Serif', serif" }}
                >
                    Saúde e Cuidados onde<br/>
                    você mais precisa.
                </h1>
                
                <p className="mb-10 max-w-2xl text-lg font-medium tracking-[0.2em] text-white/80 uppercase">
                    Fisioterapia Domiciliar & Humanizada
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                        href="#contatos" 
                        className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#A60303] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#A60303]/30 transition-all duration-300 ease-out hover:scale-105 hover:bg-red-800"
                    >
                        Agendar Consulta
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </a>
                    
                    <a 
                        href="#sobre" 
                        className="inline-flex items-center justify-center rounded-full bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
                    >
                        Conhecer mais
                    </a>
                </div>
            </div>
            
            {/* Bottom Curve Divider */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                <svg className="relative block w-full h-[50px] md:h-[80px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-white"></path>
                </svg>
            </div>
        </section>
    );
}
