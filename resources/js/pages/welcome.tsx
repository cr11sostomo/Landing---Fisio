import { Head } from '@inertiajs/react';

export default function Welcome() {
    return (
        <>
            <Head title="Heloisa Costa - Fisioterapia Domiciliar" />
            
            <style>{`
                :root {
                    --brand-azul: #0D2C40;
                    --brand-vermelho: #A60303;
                    --brand-preto: #060303;
                    --gray-light: #f9fafb;
                    --gray-medium: #6b7280;
                    --gray-border: #f3f4f6;
                    --white: #ffffff;
                }

                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                html {
                    scroll-behavior: smooth;
                }

                body {
                    font-family: Arial, Helvetica, sans-serif;
                    color: var(--brand-preto);
                    background-color: var(--white);
                    line-height: 1.6;
                }

                h1, h2, .logo {
                    font-family: 'Bree Serif', serif;
                }

                a {
                    text-decoration: none;
                    color: inherit;
                }

                ul {
                    list-style: none;
                }

                .container {
                    width: 100%;
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 24px;
                }

                .narrow {
                    max-width: 900px;
                }

                .text-center {
                    text-align: center;
                }

                .header {
                    position: sticky;
                    top: 0;
                    z-index: 50;
                    background-color: var(--white);
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
                }

                .header-content {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding-top: 16px;
                    padding-bottom: 16px;
                }

                .logo {
                    font-size: 2rem;
                    color: var(--brand-azul);
                }

                .logo span {
                    font-weight: bold;
                }

                .nav ul {
                    display: flex;
                    gap: 32px;
                }

                .nav a {
                    font-weight: 500;
                    color: var(--brand-azul);
                    transition: color 0.3s ease;
                }

                .nav a:hover {
                    color: var(--brand-vermelho);
                }

                .hero {
                    min-height: 80vh;
                    background-color: var(--brand-azul);
                    color: var(--white);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    padding: 32px 16px;
                }

                .hero h1 {
                    font-size: 4.5rem;
                    margin-bottom: 8px;
                }

                .hero p {
                    font-size: 1.2rem;
                    letter-spacing: 0.3em;
                    text-transform: uppercase;
                    margin-bottom: 32px;
                }

                .btn-primary {
                    display: inline-block;
                    background-color: var(--brand-vermelho);
                    color: var(--white);
                    padding: 14px 32px;
                    border-radius: 999px;
                    font-weight: bold;
                    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.18);
                    transition: transform 0.3s ease;
                }

                .btn-primary:hover {
                    transform: scale(1.05);
                }

                .section {
                    padding: 80px 24px;
                }

                .section h2 {
                    font-size: 2.5rem;
                    color: var(--brand-azul);
                    margin-bottom: 24px;
                }

                .section p {
                    font-size: 1.125rem;
                    color: var(--gray-medium);
                    line-height: 1.8;
                }

                .saude-pelvica {
                    background-color: var(--gray-light);
                }

                .highlight-box {
                    display: inline-block;
                    margin-top: 32px;
                    padding: 16px 24px;
                    border: 2px solid var(--brand-vermelho);
                    border-radius: 20px;
                    color: var(--brand-vermelho);
                    font-weight: bold;
                }

                .contact-card {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 32px;
                    text-align: left;
                    background-color: var(--white);
                    padding: 32px;
                    border-radius: 24px;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
                    border: 1px solid var(--gray-border);
                    margin-top: 40px;
                }

                .contact-label {
                    font-size: 0.8rem;
                    text-transform: uppercase;
                    letter-spacing: 0.2em;
                    color: #9ca3af;
                    margin-bottom: 8px;
                }

                .contact-value {
                    font-size: 1.25rem;
                    font-weight: 500;
                    color: var(--brand-preto);
                }

                .footer {
                    background-color: var(--brand-preto);
                    color: var(--white);
                    text-align: center;
                    padding: 48px 24px;
                }

                .footer-quote {
                    font-style: italic;
                    opacity: 0.8;
                    margin-bottom: 16px;
                }

                .footer-copy {
                    font-size: 0.75rem;
                    opacity: 0.5;
                }

                @import url('https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap');

                @media (max-width: 768px) {
                    .nav {
                        display: none;
                    }

                    .hero h1 {
                        font-size: 3rem;
                    }

                    .hero p {
                        font-size: 1rem;
                        letter-spacing: 0.18em;
                    }

                    .section h2 {
                        font-size: 2rem;
                    }

                    .contact-card {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>

            <header className="header">
                <div className="container header-content">
                    <div className="logo">
                        Heloisa <span>Costa</span>
                    </div>

                    <nav className="nav">
                        <ul>
                            <li><a href="#hero">Home</a></li>
                            <li><a href="#sobre">Sobre mim</a></li>
                            <li><a href="#saude-pelvica">Saúde Pélvica</a></li>
                            <li><a href="#contatos">Contatos</a></li>
                            <li><a href="/blog">Blog</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <section id="hero" className="hero">
                <h1>Heloisa Costa</h1>
                <p>Fisioterapia Domiciliar</p>
                <a href="#contatos" className="btn-primary">Agendar Consulta</a>
            </section>

            <section id="sobre" className="section sobre">
                <div className="container narrow text-center">
                    <h2>Sobre mim</h2>
                    <p>
                        Com traços de saúde, modernidade e bem-estar, meu atendimento é desenhado
                        para oferecer uma atmosfera leve, amigável e elegante.
                        Foco no cuidado humanizado e na confiança para a sua recuperação
                        no conforto do seu lar.
                    </p>
                </div>
            </section>

            <section id="saude-pelvica" className="section saude-pelvica">
                <div className="container narrow text-center">
                    <h2>Saúde Pélvica</h2>
                    <p>
                        Atendimento especializado com técnicas atuais e tipografia de fácil leitura
                        para sua orientação. Priorizamos o seu cuidado através de formas que
                        transmitem segurança e acolhimento.
                    </p>

                    <div className="highlight-box">
                        Especialidade em Fisioterapia Pélvica
                    </div>
                </div>
            </section>

            <section id="contatos" className="section contatos">
                <div className="container narrow text-center">
                    <h2>Contatos</h2>

                    <div className="contact-card">
                        <div className="contact-item">
                            <p className="contact-label">Telefone</p>
                            <p className="contact-value">(XX) XXXXX-XXXX</p>
                        </div>

                        <div className="contact-item">
                            <p className="contact-label">E-mail</p>
                            <p className="contact-value">contato@heloisacosta.com.br</p>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <p className="footer-quote">"Preserve a sua marca, ela é o seu maior patrimônio."</p>
                <p className="footer-copy">&copy; 2026 Heloisa Costa - Fisioterapia Domiciliar.</p>
            </footer>
        </>
    );
}