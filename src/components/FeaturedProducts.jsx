const products = [
  {
    id: 1,
    name: 'Minimal Card Wallet',
    price: 48,
    image: 'https://images.unsplash.com/photo-1703355685552-885762b8c9b8?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNaW5pbWFsJTIwQ2FyZCUyMFdhbGxldHxlbnwwfDB8fHwxNzYyMjM2OTg4fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    name: 'Pastel Headphones',
    price: 129,
    image: 'https://images.unsplash.com/photo-1565536421961-1f165e0c981e?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQYXN0ZWwlMjBIZWFkcGhvbmVzfGVufDB8MHx8fDE3NjIyMzY5OTF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    name: 'Smart Thermostat',
    price: 199,
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 4,
    name: 'Studio Desk Lamp',
    price: 89,
    image: 'https://images.unsplash.com/photo-1637520943049-648cec6c18d5?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTdHVkaW8lMjBEZXNrJTIwTGFtcHxlbnwwfDB8fHwxNzYyMjM2OTkyfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    id: 5,
    name: 'Ceramic Mug Set',
    price: 34,
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 6,
    name: 'Wireless Charger Pad',
    price: 39,
    image: 'https://images.unsplash.com/photo-1633381638729-27f730955c23?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxXaXJlbGVzcyUyMENoYXJnZXIlMjBQYWR8ZW58MHwwfHx8MTc2MjIzNjk5Mnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    id: 7,
    name: 'Leather Backpack',
    price: 210,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 8,
    name: 'Aesthetic Desk Mat',
    price: 29,
    image: 'https://images.unsplash.com/photo-1761123261084-53c40fe1e607?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBZXN0aGV0aWMlMjBEZXNrJTIwTWF0fGVufDB8MHx8fDE3NjIyMzY5OTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  }
];

export default function FeaturedProducts() {
  return (
    <section id="featured" className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">Featured products</h2>
            <p className="mt-2 text-gray-600">Curated picks with clean, minimalist aesthetics.</p>
          </div>
          <a href="#" className="hidden sm:inline text-sm font-medium text-gray-900 hover:opacity-80">View all</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <article key={p.id} className="group rounded-2xl border border-black/10 bg-white overflow-hidden hover:shadow-sm transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-900 line-clamp-1">{p.name}</h3>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-gray-900 font-semibold">${p.price}</span>
                  <button className="text-sm rounded-lg px-3 py-1.5 bg-gray-900 text-white hover:bg-gray-800">Add</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
