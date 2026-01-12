const About = () => {
  const bioData = {
    name: "Firmansyah",
    role: "Senior Quality Engineer",
    location: "Jakarta, Indonesia",
    experience: "5+ Years",
    core_skills: [
      "Automation Architecture",
      "CI/CD Automation",
      "Test Infrastructure",
      "Performance Testing"
    ],
    mission: "To build scalable quality engineering cultures, not just tests."
  };

  return (
    <section id="about" className="py-24 bg-zinc-950/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">

        {/* Left: Text Context */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="text-blue-500 font-mono">01.</span>
            About Me
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            Senior Quality Engineer with over 5 years of experience. I focus on building reliable test automation frameworks and optimizing testing infrastructure to ensure high-quality software delivery.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            I believe quality is not just about finding bugs, but designing systems and pipelines that make shipping code faster and safer.
          </p>
        </div>

        {/* Right: Code Block UI */}
        <div className="md:w-1/2 w-full">
          <div className="rounded-lg bg-[#1e1e1e] border border-zinc-800 shadow-2xl overflow-hidden font-mono text-sm">
            {/* Window Header */}
            <div className="bg-[#2d2d2d] px-4 py-2 flex items-center gap-2 border-b border-zinc-800">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-2 text-xs text-gray-500">profile.json</span>
            </div>

            {/* Code Content */}
            <div className="p-6 overflow-x-auto text-blue-300">
              <pre>
                <code>
                  <span className="text-purple-400">{"{"}</span>
                  {"\n"}
                  {Object.entries(bioData).map(([key, value], index, arr) => (
                    <span key={key}>
                      {"  "}<span className="text-blue-400">&quot;{key}&quot;</span>:{" "}
                      {Array.isArray(value) ? (
                        <>
                          <span className="text-yellow-300">{"["}</span>
                          {value.map((item, itemIndex) => (
                            <span key={itemIndex} className="text-yellow-300">
                              {`"${item}"`}{itemIndex < value.length - 1 ? ", " : ""}
                            </span>
                          ))}
                          <span className="text-yellow-300">{"]"}</span>
                        </>
                      ) : (
                        <span className="text-green-400">&quot;{value}&quot;</span>
                      )}
                      {index < arr.length - 1 ? "," : ""}
                      {"\n"}
                    </span>
                  ))}
                  <span className="text-purple-400">{"}"}</span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
