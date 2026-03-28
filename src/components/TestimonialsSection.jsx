import { useScrollAnimation } from '../hooks/useScrollAnimation';

const testimonials = [
  {
    name: 'Carlos M.',
    role: 'Viagem a trabalho',
    text: 'Ótima localização e excelente custo-benefício. Precisava de um lugar prático para ficar durante a semana e o Hotel Ouro atendeu perfeitamente.',
    rating: 5,
  },
  {
    name: 'Ana Paula S.',
    role: 'Viagem em casal',
    text: 'Atendimento atencioso e hospedagem prática para quem precisa ficar bem localizado. O quarto era limpo e confortável, voltaria com certeza.',
    rating: 5,
  },
  {
    name: 'Roberto L.',
    role: 'Passagem rápida',
    text: 'Ambiente simples, organizado e confortável para uma estadia rápida. Recepção 24h foi essencial pra mim que cheguei tarde. Recomendo!',
    rating: 4,
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-gold' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial, index }) {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-500 border border-gray-100 ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Quote icon */}
      <div className="text-gold/20 mb-4">
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609L9.978 5.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" />
        </svg>
      </div>

      {/* Text */}
      <p className="text-gray-medium text-base leading-relaxed mb-6 italic">
        &ldquo;{testimonial.text}&rdquo;
      </p>

      {/* Rating */}
      <StarRating rating={testimonial.rating} />

      {/* Author */}
      <div className="mt-5 pt-5 border-t border-gray-100 flex items-center gap-4">
        <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
          <span className="font-heading font-bold text-gold text-lg">
            {testimonial.name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="font-heading font-semibold text-dark text-sm">
            {testimonial.name}
          </p>
          <p className="text-gray-medium text-xs">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section id="avaliacoes" className="py-24 lg:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center max-w-2xl mx-auto mb-16 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <span className="inline-block text-gold font-heading font-semibold text-sm tracking-widest uppercase mb-4">
            Depoimentos
          </span>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-dark mb-5">
            O que nossos hóspedes{' '}
            <span className="text-gold">dizem</span>
          </h2>
          <p className="text-gray-medium text-lg leading-relaxed">
            A satisfação dos nossos hóspedes é o que nos motiva a continuar
            melhorando todos os dias.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
