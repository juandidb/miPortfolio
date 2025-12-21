import { ExternalLinkIcon } from './icons'

export default function ProjectCard({ project }) {
  return (
    <article className="border rounded-lg p-4 hover:shadow-md transition-shadow bg-white dark:bg-slate-800">
      <h3 className="text-lg font-semibold">{project.title}</h3>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{project.description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded">{t}</span>
        ))}
      </div>
      <div className="mt-3 flex gap-3 items-center">
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer" className="text-sm text-primary flex items-center gap-1">
            GitHub <ExternalLinkIcon />
          </a>
        )}
        {project.live && (
          <a href={project.live} target="_blank" rel="noreferrer" className="text-sm text-slate-1000 dark:text-slate-500">Live Demo</a>
        )}
      </div>
    </article>
  )
}
