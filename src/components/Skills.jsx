import React from 'react';

export default function Skills() {
  const skills = {
    Frontend: ['React', 'Vite', 'Tailwind', 'CSS3', 'HTML5', 'JavaScript'],
    Backend: ['Node.js', 'Express', 'Postgres', 'Go'],
    Tools: ['Git', 'Docker', 'CI/CD', 'OpenTelemetry']
  };

  return (
    <section id="skills" className="pt-12 pb-12">
      <h2 className="section-title">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {Object.entries(skills).map(([category, list]) => (
          <div key={category} className="p-4 bg-slate-50 dark:bg-slate-800 rounded">
            <h3 className="font-medium mb-2">{category}</h3>
            <ul className="text-sm space-y-1">
              {list.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
