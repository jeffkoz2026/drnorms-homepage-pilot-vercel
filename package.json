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

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-stone-200 bg-gradient-to-b from-[#fffaf5] to-[#f8f7f4]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center lg:py-24">
          
          <div>
            <div className="mb-4 inline-flex rounded-full border border-stone-300 bg-white/80 px-3 py-1 text-sm">
              Dr. Norm’s
            </div>

            <h1 className="text-4xl font-semibold md:text-6xl leading-tight">
              Artisan Edibles<br/>
              Targeted Wellness<br/>
              Max<span className="align-super text-[0.6em]">™</span>
            </h1>

            <p className="mt-5 text-lg text-stone-600">
              Delicious · Effective · Precisely dosed
            </p>

            <div className="mt-8 flex gap-3">
              <button className="rounded-2xl bg-stone-900 px-5 py-3 text-white">Explore</button>
              <button className="rounded-2xl border border-stone-300 px-5 py-3">Ask Dr. Norm</button>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">

            <div className="rounded-[2rem] bg-white p-6 shadow-lg">
              <div className="h-40 rounded-xl bg-amber-100 mb-4"/>
              <h3 className="text-lg font-semibold">Shop Edibles</h3>
              <p className="text-sm text-stone-600 mt-2">
                Delectable cookies, brownies, crispy rice bars, gummies & more.
              </p>
            </div>

            <div className="rounded-[2rem] bg-white p-6 shadow-lg md:mt-10">
              <div className="h-40 rounded-xl bg-indigo-100 mb-4"/>
              <h3 className="text-lg font-semibold">Shop Wellness</h3>
              <p className="text-sm text-stone-600 mt-2">
                Science-backed formulations for sleep, relief, and everyday life.
              </p>
            </div>

            <div className="rounded-[2rem] bg-white p-6 shadow-lg md:mt-5">
              <div className="h-40 rounded-xl bg-emerald-100 mb-4"/>
              <h3 className="text-lg font-semibold">Shop MAX</h3>
              <p className="text-sm text-stone-600 mt-2">
                High dose products for experienced users — tablets, gummies, and cookies.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* PRODUCT LINES */}
      <section className="py-14 px-6 max-w-7xl mx-auto">
        <p className="uppercase text-sm text-stone-500 tracking-wide">Our Product Lines</p>

        <div className="grid md:grid-cols-5 gap-4 mt-6">
          {products.map(p => (
            <div key={p.name} className="bg-white rounded-xl p-4 shadow">
              <div className="h-32 bg-stone-100 rounded mb-3"/>
              <h4 className="font-semibold">{p.name}</h4>
              <p className="text-sm text-stone-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SLEEP / FEEL */}
      <section className="grid md:grid-cols-2 gap-4 px-6 max-w-7xl mx-auto pb-14">
        
        <div className="bg-indigo-900 text-white rounded-xl p-8">
          <h3 className="text-2xl font-semibold">SleepWell</h3>
          <p className="mt-3">Fall asleep faster. Stay asleep longer.</p>
          <button className="mt-4 bg-white text-black px-4 py-2 rounded">Shop Sleep</button>
        </div>

        <div className="bg-white rounded-xl p-8 shadow">
          <h3 className="text-2xl font-semibold">FeelWell</h3>
          <p className="mt-3 text-stone-600">
            Pain relief. Stress relief. Built for real life.
          </p>
          <button className="mt-4 bg-stone-900 text-white px-4 py-2 rounded">Shop Relief</button>
        </div>

      </section>

      {/* STANDARDS */}
      <section className="bg-stone-100 py-14 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="uppercase text-sm text-stone-500">Why Dr. Norm’s</p>
          <h2 className="text-3xl font-semibold mt-2">We have standards.</h2>

          <div className="grid md:grid-cols-3 gap-4 mt-6">
            {pillars.map(p => (
              <div key={p.title} className="bg-white p-6 rounded-xl shadow">
                <h4 className="font-semibold">{p.title}</h4>
                <p className="text-sm text-stone-600 mt-2">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="py-14 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        <div>
          <p className="uppercase text-sm text-stone-500">Our Story</p>
          <h2 className="text-3xl font-semibold mt-2">A family brand you can trust</h2>
          <p className="mt-4 text-stone-600">
            Inspired by our dad, the real Dr. Norm, and our pharmacist mom Audrey — whose legendary cookies started it all.
          </p>
          <p className="mt-3 text-sm text-stone-500">Want the full story?</p>
          <button className="mt-3 border px-4 py-2 rounded">Learn More</button>
        </div>

        <div className="h-64 bg-stone-200 rounded-xl"/>
      </section>

      {/* ASK DR NORM */}
      <section className="bg-stone-900 text-white py-14 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div>
            <p className="uppercase text-sm text-stone-400">Ask Dr. Norm</p>
            <h2 className="text-3xl font-semibold mt-2">Have a question? Ask Dr. Norm.</h2>
            <p className="text-stone-300 mt-3">
              Guidance, recommendations, and straight answers about cannabis.
            </p>
          </div>

          <div className="flex gap-3">
            <button className="bg-white text-black px-4 py-2 rounded">Get a Recommendation</button>
            <button className="border border-white px-4 py-2 rounded">Find Near You</button>
          </div>

        </div>
      </section>

    </div>
  );
}
