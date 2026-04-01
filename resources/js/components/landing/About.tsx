export default function About() {
    return (
        <section id="sobre" className="py-24 px-4 bg-white">
            <div className="container mx-auto max-w-5xl">
                <div className="flex flex-col md:flex-row items-center gap-16">

                    {/* Imagem Placeholder (Pode ser ajustado depois) */}
                    <div className="w-full md:w-1/2 relative">
                        <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative z-10">
                            {/* Um fundo gradiente provisório ou imagem */}
                            <div className="w-full h-full flex justify-center items-center overflow-hidden rounded-[30px]">
                                <img
                                    src="/Fisioterapeuta.png"
                                    alt="logo"
                                    className="w-full h-full object-cover object-center"
                                />
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
                            Muito prazer,<br></br>
                            sou Heloisa Costa.
                        </h2>

                        <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                            <p>
                                Mais do que um atendimento, ofereço cuidado pensado para que você se sinta segura, acolhida e respeitada em cada etapa do acompanhamento.
                            </p>
                            <p>
                                Acredito que <strong>reabilitar</strong> também é <strong>escutar</strong>, <strong>compreender</strong> e <strong>cuidar</strong> com sensibilidade. Por isso, meu trabalho une profissionalismo, evidência científica, atenção individualizada e um olhar humanizado, para proporcionar um atendimento de excelência.
                            </p>
                            <p className="font-medium text-[#A60303] italic">
                                "Sua saúde é minha prioridade."
                            </p>
                        </div>

                        <div className="mt-10 flex items-center gap-8 border-t pt-8 text-sm tracking-widest text-[#0D2C40]/60 font-medium">
                            <ul className="flex flex-col gap-1">
                                <li className="text-lg text-[#0D2C40] list-disc list-inside">
                                    Especializada em saúde da mulher.
                                </li>
                                <li className="text-lg text-[#0D2C40] list-disc list-inside">
                                    Mestra em ciências da reabilitação e desempenho físico-funcional.
                                </li>
                                <li className="text-lg text-[#0D2C40] list-disc list-inside">
                                    Doutoranda em saúde.
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
