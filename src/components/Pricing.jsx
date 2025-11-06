import { Check } from "lucide-react";

const featuresFree = [
  "Battery Health Score",
  "Weekly Summary",
  "Basic Range Insights",
];

const featuresPro = [
  "Predictive Alerts",
  "Charging Optimization",
  "Detailed Degradation Tracking",
  "Resale Value Report",
];

function Tier({ name, price, description, features, highlight }) {
  return (
    <div className={`relative rounded-2xl border bg-white p-6 shadow-sm ${highlight ? 'ring-2 ring-slate-900' : ''}`}>
      {highlight && (
        <span className="absolute -top-2 right-4 text-[10px] px-2 py-0.5 rounded-full bg-slate-900 text-white">Most popular</span>
      )}
      <h3 className="text-lg font-semibold text-slate-900">{name}</h3>
      <p className="mt-1 text-sm text-slate-600">{description}</p>
      <div className="mt-4 flex items-end gap-1">
        <span className="text-3xl font-extrabold text-slate-900">{price}</span>
        <span className="text-sm text-slate-500">/month</span>
      </div>
      <ul className="mt-4 space-y-2">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
            <Check className="mt-0.5 h-4 w-4 text-emerald-600" /> {f}
          </li>
        ))}
      </ul>
      <button className={`mt-6 w-full py-2.5 rounded-md font-medium ${highlight ? 'bg-slate-900 text-white hover:bg-slate-800' : 'bg-slate-100 hover:bg-slate-200 text-slate-900'}`}>Get started</button>
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Simple pricing that scales with you</h2>
          <p className="mt-2 text-slate-600">Start free. Upgrade for predictive insights and full optimization.</p>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <Tier
            name="Free"
            price="$0"
            description="For EV owners who want the basics."
            features={featuresFree}
          />
          <Tier
            name="Premium"
            price="$4.99"
            description="Unlock the full intelligence suite for your EV."
            features={featuresPro}
            highlight
          />
        </div>
      </div>
    </section>
  );
}
