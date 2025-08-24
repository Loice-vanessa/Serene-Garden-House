import { useMemo, useState } from "react";

const todayStr = () => new Date().toISOString().split("T")[0];

export default function Booking() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    type: "",
    guests: 50,
  });

  const minDate = useMemo(() => todayStr(), []);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // simple store in localStorage (replace with real backend later)
    const list = JSON.parse(localStorage.getItem("bookings") || "[]");
    list.push({ ...form, createdAt: new Date().toISOString() });
    localStorage.setItem("bookings", JSON.stringify(list));
    alert("Booking submitted! We will contact you shortly.");
    setForm({ name: "", email: "", phone: "", date: "", type: "", guests: 50 });
  };

  return (
    <section className="max-w-xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6">Book Your Event / Stay</h2>

      <form onSubmit={onSubmit} className="bg-white rounded-2xl shadow p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium">Full Name</label>
          <input
            name="name"
            value={form.name}
            onChange={onChange}
            className="mt-1 w-full rounded-lg border p-2"
            placeholder="e.g., Uwase Djanati"
            required
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              className="mt-1 w-full rounded-lg border p-2"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Phone</label>
            <input
              name="phone"
              value={form.phone}
              onChange={onChange}
              className="mt-1 w-full rounded-lg border p-2"
              placeholder="+250 7xx xxx xxx"
              required
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Date</label>
            <input
              type="date"
              name="date"
              min={minDate}
              value={form.date}
              onChange={onChange}
              className="mt-1 w-full rounded-lg border p-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Event Type</label>
            <select
              name="type"
              value={form.type}
              onChange={onChange}
              className="mt-1 w-full rounded-lg border p-2"
              required
            >
              <option value="">Select…</option>
              <option>Wedding</option>
              <option>Birthday</option>
              <option>Conference</option>
              <option>Room Stay</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium">Guests</label>
          <input
            type="number"
            min="1"
            name="guests"
            value={form.guests}
            onChange={onChange}
            className="mt-1 w-full rounded-lg border p-2"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-green-700 text-white py-3 font-semibold"
        >
          Submit Booking
        </button>
      </form>
    </section>
  );
}
