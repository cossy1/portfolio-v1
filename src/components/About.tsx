export type Project = {
    id: string;
    title: string;
    description: string;
    tags?: string[];
    link?: string;       // live demo
    repo?: string;       // github
    image?: string;
}

export default function About() {
    return (
        <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-2">
                    <h2 className="text-3xl font-bold">About me</h2>
                    <p className="mt-4 text-gray-600">I am a frontend developer with a focus on building accessible, performant, and delightful user interfaces using React and TypeScript. I care about good UX and ship production-ready code.</p>

                    <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <li className="text-sm"><strong>Languages:</strong> TypeScript, JavaScript</li>
                        <li className="text-sm"><strong>Frameworks:</strong> React, Vite, TailwindCSS</li>
                        <li className="text-sm"><strong>Style:</strong> Atomic components, accessible HTML</li>
                        <li className="text-sm"><strong>Tools:</strong> Git, CI, Testing</li>
                    </ul>
                </div>
                <div className="flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg">
                        <img src="/src/assets/me.jpg" alt="Your avatar" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </section>
    )
}