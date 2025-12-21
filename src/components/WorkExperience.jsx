import React from 'react';

export default function WorkExperience() {
  const items = [
    { title: 'IT Support Specialist — OktaTech.', period: '2022 — 2024', desc: 'Responsible for diagnosing and resolving issues related to billing systems, management software, and hardware. I analyzed technical incidents, identified root causes, and provided effective solutions to ensure the smooth and reliable operation of critical systems.' },
    { title: 'Backend Engineer — Nimbus Labs', period: '2019 — 2022', desc: 'Designed APIs and worked on observability improvements for microservices.' }
  ];

  return (
    <section id="work-experience" className="pt-12 pb-12">
      <h2 className="section-title">Work Experience</h2>
      <ol className="border-l pl-4">
        {items.map((it, i) => (
          <li key={i} className="mb-6">
            <div className="text-sm text-slate-500">{it.period}</div>
            <div className="mt-1 font-semibold">{it.title}</div>
            <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">{it.desc}</div>
          </li>
        ))}
      </ol>
    </section>
  );
}
