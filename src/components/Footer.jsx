export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-8 grid gap-6 md:grid-cols-3">
        <div>
          <h3 className="font-semibold text-white">Serene Garden House</h3>
          <p className="text-sm opacity-80">Quiet luxury for weddings & stays.</p>
        </div>
        <div className="text-sm">
          <p>Kigali, Rwanda</p>
          <p>+250 700 000 000</p>
          <p>hello@serenegarden.rw</p>
        </div>
        <p className="text-sm md:text-right opacity-70">
          © {new Date().getFullYear()} Serene Garden House
        </p>
      </div>
    </footer>
  );
}
