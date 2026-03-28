import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function LocationSection() {
  const [ref, isVisible] = useScrollAnimation(0.15);

  return (
    <section id="localizacao" className="py-24 lg:py-32 bg-gray-light">
      <div ref={ref} className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div
            className={`${
              isVisible ? 'animate-slide-in-left' : 'opacity-0'
            }`}
          >
            <span className="inline-block text-gold font-heading font-semibold text-sm tracking-widest uppercase mb-4">
              Localização
            </span>
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-dark leading-tight mb-6">
              No centro de Mauá,{' '}
              <span className="text-gold">perto de tudo</span>
            </h2>
            <p className="text-gray-medium text-lg leading-relaxed mb-8">
              Localizado na Rua Rio Branco, 379 — Vila Augusto, o hotel
              está a apenas 5 minutos a pé do centro de Mauá e a cerca de
              300 metros do Terminal Municipal de Mauá, com fácil acesso a
              transporte público, comércios, restaurantes e serviços essenciais.
            </p>

            {/* Location highlights */}
            <div className="space-y-4">
              {[
                {
                  icon: '🚆',
                  title: 'Terminal Municipal a ~300m',
                  desc: 'Acesso rápido a ônibus e transporte público.',
                },
                {
                  icon: '🏪',
                  title: 'Comércio ao redor',
                  desc: 'Restaurantes, farmácias, mercados e Estádio Bruno José Daniel nas proximidades.',
                },
                {
                  icon: '🚗',
                  title: '5 min a pé do centro',
                  desc: 'Localização acessível por carro ou transporte público.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm"
                >
                  <span className="text-2xl mt-0.5">{item.icon}</span>
                  <div>
                    <h4 className="font-heading font-semibold text-dark text-sm mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-medium text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map */}
          <div
            className={`${
              isVisible ? 'animate-slide-in-right' : 'opacity-0'
            }`}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.5!2d-46.4614!3d-23.6686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce6f2a5b6e0b0f%3A0x9dff1e3a8a24fc4e!2sR.%20Rio%20Branco%2C%20379%20-%20Vila%20Augusto%2C%20Mau%C3%A1%20-%20SP%2C%2009310-110!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Hotel Ouro de Mauá"
                className="w-full h-[300px] sm:h-[350px] lg:h-[450px]"
              />
            </div>
            <div className="mt-6 flex items-center gap-3 text-gray-medium">
              <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <p className="text-sm">
                R. Rio Branco, 379 — Vila Augusto, Mauá - SP, 09310-110
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
