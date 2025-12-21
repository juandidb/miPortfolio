import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t mt-12 py-6">
      <div className="max-w-4xl mx-auto px-6 text-sm text-slate-500">
        © {new Date().getFullYear()} Juan Di Benedetto — Built with React and Tailwind. Accessible and responsive.
      </div>
    </footer>
  );
}
