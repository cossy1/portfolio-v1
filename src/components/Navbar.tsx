export default function Navbar() {
    return (
        <header className="bg-white/80 backdrop-blur sticky top-0 z-40 shadow-sm">
            <div className="container flex items-center justify-between py-4">
                <a href="#" className="text-xl font-bold text-[#0ea5e9]">Cosmas Onyekwuo</a>
                <nav className="hidden md:flex gap-6 items-center">
                    <a href="#about" className="hover:text-[#0ea5e9]">About</a>
                    <a href="#projects" className="hover:text-[#0ea5e9]">Projects</a>
                    <a href="#contact" className="hover:text-[#0ea5e9]">Contact</a>
                    <a href="/resume.pdf" className="px-4 py-2 border rounded-md text-sm">Resume</a>
                </nav>
                <div className="md:hidden">
                    {/* small burger for mobile - simple anchor for now */}
                    <a href="#projects" className="text-sm">Menu</a>
                </div>
            </div>
        </header>
    )
}