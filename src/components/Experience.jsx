export default function Experience() {
  const Item = ({ role, org, time, desc }) => (
    <div className="p-6 bg-slate-900 rounded-xl border border-slate-700">
      <h3 className="text-lg font-semibold">
        {role} – <span className="text-sky-400">{org}</span>
      </h3>
      <p className="text-slate-400 text-sm mb-2">{time}</p>
      <p className="text-slate-300 text-sm">{desc}</p>
    </div>
  )

  return (
    <section id="experience" className="py-16 px-6 text-white fade-up">

      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-sky-400 mb-10">
          Experience
        </h2>

        <div className="space-y-6">
          <Item
            role="Content Writer"
            org="Set2Score"
            time="Oct 2023 – Dec 2023"
            desc="Created web content, collaborated with frontend teams, and ensured clarity, usability, and consistency across platforms."
          />

          <Item
            role="Content Creator"
            org="Kasat Group of Companies"
            time="July 2024 – Present"
            desc="Designed digital creatives, managed branding assets, and built marketing content for business growth."
          />

          <Item
            role="Co-Founder & Web Developer"
            org="Cerebro"
            time="Jan 2026 – Present"
            desc="Co-founded a software development startup focused on building modern websites and digital solutions. Responsible for website development, technical implementation, and delivering custom solutions for clients."
          />
          
        </div>
      </div>
    </section>
  )
}