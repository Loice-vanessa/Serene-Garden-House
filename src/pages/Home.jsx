import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="relative">
      <div
        className="h-[60vh] bg-center bg-cover"
        style={{
          backgroundImage:
            "url(https://cf.bstatic.com/xdata/images/hotel/max1024x768/492697820.jpg?k=3f86d0d6785d4a25cd13476f04867b72b367dbe976e172d0d9a7bb2aeef60483&o=)"
        }}
        role="img"
        aria-label="Lush garden wedding setting"
      />
      <div className="max-w-6xl mx-auto px-4 -mt-20 relative">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Serene Garden House
          </h1>
          <p className="mt-2 text-gray-600">
            The perfect venue for weddings, events, and luxury stays.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/booking" className="px-5 py-3 rounded-xl bg-green-700 text-white">
              Book Now
            </Link>
            <Link to="/rooms" className="px-5 py-3 rounded-xl border">
              Explore Rooms
            </Link>
            <Link to="/weddings" className="px-5 py-3 rounded-xl border">
              Wedding Venues
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
