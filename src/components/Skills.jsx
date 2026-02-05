
export default function Skills() {
  const Skill = ({ name }) => (
    <span className="px-4 py-2 rounded-lg border border-sky-400 text-sky-400 text-sm">
      {name}
    </span>
  )

  return (
    <section id="skills" className="py-16 px-6 text-white fade-up">

      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-sky-400 mb-8">
          Skills
        </h2>

        <div className="space-y-8">

          <div>
            <h3 className="mb-3 text-slate-200">Programming</h3>
            <div className="flex flex-wrap gap-3">
              <Skill name="Python" />
              <Skill name="SQL" />
              <Skill name="JavaScript" />
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-slate-200">Machine Learning</h3>
            <div className="flex flex-wrap gap-3">
              <Skill name="Linear Regression" />
              <Skill name="Logistic Regression" />
              <Skill name="Random Forest" />
              <Skill name="AdaBoost" />
              <Skill name="SVM" />
              <Skill name="KNN" />
              <Skill name="Naive Bayes" />
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-slate-200">Deep Learning</h3>
            <div className="flex flex-wrap gap-3">
              <Skill name="CNN" />
              <Skill name="RNN" />
              <Skill name="LSTM" />
              <Skill name="GRU" />
              <Skill name="TensorFlow / Keras" />
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-slate-200">Frameworks & Tools</h3>
            <div className="flex flex-wrap gap-3">
              <Skill name="Flask" />
              <Skill name="SQLAlchemy" />
              <Skill name="Scikit-learn" />
              <Skill name="Streamlit" />
              <Skill name="Git" />
              <Skill name="Pandas" />
              <Skill name="NumPy" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
