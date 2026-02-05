import { useEffect, useState } from "react"

export default function Navbar() {
  const [active, setActive] = useState("home")

  useEffect(() => {
    const sections = document.querySelectorAll("section")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { threshold: 0.6 }
    )

    sections.forEach((section) => observer.observe(section))

    return () => sections.forEach((section) => observer.unobserve(section))
  }, [])

  const base =
    "px-4 py-2 rounded-full transition-all duration-300 backdrop-blur-md"

  const activeStyle =
    "bg-sky-400/20 text-sky-300 shadow-[0_0_20px_rgba(56,189,248,0.4)]"

  const normalStyle =
    "text-slate-300 hover:bg-slate-800/50 hover:text-white"

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/70 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-semibold text-sky-400 hover:text-white transition"
        >
          Portfolio
        </a>

        {/* Cloud Links */}
        <div className="flex gap-3">
          {[
            ["home", "Home"],
            ["about", "Background"],
            ["education", "Education"],
            ["skills", "Skills"],
            ["projects", "Projects"],
            ["experience", "Experience"],
            ["contact", "Contact"],
          ].map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className={`${base} ${
                active === id ? activeStyle : normalStyle
              }`}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
