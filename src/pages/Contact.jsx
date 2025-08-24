export default function Contact() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-3">Contact Us</h2>
      <p className="text-gray-600">We’re happy to help you plan your day.</p>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="font-semibold mb-1">Address</h3>
          <p>Kigali, Rwanda</p>
        </div>
        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="font-semibold mb-1">Phone</h3>
          <p>+250 700 000 000</p>
        </div>
        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="font-semibold mb-1">Email</h3>
          <p>hello@serenegarden.rw</p>
        </div>
      </div>
    </section>
  );
}
