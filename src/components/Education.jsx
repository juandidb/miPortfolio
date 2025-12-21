import React from 'react';

export default function Education() {
  const items = [
    { 
      title: 'B.Degree in Computer Science — Universidad Nacional de La Plata', 
      period: '2022 — Present', 
      desc: 'Bachelor in distributed systems and software engineering.',
      credential: 'https://example.com/diploma-cs'
    },
    { 
      title: 'Google IT Support Professional Certificate', 
      period: '2025', 
      desc: 'Eight-month IT support program, developed by Google, that covers troubleshooting, customer service, networking, operating systems, system administration, and security, and includes hands-on labs.',
      credential: 'https://coursera.org/share/97732f9da1ee1d5306cf1da8b332174f'
    },
    { 
      title: 'Google Advanced Data Analytics Capstone', 
      period: '2025', 
      desc: 'Capstone project from Google’s Advanced Data Analytics program, focused on applying statistical analysis, data modeling, and insight generation using real-world datasets.',
      credential: 'https://coursera.org/share/97732f9da1ee1d5306cf1da8b332174f'
    },
    { 
      title: 'Data Analysis Institute Of Managment, Technolgy and Finance', 
      period: '2025', 
      desc: 'Four-month program at the educational and research institute with HQ at Lisbon, Portugal, focused on business & professional hybrid (on-campus and online) education at areas: Business & Administration, Science & Technology, Banking & Finance.',
      credential: 'https://edu.gtf.pt/pluginfile.php/1/tool_certificate/issues/1765740135/3262015396JD.pdf'
    },
    { 
      title: 'Back-End / Node JS - Ministerio de Educacion de Buenos Aires', 
      period: '2025', 
      desc: 'Backend development program focused on Node.js, covering REST APIs, databases, authentication, server-side architecture, and security, with hands-on projects and real-world use cases.',
      credential: 'hhttps://aulasvirtuales.bue.edu.ar/mod/customcert/view.php?id=701082&downloadown=1'
    }
  ];

  return (
    <section id="education" className="pt-12 pb-12">
      <h2 className="section-title">Education</h2>
      <ol className="border-l pl-4">
        {items.map((it, i) => (
          <li key={i} className="mb-6">
            <div className="text-sm text-slate-500">{it.period}</div>
            <div className="mt-1 font-semibold">{it.title}</div>
            <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">{it.desc}</div>
            {it.credential && (
              <a 
                href={it.credential} 
                target="_blank" 
                rel="noreferrer"
                className="inline-block mt-3 px-3 py-1 text-sm bg-primary text-white rounded hover:opacity-90 transition"
              >
                Show credential
              </a>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
