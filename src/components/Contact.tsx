import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const service_id = import.meta.env.VITE_SERVICE_ID;
const template_id = import.meta.env.VITE_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_PUBLIC_KEY;

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [sent, setSent] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const submit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setSent(false);
        setError(false);

        try {
            if (service_id && template_id) {
                await emailjs.send(
                    service_id,
                    template_id,
                    {
                        name,
                        email,
                        message,
                    },
                    {
                        publicKey,
                    }
                );
                setSent(true);
                setName("");
                setEmail("");
                setMessage("");
                setLoading(false);
            }
        } catch {
            setError(true);
            setLoading(false);
        }
    };

    return (
        <motion.section
            id="contact"
            className="md:py-20 py-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="container max-w-2xl">
                <h2 className="text-2xl font-bold">Get in touch</h2>
                <p className="mt-2 text-gray-600">
                    Interested in working together? Send a message.
                </p>

                <form onSubmit={submit} className="mt-6 grid gap-4">
                    <input
                        className="border rounded p-3"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        className="border rounded p-3"
                        type="email"
                        placeholder="Your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <textarea
                        className="border rounded p-3 h-40"
                        placeholder="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                    <div className="flex items-center gap-4">
                        <button
                            type="submit"
                            className="bg-[#0ea5e9] text-white px-4 py-2 rounded"
                        >
                            {loading ? "Sending..." : "Send message"}
                        </button>
                        {sent && (
                            <span className="text-green-600">Thank you — message sent</span>
                        )}
                        {error && (
                            <span className="text-red-600">
                                An error occured sending email.
                            </span>
                        )}
                    </div>
                </form>
            </div>
        </motion.section>
    );
}
