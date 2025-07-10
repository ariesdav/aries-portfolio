import { FaLinkedin, FaGithub, FaEnvelope, FaTiktok } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="text-gray-400 px-6 py-12 mt-24 text-sm">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <h2 className="text-white text-xl font-bold">
          Let&#39;s build something awesome together <span className="text-cyan-400">🚀</span>
        </h2>
        <p>
          Whether it is a project, an opportunity, or just a conversation, I am all ears. Feel free to send a message anytime.
        </p>

        <div className="flex justify-center gap-6 text-sm font-medium text-white">
          <a
            href="https://www.linkedin.com/in/ariestio-dava-pratama-897039282/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline flex items-center gap-1"
          >
            LinkedIn <FiExternalLink size={12} />
          </a>
          <a
            href="https://github.com/ariesdav/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline flex items-center gap-1"
          >
            GitHub <FiExternalLink size={12} />
          </a>
          <a
            href="mailto:ariesdav04@gmail.com"
            className="hover:underline flex items-center gap-1"
          >
            Email <FiExternalLink size={12} />
          </a>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-800 pt-6 text-xs text-center space-y-2">
        <p>
          Coded in{" "}
          <a
            href="https://code.visualstudio.com/"
            className="text-white underline hover:text-cyan-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visual Studio Code
          </a>{" "}
          by{" "}
          <a
            href="https://www.linkedin.com/in/ariestio-dava-pratama-897039282/"
            className="text-white font-medium underline hover:text-cyan-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aries
          </a>
          .
        </p>
        <p>
          Built with{" "}
          <a
            href="https://nextjs.org/"
            className="text-white underline hover:text-cyan-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js
          </a>
          ,{" "}
          <a
            href="https://tailwindcss.com/"
            className="text-white underline hover:text-cyan-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            TailwindCSS
          </a>
          , and deployed via{" "}
          <a
            href="https://vercel.com/"
            className="text-white underline hover:text-cyan-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vercel
          </a>
          .
        </p>
        <p>
          Inspired by{" "}
          <a
            href="https://fazzaamiarso-com-v3-svelte.vercel.app/"
            className="text-white underline hover:text-cyan-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fazza
          </a>{" "}
          &{" "}
          <a
            href="https://rivaldotandoko.vercel.app/"
            className="text-white underline hover:text-cyan-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rivaldo
          </a>
        </p>

        <div className="flex justify-center gap-4 mt-4 text-lg text-gray-500">
          <a
            href="https://www.linkedin.com/in/ariestio-dava-pratama-897039282/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/ariesdav/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a href="mailto:ariesdav04@gmail.com">
            <FaEnvelope />
          </a>
        </div>

        <p className="mt-4 text-xs text-gray-500">
          © {new Date().getFullYear()} Aries — Bekasi, Indonesia
        </p>
      </div>
    </footer>
  );
}
