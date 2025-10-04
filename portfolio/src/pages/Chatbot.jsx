import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

const faqData = [
  { q: "What skills do you have?", a: "I’m skilled in MERN Stack, React, TailwindCSS, Docker, AWS, Figma, Java, Python, SQL, and more 🚀." },
  { q: "What projects have you built?", a: "Some of my projects include a Restaurant Website (MERN), E-commerce with Stripe, AI-powered Question Paper Generator, MyRoute app, and TrustChain (Deepfake detection)." },
  { q: "Do you have certificates?", a: "Yes! I hold certifications in Microsoft Copilot, Software Development, Java, AWS, Python, and more 🎓." },
  { q: "How can I contact you?", a: "You can email me at neeldhoble2004@gmail.com or connect on LinkedIn." },
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi 👋 I'm Neel's Bot! Ask me anything about Neel’s skills, projects, or achievements." },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    // User message
    const userMessage = { from: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    // Find matching FAQ
    const faq = faqData.find((f) =>
      input.toLowerCase().includes(f.q.toLowerCase().split(" ")[1]) // simple keyword check
    );

    const botMessage = faq
      ? { from: "bot", text: faq.a }
      : { from: "bot", text: "Hmm 🤔 I don’t know that yet, but Neel can tell you directly!" };

    setMessages((prev) => [...prev, botMessage]);
    setInput("");
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-indigo-500 to-pink-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition z-50"
        whileHover={{ rotate: 10 }}
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </motion.button>

      {/* Chatbot Window */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-20 right-6 w-80 h-96 bg-black/70 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl flex flex-col z-50"
        >
          {/* Header */}
          <div className="p-3 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-t-2xl text-white font-semibold text-center">
            🤖 Neel's Bot
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto space-y-3 text-sm text-white">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-lg max-w-[75%] ${
                  msg.from === "user"
                    ? "bg-pink-500/30 text-right ml-auto"
                    : "bg-white/10 text-left"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 border-t border-white/10 flex gap-2">
            <input
              type="text"
              placeholder="Ask me..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 px-3 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 outline-none"
            />
            <button
              onClick={handleSend}
              className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg text-white hover:scale-105 transition"
            >
              Send
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Chatbot;
