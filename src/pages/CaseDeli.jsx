import React from 'react';
import { useI18n } from '../i18n/index.jsx';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Download } from 'lucide-react';

export default function CaseDeli() {
    const handleScrollToContact = (e) => {
      if (e && e.preventDefault) e.preventDefault();
      const el = document.getElementById('contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.location.hash = '#contact';
      }
    };
  const { t } = useI18n();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.header initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-1">
              <div className="mb-4">
                <button
                  onClick={() => navigate(-1)}
                  aria-label="Volver"
                  className="inline-flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-md text-sm hover:shadow-sm transition"
                >
                  Volver
                </button>
              </div>

              <span className="inline-block text-sm font-semibold text-primary mb-3">{t('projects.featured.badge')}</span>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">deli.app · Plataforma open source para delivery local</h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Una herramienta pensada para comercios y usuarios de ciudades chicas, con foco en flexibilidad y costos bajos. Yo lidero y ejecuto el proyecto end-to-end: investigación, diseño, desarrollo frontend y backend, y preparación para despliegues y pruebas piloto.</p>

              <div className="flex flex-wrap gap-3 mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-sm font-medium">React</div>
                <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-sm font-medium">Node.js</div>
                <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-sm font-medium">Postgres</div>
                <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-sm font-medium">Docker</div>
                <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-sm font-medium">Tailwind</div>
              </div>

                <div className="flex items-center gap-3">
                </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img src={`${import.meta.env.BASE_URL}assets/proyectos/9delivery.png`} alt="Deli.app screenshot" className="w-full h-64 md:h-80 object-cover" />
              </div>
            </div>
          </div>
        </motion.header>

        <motion.section initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05 }} className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <article className="prose dark:prose-invert max-w-none">
              <h2>El desafío</h2>
              <p>Deli.app nace de una necesidad concreta: en muchas ciudades pequeñas del interior del país, las grandes apps no existen o no responden a la realidad local. Comercios con equipos reducidos necesitaban una solución que fuera fácil de operar, flexible y económicamente accesible.</p>

              <h2>Mi enfoque</h2>
              <p>Como responsable del proyecto end-to-end, trabajo desde la definición del problema hasta la preparación para despliegues y pruebas piloto. El enfoque combina investigación cualitativa (entrevistas a comercios y usuarios), análisis de flujos operativos, y prototipado de alta fidelidad para validar decisiones antes de implementar.</p>

              <h2>Solución</h2>
              <p>Diseñé una plataforma open-source con una experiencia centrada en la rapidez de pedido y operaciones administrativas sencillas. La solución incluye: panel administrativo para comercios, flujo de checkout optimizado, y APIs robustas que permiten integraciones con pasarelas locales.</p>

              <h2>Proceso</h2>
              <ol>
                <li><strong>Investigación:</strong> entrevistas, shadowing y mapeo de procesos.</li>
                <li><strong>UX:</strong> flujos de navegación y prototipos interactivos validados con usuarios reales.</li>
                <li><strong>UI:</strong> identidad visual, diseño de logo y sistema de componentes.</li>
                <li><strong>Engineering:</strong> implementación frontend en React + Tailwind; backend en Node.js con API REST; despliegue en contenedores Docker y base de datos Postgres.</li>
                <li><strong>Operaciones:</strong> scripts de despliegue, documentación y guía de adaptación para comercios locales.</li>
              </ol>

              <h2>Mi rol</h2>
              <p>Full‑stack product lead: investigación, definición de producto, prototipado, diseño visual, implementación frontend y backend, definición de la base de datos, testing, deployment y documentación. En resumen: todo el stack — desde el primer wireframe hasta producción.</p>

              <h2>Resultados</h2>
              <p>El proyecto está en desarrollo y actualmente se están ejecutando pruebas piloto controladas. Los resultados preliminares y las pruebas internas están guiando iteraciones para reducir fricción y optimizar rutas de pedido; las métricas finales se confirmarán tras la expansión de las pruebas.</p>
            </article>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg text-center">
                  <div className="text-lg font-semibold">Mejoras preliminares</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Evidencia temprana de incremento en la conversión en pruebas controladas.</div>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg text-center">
                  <div className="text-lg font-semibold">Operaciones optimizadas</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Indicadores preliminares muestran reducción del tiempo operativo medio.</div>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg text-center">
                  <div className="text-lg font-semibold">Open Source</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Diseñada para fácil adaptación por comercios locales.</div>
                </div>
              </div>

            <div className="mt-6">
              <h3 className="mb-3 font-semibold">Arquitectura de roles</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">La plataforma funciona con tres roles principales, cada uno diseñado para cubrir necesidades distintas dentro del ecosistema:</p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 mb-4">
                <li><strong>Admin:</strong> gestión global de la plataforma, configuraciones, métricas y soporte a restaurantes.</li>
                <li><strong>Restaurante:</strong> panel operativo para recibir pedidos, gestionar menú, tiempos y reportes diarios.</li>
                <li><strong>User (Cliente):</strong> experiencia de pedido optimizada, historial, y opciones de pago locales.</li>
              </ul>

              <div className="space-y-4">
                <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg text-center">
                  <h4 className="mb-2 font-semibold">Repositorio y Demo</h4>
                  <p className="text-gray-700 dark:text-gray-300">Repositorio y Demo disponible muy pronto.</p>
                </div>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
              <h4 className="font-semibold mb-2">Datos del proyecto</h4>
              <dl className="text-sm text-gray-700 dark:text-gray-300">
                <dt className="font-medium">Rol</dt>
                <dd className="mb-2">Diseñador & Desarrollador Full‑Stack</dd>
                <dt className="font-medium">Duración</dt>
                <dd className="mb-2">4 meses (desarrollo inicial)</dd>
                <dt className="font-medium">Tecnologías</dt>
                <dd className="mb-2">React, Node.js, Postgres, Docker, Tailwind</dd>
                <dt className="font-medium">Estado</dt>
                <dd>Open‑source / En desarrollo (pruebas piloto en curso)</dd>
              </dl>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
              <h4 className="font-semibold mb-2">Contacto</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">Si querés ver el repositorio o coordinar una charla sobre este proyecto, contactame.</p>
              <div className="mt-3 flex flex-col gap-2">
                <a href="https://github.com/juandidb" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 border rounded-md">Ver repo</a>
                <a href="#contact" onClick={handleScrollToContact} className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-md">Contactarme</a>
              </div>
            </div>
          </aside>
        </motion.section>
      </div>
    </div>
  )
}
