
export default function Hero() {
  const name = "Nishi Kasat"

  return (
    <section
      id="home"
      className="pt-28 pb-20 px-6 text-white text-center"
    >
      <div className="max-w-3xl mx-auto">

        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <img
            src="/profile.jpeg"
            alt="Nishi Kasat"
            className="w-44 h-44 rounded-full object-cover border-4 border-sky-400 shadow-lg
            hover:scale-105 hover:shadow-sky-400/50 transition-all duration-300"
          />
        </div>

        {/* Animated Name */}
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-2 tracking-wide">
          {name.split("").map((char, index) => (
            <span
              key={index}
              className="animate-letter inline-block"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        {/* Role */}
        <p className="text-sky-400 text-lg mb-4 font-medium">
          Machine Learning & Full-Stack Developer
        </p>

        {/* Short Intro */}
        <p className="text-slate-300 leading-relaxed mb-8">
          I build intelligent systems and scalable web applications at the
          intersection of AI and engineering, focusing on impactful and
          user-centric solutions.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-8 mt-4">

          {/* GitHub */}
          <a
            href="https://github.com/nishi-kasat"
            target="_blank"
            rel="noreferrer"
            className="text-sky-400 hover:text-white transition transform hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-7 h-7"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/ernishikasat"
            target="_blank"
            rel="noreferrer"
            className="text-sky-400 hover:text-white transition transform hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-7 h-7"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>

        </div>

      </div>
    </section>
  )
}
