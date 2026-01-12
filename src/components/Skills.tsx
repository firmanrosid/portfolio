const Skills = () => {
  const skills = [
    {
      category: "Automation & Performance",
      items: [
        { name: "WebdriverIO", level: "Expert" },
        { name: "Appium", level: "Expert" },
        { name: "k6", level: "Advanced" },
        { name: "Katalon Studio", level: "Intermediate" },
        { name: "Playwright", level: "Intermediate" },
        { name: "JMeter / UFT", level: "Intermediate" }
      ]
    },
    {
      category: "Languages",
      items: [
        { name: "TypeScript / JavaScript", level: "Expert" },
        { name: "Golang", level: "Intermediate" },
        { name: "Swift", level: "Intermediate" },
        { name: "Java", level: "Advanced" },
        { name: "SQL", level: "Intermediate" },
      ]
    },
    {
      category: "Infrastructure & CI/CD",
      items: [
        { name: "GitHub Actions", level: "Expert" },
        { name: "Docker", level: "Advanced" },
        { name: "BrowserStack / SauceLabs", level: "Expert" },
        { name: "Git", level: "Expert" },
      ]
    }
  ];

  const getAsciiBar = (level: string) => {
    switch (level) {
      case 'Expert': return <span className="text-green-500">[#####] 100%</span>;
      case 'Advanced': return <span className="text-blue-400">[####-] 80%</span>;
      case 'Intermediate': return <span className="text-yellow-500">[###--] 60%</span>;
      default: return <span className="text-gray-600">[-----] 0%</span>;
    }
  };

  return (
    <section id="skills" className="py-20 bg-black text-white border-t border-zinc-900 font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-green-500 mr-2">&gt;</span>
            Installed_Packages
          </h2>
          <p className="text-gray-500 text-sm">Loading system dependencies...</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 hover:border-green-500/30 transition-all group">
              <h3 className="text-lg font-bold mb-6 text-gray-200 border-b border-zinc-800 pb-2 flex justify-between">
                <span>{skillGroup.category}</span>
                <span className="text-xs text-gray-600 self-end opacity-0 group-hover:opacity-100 transition-opacity">v1.0.0</span>
              </h3>
              <div className="space-y-4">
                {skillGroup.items.map((skill) => (
                  <div key={skill.name} className="flex flex-col gap-1">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-400 group-hover:text-blue-300 transition-colors">
                        ./{skill.name.toLowerCase().replace(/ /g, '_')}
                      </span>
                    </div>
                    <div className="text-xs font-bold tracking-wider">
                      {getAsciiBar(skill.level)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

