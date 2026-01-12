const Projects = () => {
  const projects = [
    {
      title: "automated-test-generator",
      type: "Work Project",
      description: "An AI-powered system that autonomously generates comprehensive test cases by parsing Product Requirement Documents (PRDs) and Technical Specifications. Streamlines the test planning phase for the entire engineering team.",
      tech: ["Next.js", "Golang", "GenAI", "PostgreSQL"],
      link: null // Internal work project
    },
    {
      title: "report-history-action",
      type: "Open Source",
      description: "Enhanced a GitHub Action to track and visualize test report history over time. Customized the core logic to support complex team workflows, enabling better visibility into regression trends across multiple environments.",
      tech: ["GitHub Actions", "JavaScript", "CI/CD"],
      link: "https://github.com/kitabisa/report-history-action"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-zinc-950 text-white font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
            <span className="text-purple-500">03.</span>
            ./projects.sh
          </h2>
          <p className="text-gray-500 text-sm">Executing build...</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative bg-black rounded-lg border border-zinc-800 p-6 hover:border-purple-500/50 transition-all duration-300">
              {/* Type Badge */}
              <div className="absolute top-4 right-4">
                <span className={`text-xs font-bold px-2 py-1 rounded md:bg-purple-900/20 md:text-purple-400 border border-purple-500/30`}>
                  [{project.type.toUpperCase()}]
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-blue-400 mb-4 font-mono mt-2">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 mb-6 text-sm leading-relaxed border-l-2 border-zinc-800 pl-4">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs font-mono px-2 py-1 bg-zinc-900 text-gray-300 rounded border border-zinc-700">
                    {t}
                  </span>
                ))}
              </div>

              {/* Footer / Status */}
              <div className="mt-6 pt-4 border-t border-zinc-900 flex justify-between items-center text-xs text-gray-600">
                <span>Status: <span className="text-green-500">Deployed</span></span>
                {project.link ? (
                  <a href={project.link} className="hover:text-blue-400 flex items-center gap-1">
                    View Source -&gt;
                  </a>
                ) : (
                  <span className="flex items-center gap-1 cursor-not-allowed opacity-50">
                    Private Repository <span className="text-xs">🔒</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
