export default function About() {
    return (
        <section id="sobre" className="py-24 px-4 bg-white">
            <div className="container mx-auto max-w-5xl">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    
                    {/* Imagem Placeholder (Pode ser ajustado depois) */}
                    <div className="w-full md:w-1/2 relative">
                        <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative z-10">
                            {/* Um fundo gradiente provisório ou imagem */}
                            <div className="h-full w-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-400">
                                <span>[Sua Foto Aqui]</span>
                            </div>
                        </div>
                        {/* Elemento Decorativo */}
                        <div className="absolute -bottom-6 -right-6 h-full w-full rounded-[2rem] border-4 border-[#0D2C40]/10 z-0"></div>
                    </div>

                    {/* Texto Sobre Mim */}
                    <div className="w-full md:w-1/2">
                        <div className="inline-block rounded-full bg-[#0D2C40]/5 px-4 py-1.5 text-sm font-semibold text-[#0D2C40] mb-6">
                            Conheça a Profissional
                        </div>
                        <h2 className="mb-6 text-4xl font-bold text-[#0D2C40]" style={{ fontFamily: "'Bree Serif', serif" }}>
                            Muito Prazer, Heloisa Costa.
                        </h2>
                        
                        <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                            <p>
                                Com traços de saúde, modernidade e bem-estar, meu atendimento é desenhado
                                para oferecer uma atmosfera leve, amigável e elegante.
                            </p>
                            <p>
                                Acredito que o processo de reabilitação não precisa ser frio. Por isso,
                                o foco central da minha metodologia é o <strong>cuidado humanizado</strong> e a confiança 
                                mútua para a sua recuperação no conforto e segurança do seu lar.
                            </p>
                            <p className="font-medium text-[#A60303] italic">
                                "Sua recuperação é a minha prioridade."
                            </p>
                        </div>
                        
                        <div className="mt-10 flex items-center gap-8 border-t pt-8 text-sm uppercase tracking-widest text-[#0D2C40]/60 font-semibold">
                            <div className="flex flex-col gap-1">
                                <span className="text-3xl text-[#0D2C40]">+500</span>
                                <span>Pacientes</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-3xl text-[#0D2C40]">10</span>
                                <span>Anos Exp.</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
