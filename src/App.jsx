export default function DrNormsHomepageMockup() {
  const products = [
    { name: 'Cookies', desc: 'Classic, low-dose or MAX.' },
    { name: 'Brownies', desc: 'Rich, indulgent, long-lasting.' },
    { name: 'Crispy Rice Bars', desc: 'Delicious. Nostalgic. Potent.' },
    { name: 'Gummies', desc: 'High dose, solventless and distillate options.' },
    { name: 'MAX Tabs', desc: 'High dose. Precise. Discreet.' },
  ];

  const pillars = [
    { title: 'Delicious First', body: 'Real ingredients. Real recipes. No weedy taste.' },
    { title: 'Precise Dosing', body: 'Safe, consistent, and reliable.' },
    { title: 'Built to Perform', body: 'Proven science. Proven results.' },
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <section className="border-b border-stone-200 p-10">
        <h1 className="text-4xl font-bold">Dr. Norm’s Homepage Pilot</h1>
        <p className="mt-2 text-stone-600">If you see this styled, Tailwind works.</p>
      </section>

      <section className="p-10">
        <h2 className="text-2xl font-semibold mb-4">Products</h2>
        {products.map((p) => (
          <div key={p.name} className="mb-2">
            <strong>{p.name}</strong> — {p.desc}
          </div>
        ))}
      </section>

      <section className="p-10 bg-stone-100">
        <h2 className="text-2xl font-semibold mb-4">Standards</h2>
        {pillars.map((p) => (
          <div key={p.title} className="mb-2">
            <strong>{p.title}</strong> — {p.body}
          </div>
        ))}
      </section>
    </div>
  );
}
