
export default function Projects() {
  const ProjectCard = ({ title, desc, tech, link }) => (
    <div className="p-6 bg-slate-900 rounded-xl border border-slate-700 hover:border-sky-400 transition">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-slate-300 text-sm mb-3">{desc}</p>
      <p className="text-slate-400 text-xs mb-3">Tech: {tech}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="text-sky-400 text-sm hover:underline"
        >
          View on GitHub →
        </a>
      )}
    </div>
  )

  return (
    <section id="projects" className="py-16 px-6 text-white fade-up">

      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-sky-400 mb-10">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <ProjectCard
            title="Vehicle Parking Management System"
            desc="A full-stack Flask web app to manage real-time parking availability, bookings, and payments with secure authentication."
            tech="Flask, SQLAlchemy, SQL Server, REST APIs"
            link="https://github.com/nishi-kasat/Vehicle-Parking-App"
          />

          <ProjectCard
            title="Automated ML Pipeline with Streamlit"
            desc="An AutoML platform that handles preprocessing, training, model selection, and evaluation for classification and regression."
            tech="Python, Scikit-learn, Streamlit, Pandas"
            link="https://github.com/nishi-kasat/Automated-ML-Pipeline-with-Streamlit"
          />
          <ProjectCard
            title="Pneumonia Detection using CNN"
            desc="A deep learning–based medical imaging system that detects pneumonia from chest X-ray images using Convolutional Neural Networks, focusing on accurate classification and robust evaluation."
            tech="Python, TensorFlow, Keras, CNN, NumPy, Matplotlib"
            link="https://github.com/nishi-kasat/pneumonia-detection-cnn"
          />
        </div>
      </div>
    </section>
  )
}
