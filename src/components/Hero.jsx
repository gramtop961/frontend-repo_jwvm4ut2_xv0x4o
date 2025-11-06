import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[78vh] md:min-h-[86vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/DAWBaaySM7FLUKpn/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-20 md:pt-28 lg:pt-32 max-w-3xl">
            <span className="inline-flex items-center gap-2 text-xs font-medium text-indigo-700 bg-indigo-50 rounded-full px-3 py-1 ring-1 ring-indigo-200">New • AI battery insights</span>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
              VoltAI Analytics
            </h1>
            <p className="mt-4 text-lg md:text-xl text-slate-700">
              Powering smarter EV decisions with predictive battery health, real-world range, and intelligent charging guidance.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#modules" className="inline-flex justify-center items-center px-5 py-3 rounded-md bg-slate-900 text-white font-medium hover:bg-slate-800">
                Explore modules
              </a>
              <a href="#pricing" className="inline-flex justify-center items-center px-5 py-3 rounded-md bg-white text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50 font-medium">
                See pricing
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
