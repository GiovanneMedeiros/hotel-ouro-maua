import { useState, useEffect } from 'react';

const WHATSAPP_URL = 'https://wa.me/551143090730?text=Olá! Gostaria de fazer uma reserva no Hotel Ouro de Mauá.';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Quartos', href: '#quartos' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Localização', href: '#localizacao' },
  { label: 'Avaliações', href: '#avaliacoes' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = () => setMobileOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-dark/95 backdrop-blur-md shadow-lg py-2.5 md:py-3'
            : 'bg-transparent py-3 md:py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-1.5 sm:gap-2 group shrink-0">
            <span className="text-gold font-heading font-bold text-xl sm:text-2xl tracking-tight transition-colors duration-300">
              Hotel Ouro
            </span>
            <span className="text-white/70 font-heading font-light text-xs sm:text-sm tracking-widest uppercase hidden min-[360px]:inline">
              de Mauá
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-gold text-sm font-medium tracking-wide transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold hover:bg-gold-dark text-dark font-semibold text-sm px-6 py-2.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
            >
              Reservar Agora
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2 -mr-2 focus:outline-none relative z-[60]"
            aria-label="Menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-6 bg-gold rounded transition-all duration-300 origin-center ${
                  mobileOpen ? 'rotate-45 translate-y-[4px]' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-gold rounded transition-all duration-300 ${
                  mobileOpen ? 'opacity-0 scale-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-gold rounded transition-all duration-300 origin-center ${
                  mobileOpen ? '-rotate-45 -translate-y-[4px]' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-[55] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile menu panel */}
      <div
        className={`lg:hidden fixed top-0 right-0 z-[56] w-[280px] max-w-[80vw] h-full bg-dark/98 backdrop-blur-xl shadow-2xl transition-transform duration-400 ease-out flex flex-col ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close button */}
        <div className="flex justify-end p-5">
          <button
            onClick={() => setMobileOpen(false)}
            className="text-white/60 hover:text-gold p-1 transition-colors"
            aria-label="Fechar menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <div className="flex flex-col px-8 gap-1 flex-1">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className={`text-white/80 hover:text-gold text-base font-heading font-medium py-3 border-b border-white/5 transition-all duration-300 ${
                mobileOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
              }`}
              style={{ transitionDelay: mobileOpen ? `${i * 50 + 100}ms` : '0ms' }}
            >
              {link.label}
            </a>
          ))}

          {/* CTA */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleNavClick}
            className={`mt-6 inline-flex items-center justify-center gap-2.5 bg-gold hover:bg-gold-dark text-dark font-heading font-semibold text-sm px-5 py-3 rounded-xl transition-all duration-300 ${
              mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: mobileOpen ? '400ms' : '0ms' }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Reservar pelo WhatsApp
          </a>
        </div>

        {/* Footer info */}
        <div className="px-8 pb-8 pt-4">
          <p className="text-white/30 text-xs font-light">
            Hotel Ouro de Mauá
          </p>
          <p className="text-white/20 text-xs mt-1">
            (11) 4309-0730
          </p>
        </div>
      </div>
    </>
  );
}
