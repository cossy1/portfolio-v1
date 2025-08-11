export default function Footer() {
    return (
        <footer className="py-8 border-t mt-12">
            <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-sm">© {new Date().getFullYear()} Your Name. All rights reserved.</div>
                <div className="flex gap-3 text-sm">
                    <a href="#" className="hover:text-[#0ea5e9]">Twitter</a>
                    <a href="#" className="hover:text-[#0ea5e9]">GitHub</a>
                    <a href="#" className="hover:text-[#0ea5e9]">LinkedIn</a>
                </div>
            </div>
        </footer>
    )
}