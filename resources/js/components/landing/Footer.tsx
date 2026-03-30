export default function Footer() {
    return (
        <footer className="bg-[#060303] py-12 text-center text-white">
            <div className="container mx-auto px-4">
                <div className="mb-8 opacity-80">
                    <p className="text-xl font-medium italic font-serif">
                        "Preserve a sua marca, ela é o seu maior patrimônio."
                    </p>
                </div>
                
                <div className="h-px w-full max-w-sm mx-auto bg-white/10 mb-8 rounded-full"></div>
                
                <p className="text-sm opacity-50 tracking-wider">
                    &copy; {new Date().getFullYear()} Heloisa Costa - Fisioterapia Domiciliar. Todos os direitos reservados.
                </p>
                <div className="mt-4 flex justify-center space-x-4 opacity-50 text-sm">
                    <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
                    <span>&bull;</span>
                    <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
                </div>
            </div>
        </footer>
    );
}
