import { venues } from "../data/venues";

export default function Weddings() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6">Wedding Venues</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {venues.map((v) => (
          <article key={v.id} className="bg-white rounded-2xl shadow overflow-hidden">
            <img src={v.image} alt={v.name} className="w-full h-56 object-cover" />
            <div className="p-5 space-y-2">
              <h3 className="text-xl font-semibold">{v.name}</h3>
              <p className="text-gray-600">{v.description}</p>
              <p className="font-medium">
                From ${v.price} · up to {v.capacity} guests
              </p>
              <a href="/booking" className="inline-block mt-2 px-4 py-2 bg-green-700 text-white rounded-lg">
                Check Availability
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
