import { Gauge, CalendarClock, BatteryCharging, BarChart3, BellRing, ShieldCheck } from "lucide-react";

function Card({ title, description, icon: Icon, color }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border bg-white/70 backdrop-blur p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className={`absolute -top-8 -right-8 h-24 w-24 rounded-full opacity-10 ${color}`} />
      <div className="flex items-start gap-3">
        <div className={`h-10 w-10 grid place-items-center rounded-lg text-white ${color} shadow`}> 
          <Icon size={18} />
        </div>
        <div>
          <h3 className="font-semibold text-slate-900">{title}</h3>
          <p className="mt-1 text-sm text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function Modules() {
  return (
    <section id="modules" className="py-16 bg-gradient-to-b from-white via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Three modules, one intelligence platform</h2>
          <p className="mt-2 text-slate-600">Designed for EV owners, fleet operators, and battery engineers—each sees exactly what they need, without the noise.</p>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <Card
            title="My Battery Health"
            description="Health score, smarter range, charging optimization, and resale insights for daily drivers."
            icon={Gauge}
            color="bg-indigo-600"
          />
          <Card
            title="Fleet Command Center"
            description="Fleet health, smart charging schedules, TCO analytics, and predictive maintenance."
            icon={CalendarClock}
            color="bg-blue-600"
          />
          <Card
            title="Engineering Insight"
            description="Anonymized analytics, degradation analysis, and algorithm benchmarking for OEMs."
            icon={BarChart3}
            color="bg-slate-900"
          />
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-5">
          <Card
            title="Charging Health Coach"
            description="Personalized guidance on charge limits and habits to extend battery life."
            icon={BatteryCharging}
            color="bg-emerald-600"
          />
          <Card
            title="Pre-failure Alerts"
            description="Early anomaly detection for voltage imbalance and temperature spikes."
            icon={BellRing}
            color="bg-amber-600"
          />
          <Card
            title="Warranty & Compliance"
            description="One-click reports for warranty claims and sustainability audits."
            icon={ShieldCheck}
            color="bg-violet-600"
          />
        </div>
      </div>
    </section>
  );
}
