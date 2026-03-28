const WHATSAPP_URL = 'https://wa.me/551143090730?text=Olá! Gostaria de fazer uma reserva no Hotel Ouro de Mauá.';

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-dark">
        <img
          src="/images/fachada-hotel.jpg"
          alt="Hotel Ouro de Mauá - Fachada"
          className="w-full h-full object-cover opacity-70 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-dark/15" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-5 sm:px-6 md:px-10 lg:px-16 w-full flex items-center min-h-screen pt-24 pb-16 sm:pt-28 sm:pb-20 lg:py-0">
        <div className="max-w-[600px] flex flex-col gap-0">
          {/* Badge */}
          <div className="animate-fade-in-up mb-5 sm:mb-7">
            <span className="inline-flex items-center gap-2 sm:gap-2.5 bg-white/5 backdrop-blur-sm border border-gold/20 rounded-full px-3.5 sm:px-5 py-1.5 sm:py-2">
              <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
              <span className="text-gold/90 text-[10px] sm:text-xs font-medium tracking-[0.1em] sm:tracking-[0.15em] uppercase">
                Hospedagem no centro de Mauá
              </span>
            </span>
          </div>

          {/* Title */}
          <h1 className="animate-fade-in-up animation-delay-200 opacity-0 font-heading font-bold text-[1.75rem] sm:text-[2.25rem] md:text-[3rem] lg:text-[3.75rem] text-white leading-[1.1] mb-5 sm:mb-7 max-w-[560px]">
            Conforto e praticidade
            <br />
            <span className="text-gold">no coração de Mauá</span>
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-in-up animation-delay-400 opacity-0 text-[#CCCCCC] text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-9 max-w-[480px]">
            Hospede-se com conforto, atendimento 24h e ótimo custo-benefício
            em uma localização estratégica.
          </p>

          {/* Benefits */}
          <div className="animate-fade-in-up animation-delay-400 opacity-0 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-5 mb-8 sm:mb-12">
            {[
              { text: 'Localização central' },
              { text: 'Quartos confortáveis' },
              { text: 'Atendimento 24h' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2">
                <span className="w-1 h-1 bg-gold rounded-full" />
                <span className="text-white/60 text-xs sm:text-sm font-light tracking-wide">
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="animate-fade-in-up animation-delay-600 opacity-0 flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 sm:gap-3 bg-gold hover:bg-gold-light text-dark font-heading font-semibold text-xs sm:text-sm px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-gold/25 hover:-translate-y-0.5 tracking-wide"
            >
              <svg className="w-4 h-4 sm:w-[18px] sm:h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span className="hidden min-[400px]:inline">Reservar agora pelo WhatsApp</span>
              <span className="min-[400px]:hidden">Reservar pelo WhatsApp</span>
            </a>
            <a
              href="#quartos"
              className="inline-flex items-center justify-center gap-2 border border-white/15 hover:border-gold/40 text-white/70 hover:text-gold font-heading font-medium text-xs sm:text-sm px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5 backdrop-blur-sm"
            >
              Ver quartos
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-5 h-9 border border-white/20 rounded-full flex justify-center">
          <div className="w-1 h-2.5 bg-gold/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
