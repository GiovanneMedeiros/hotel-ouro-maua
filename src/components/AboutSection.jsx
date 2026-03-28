import { useScrollAnimation } from '../hooks/useScrollAnimation';

const diferenciais = [
  {
    label: 'Localização central',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    label: 'Atendimento 24 horas',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    label: 'Quartos funcionais',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    label: 'Ótimo custo-benefício',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
];

export default function AboutSection() {
  const [ref, isVisible] = useScrollAnimation(0.15);

  return (
    <section id="sobre" className="py-28 lg:py-36 bg-[#F5F5F5]">
      <div ref={ref} className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Imagem */}
          <div
            className={`relative ${
              isVisible ? 'animate-slide-in-left' : 'opacity-0'
            }`}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/10">
              <img
                src="/images/fachada-hotel.jpg"
                alt="Fachada do Hotel Ouro de Mauá"
                className="w-full h-[340px] sm:h-[400px] lg:h-[480px] object-cover"
              />
              {/* Sutil gradiente inferior na imagem */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>


          </div>

          {/* Conteúdo textual */}
          <div
            className={`${
              isVisible ? 'animate-slide-in-right' : 'opacity-0'
            } pt-6 lg:pt-0`}
          >
            {/* Label */}
            <span className="inline-flex items-center gap-2 text-gold font-heading font-semibold text-xs tracking-[0.2em] uppercase mb-5">
              <span className="w-8 h-px bg-gold" />
              Sobre o Hotel
            </span>

            {/* Título */}
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-[2.65rem] text-dark leading-[1.15] mb-7">
              Conheça o{' '}
              <span className="text-gold">Hotel Ouro de Mauá</span>
            </h2>

            {/* Parágrafos */}
            <p className="text-gray-medium text-base md:text-lg leading-relaxed mb-5">
              Localizado no centro de Mauá, o Hotel Ouro de Mauá oferece
              praticidade, conforto e fácil acesso aos principais pontos da
              região.
            </p>
            <p className="text-gray-medium text-base leading-relaxed mb-10">
              Ideal para viagens rápidas, compromissos profissionais ou estadias
              econômicas, o hotel é uma opção funcional para quem busca boa
              localização e ótimo custo-benefício.
            </p>

            {/* Diferenciais */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {diferenciais.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3.5 bg-white rounded-xl px-5 py-4 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:border-gold/20"
                >
                  <div className="w-9 h-9 bg-gold/10 rounded-lg flex items-center justify-center shrink-0 text-gold">
                    {item.icon}
                  </div>
                  <span className="text-dark font-medium text-sm">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
