
export default function About() {
  return (
    <section
      id="about"
      className="py-16 px-6 text-white fade-up"
    >
      <div className="max-w-4xl mx-auto">

        {/* Title */}
        <h2 className="text-4xl font-semibold mb-4 text-center">
          Background
        </h2>

        {/* Underline */}
        <div className="w-16 h-1 bg-yellow-400 mx-auto mb-10 rounded-full"></div>

        {/* Content */}
        <p className="text-slate-400 leading-relaxed text-lg">
            I am a Dual Degree student pursuing a B.S. in Data Science at IIT Madras
            and a B.Tech. in Computer Science with AI-ML Specialization at
            Vijaybhoomi University, with a strong academic and practical focus on
            Machine Learning and Full-Stack Development. My work lies at the
            intersection of data, algorithms, and scalable web systems. </p><br />
        <p className="text-slate-400 leading-relaxed text-lg">
            I have a solid foundation in supervised and unsupervised learning, ensemble
            methods, model evaluation, and performance optimization. I also work
            with deep learning architectures such as CNNs, RNNs, LSTMs, and GRUs
            using TensorFlow/Keras, and enjoy integrating intelligent models into
            real-world applications. I also build production-oriented systems using 
            Python, Flask, SQLAlchemy, and SQL databases, designing RESTful APIs, secure
            authentication, and modular backends.</p><br />
        <p className="text-slate-400 leading-relaxed text-lg">
            Managing two rigorous degrees alongside projects has
            strengthened my adaptability, problem-solving, and time management,
            and I am motivated by building intelligent, scalable, and impactful
            systems.
        </p>

      </div>
    </section>
  )
}
