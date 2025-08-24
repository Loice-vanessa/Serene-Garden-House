import { rooms } from "../data/rooms";

export default function Rooms() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6">Rooms</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {rooms.map((r) => (
          <article key={r.id} className="bg-white rounded-2xl shadow overflow-hidden">
            <img src={r.image} alt={r.name} className="w-full h-56 object-cover" />
            <div className="p-5 space-y-2">
              <h3 className="text-xl font-semibold">{r.name}</h3>
              <p className="text-gray-600">{r.description}</p>
              <p className="font-medium">${r.price}/night · up to {r.capacity} guests</p>
              <a href="/booking" className="inline-block mt-2 px-4 py-2 bg-green-700 text-white rounded-lg">
                Book Now
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
