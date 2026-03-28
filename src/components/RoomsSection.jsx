import { useScrollAnimation } from '../hooks/useScrollAnimation';

const WHATSAPP_URL = 'https://wa.me/551143090730?text=Olá! Gostaria de fazer uma reserva no Hotel Ouro de Mauá.';

const rooms = [
  {
    name: 'Quarto Standard',
    description:
      'Ideal para estadias rápidas e práticas. Ambiente confortável com tudo que você precisa para uma boa noite de descanso.',
    image:
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80',
    amenities: ['Wi-Fi gratuito', 'TV tela plana', 'Ar-condicionado', 'Banheiro privativo'],
    whatsappText: 'Olá! Gostaria de reservar um Quarto Standard.',
  },
  {
    name: 'Quarto Duplo',
    description:
      'Perfeito para casais ou quem busca mais espaço. Ambiente amplo, confortável e com mini-bar para maior comodidade.',
    image:
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80',
    amenities: ['Wi-Fi gratuito', 'TV tela plana', 'Ar-condicionado', 'Mini-bar'],
    whatsappText: 'Olá! Gostaria de reservar um Quarto Duplo.',
  },
  {
    name: 'Quarto Família',
    description:
      'Espaço pensado para famílias. Quartos amplos com ar-condicionado, TV via satélite e produtos de higiene incluídos.',
    image:
      'https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?auto=format&fit=crop&w=800&q=80',
    amenities: ['Wi-Fi gratuito', 'TV via satélite', 'Ar-condicionado', 'Chinelos e amenities'],
    whatsappText: 'Olá! Gostaria de reservar um Quarto Família.',
  },
];

function RoomCard({ room, index }) {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <span className="bg-gold/90 text-dark font-heading font-semibold text-xs px-3 py-1.5 rounded-lg uppercase tracking-wider">
            {room.name}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-7">
        <h3 className="font-heading font-bold text-xl text-dark mb-3">
          {room.name}
        </h3>
        <p className="text-gray-medium text-sm leading-relaxed mb-5">
          {room.description}
        </p>

        {/* Amenities */}
        <div className="flex flex-wrap gap-2 mb-6">
          {room.amenities.map((amenity) => (
            <span
              key={amenity}
              className="inline-flex items-center gap-1.5 bg-gray-light text-gray-medium text-xs font-medium px-3 py-1.5 rounded-lg"
            >
              <svg className="w-3.5 h-3.5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              {amenity}
            </span>
          ))}
        </div>

        {/* CTA */}
        <a
          href={`${WHATSAPP_URL.split('?')[0]}?text=${encodeURIComponent(room.whatsappText)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 bg-dark hover:bg-gold text-white hover:text-dark font-heading font-semibold text-sm px-6 py-3.5 rounded-xl transition-all duration-300"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Reservar este Quarto
        </a>
      </div>
    </div>
  );
}

export default function RoomsSection() {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section id="quartos" className="py-24 lg:py-32 bg-gray-light">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center max-w-2xl mx-auto mb-16 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <span className="inline-block text-gold font-heading font-semibold text-sm tracking-widest uppercase mb-4">
            Acomodações
          </span>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-dark mb-5">
            Escolha o quarto ideal{' '}
            <span className="text-gold">para você</span>
          </h2>
          <p className="text-gray-medium text-lg leading-relaxed">
            Opções pensadas para diferentes necessidades, todas com conforto,
            limpeza e ótimo custo-benefício.
          </p>
        </div>

        {/* Room cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <RoomCard key={room.name} room={room} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
