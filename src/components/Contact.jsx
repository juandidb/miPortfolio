import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  function handleChange(e) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  function validate() {
    if (!form.name.trim()) return 'Please enter your name.';
    if (!form.email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) return 'Please enter a valid email.';
    if (form.message.trim().length < 10) return 'Message must be at least 10 characters.';
    return null;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const err = validate();
    if (err) return setStatus({ type: 'error', message: err });
    setStatus({ type: 'success', message: 'Mensaje enviado correctamente.' });
    setForm({ name: '', email: '', message: '' });
  }

  return (
    <section id="contact" className="pt-12 pb-12">
      <h2 className="section-title">Contact</h2>
      <form className="max-w-md mx-auto space-y-4" onSubmit={handleSubmit}>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Nombre" className="w-full p-2 border rounded" />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="w-full p-2 border rounded" />
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Mensaje" className="w-full p-2 border rounded" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Enviar</button>
        {status && <div className={status.type === 'error' ? 'text-red-600' : 'text-green-600'}>{status.message}</div>}
      </form>
      <div className="mt-6">
        <div className="text-sm">Email: <a href="mailto:juan@example.com" className="text-primary">juan@example.com</a></div>
        <div className="text-sm mt-1">GitHub: <a href="https://github.com/juan" className="text-primary">github.com/juan</a></div>
        <div className="text-sm mt-1">LinkedIn: <a href="https://linkedin.com/in/juan" className="text-primary">linkedin.com/in/juan</a></div>
      </div>
    </section>
  );
}
