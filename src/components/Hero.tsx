import Me from "../assets/me.jpg";


export default function Hero() {
    return (
        <section className="py-20">
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                    <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
                        Frontend Developer
                        <br />
                        building delightful web experiences
                    </h1>
                    <p className="mt-4 text-lg text-gray-600">
                        I specialise in React, TypeScript, and UI architecture. I enjoy
                        turning complex problems into user-friendly products.
                    </p>
                    <div className="mt-6 flex gap-4">
                        <a
                            href="#projects"
                            className="inline-block bg-[#0ea5e9] text-white px-5 py-3 rounded-md shadow hover:opacity-95"
                        >
                            See my work
                        </a>
                        <a
                            href="#contact"
                            className="inline-block border px-5 py-3 rounded-md"
                        >
                            Contact me
                        </a>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <div className="w-full max-w-sm bg-gradient-to-br from-white to-gray-100 rounded-2xl p-6 shadow-lg">
                        <img
                            src={Me}
                            alt="portfolio hero"
                            className="w-full h-64 object-cover rounded-md"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
