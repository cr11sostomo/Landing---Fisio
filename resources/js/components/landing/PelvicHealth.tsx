import { ActivitySquare, Sparkles } from 'lucide-react';

export default function PelvicHealth() {
    return (
        <section id="saude-pelvica" className="py-24 px-4 bg-gray-50 relative overflow-hidden">
            {/* Decoração de fundo */}
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 opacity-5">
                <Sparkles className="h-96 w-96 text-[#0D2C40]" />
            </div>

            <div className="container mx-auto max-w-4xl relative z-10 text-center">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-[#0D2C40] shadow-xl shadow-[#0D2C40]/20 text-white">
                    <ActivitySquare className="h-10 w-10" />
                </div>
                
                <h2 className="mb-6 text-4xl md:text-5xl font-bold text-[#0D2C40]" style={{ fontFamily: "'Bree Serif', serif" }}>
                    Fisioterapia & Saúde Pélvica
                </h2>
                
                <p className="mx-auto mb-10 max-w-2xl text-lg md:text-xl text-gray-600 leading-relaxed">
                    Atendimento especializado com técnicas atuais e orientação constante. 
                    Priorizamos o seu cuidado através de métodos que transmitem 
                    <strong> segurança, acolhimento e privacidade.</strong>
                </p>

                <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-6 mt-4">
                    <div className="rounded-2xl border-2 border-[#A60303] bg-white px-8 py-4 shadow-lg shadow-[#A60303]/10">
                        <p className="text-[#A60303] font-bold text-lg">Especialidade em Pélvica</p>
                        <p className="text-sm text-gray-500 mt-1">Tratamentos voltados para o bem-estar íntimo</p>
                    </div>
                </div>

                {/* Pode-se adicionar cards ilustrando diferentes condições aqui no futuro */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-left">
                    {['Reabilitação', 'Prevenção', 'Acolhimento'].map((item, idx) => (
                        <div key={idx} className="rounded-2xl border bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                            <h3 className="text-xl font-bold text-[#0D2C40] mb-2">{item}</h3>
                            <p className="text-gray-500 text-sm">Protocolos focados em garantir a funcionalidade e qualidade de vida da mulher moderna.</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
