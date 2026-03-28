import { useScrollAnimation } from '../hooks/useScrollAnimation';

const differentials = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: 'Localização estratégica',
    description: 'Fácil acesso ao centro, transporte e serviços da região.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Atendimento 24 horas',
    description: 'Mais segurança e praticidade em qualquer horário.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    title: 'Conforto essencial',
    description: 'Quartos organizados, funcionais e preparados para sua estadia.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    title: 'Ótimo custo-benefício',
    description: 'Hospedagem prática com preço justo em Mauá.',
  },
];

function DifferentialCard({ item, index }) {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`group bg-white rounded-[16px] p-8 lg:p-9 shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_36px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-[5px] border border-gray-100 hover:border-gold/25 ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 0.12}s` }}
    >
      {/* Icon */}
      <div className="w-14 h-14 bg-gold/8 rounded-2xl flex items-center justify-center text-gold mb-7 group-hover:bg-gold group-hover:text-dark transition-all duration-400 group-hover:shadow-lg group-hover:shadow-gold/20">
        {item.icon}
      </div>

      {/* Title */}
      <h3 className="font-heading font-bold text-[1.1rem] text-dark mb-3 leading-snug">
        {item.title}
      </h3>

      {/* Description */}
      <p className="text-[#666666] text-sm leading-relaxed">
        {item.description}
      </p>
    </div>
  );
}

export default function DifferentialsSection() {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section id="diferenciais" className="py-28 lg:py-36 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center max-w-xl mx-auto mb-20 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <span className="inline-flex items-center gap-2 justify-center text-gold font-heading font-semibold text-xs tracking-[0.2em] uppercase mb-5">
            <span className="w-8 h-px bg-gold" />
            Por que nos escolher
            <span className="w-8 h-px bg-gold" />
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-[2.65rem] text-dark leading-[1.15] mb-5">
            Diferenciais que fazem{' '}
            <span className="text-gold">a diferença</span>
          </h2>
          <p className="text-[#666666] text-base md:text-lg leading-relaxed">
            Cada detalhe pensado para oferecer conforto, praticidade e uma
            estadia sem complicações.
          </p>
        </div>

        {/* Grid — 4 cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {differentials.map((item, index) => (
            <DifferentialCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
