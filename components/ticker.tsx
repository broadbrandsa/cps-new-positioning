const items = [
  "Higher Certificate in Banking",
  "Advanced Certificate in Leadership",
  "Long Term Insurance Advisor",
  "Investment Advisor",
  "Agile Banking Professional",
  "Business Banking Practitioner",
  "Insurance Underwriter",
  "Organisational Risk Practitioner",
];

export function Ticker() {
  // Duplicate the list so the CSS keyframe can cycle smoothly
  const doubled = [...items, ...items];
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {doubled.map((label, i) => (
          <div key={i} className="ticker-item">{label}</div>
        ))}
      </div>
    </div>
  );
}
