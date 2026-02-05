
export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6 text-white fade-up">

      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-sky-400 mb-6">
          Get In Touch
        </h2>

        <p className="text-slate-300 mb-8">
          Open to internships, collaborations, and exciting AI projects.
          Let’s connect.
        </p>

        <div className="flex justify-center gap-6 mt-6">
          <a
            href="mailto:er.nishi.kasat@gmail.com"
            className="text-sky-400 hover:underline"
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/ernishikasat"
            target="_blank"
            rel="noreferrer"
            className="text-sky-400 hover:text-white transition"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/nishi-kasat"
            target="_blank"
            rel="noreferrer"
            className="text-sky-400 hover:text-white transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
