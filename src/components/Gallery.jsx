export default function Gallery() {
  const images = [
    'https://images.unsplash.com/photo-1529336953121-c9a0529c1c73?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1555949963-aa79dcee981d?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1526045478516-99145907023c?q=80&w=1200&auto=format&fit=crop',
  ];

  return (
    <section id="gallery" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Gallery</h2>
          <p className="mt-2 text-slate-600">Snapshots from past hackathons and community events</p>
        </div>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {images.map((src, i) => (
            <div key={i} className="group overflow-hidden rounded-xl ring-1 ring-slate-200">
              <img src={src} alt="Hackathon" className="h-32 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
