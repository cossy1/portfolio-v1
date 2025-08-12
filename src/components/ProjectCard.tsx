import type { Project } from "./About";

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <article className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition-shadow">
            <div className="h-40 w-full bg-gray-100 rounded-md border border-gray-100 overflow-hidden">
                <img src={project.image} alt={project.title} className="size-full object-cover" />
            </div>
            <h3 className="mt-3 font-semibold text-lg">{project.title}</h3>
            <p className="text-sm mt-2 text-gray-600">{project.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
                {project.tags?.map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 bg-gray-100 rounded">{tag}</span>
                ))}
            </div>
            <div className="mt-4 flex gap-2">
                {project.link && <a href={project.link} className="text-sm underline">Live</a>}
                {project.repo && <a href={project.repo} className="text-sm underline">Code</a>}
            </div>
        </article>
    )
}