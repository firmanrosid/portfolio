const Experience = () => {
  const experiences = [
    {
      id: "8f3d2a",
      role: "Senior Software Development Engineer in Test (SDET)",
      company: "Kitabisa.com",
      period: "2022 - Present",
      changes: [
        "Maintained legacy Java Appium automation for Android/iOS running on BrowserStack.",
        "Optimized test execution strategy, successfully reducing regression time by over 50%.",
        "Led the comprehensive framework migration from Java to WebdriverIO/TypeScript to modernize test architecture.",
        "Migrated execution infrastructure from BrowserStack to self-hosted Appium Device Farm, significantly reducing costs.",
        "Contributed directly to iOS codebase (Swift) to implement accessibility identifiers, ensuring 100% testability of UI components.",
        "Established CI/CD pipelines using GitHub Actions, creating reusable composite actions to streamline testing workflows.",
        "Implemented performance and load testing using k6 to identify bottlenecks and ensure system scalability during high-traffic events.",
        "Created and maintained a centralized SDET Dashboard to visualize test metrics and return investment (ROI) of automation.",
        "Mentored test engineers and established coding standards for the QA team."
      ]
    },
    {
      id: "4b1c9e",
      role: "Quality Assurance",
      company: "HarukaEdu -> Pintar.co",
      period: "2020 - 2022",
      changes: [
        "Designed comprehensive test cases and scenarios covering critical academic workflows.",
        "Executed comprehensive manual testing for LMS and UMS platforms.",
        "Implemented automated regression testing using Katalon Studio to reduce manual repetitive tasks.",
        "Collaborated with developers to reproduce and fix high-priority production bugs."
      ]
    },
    {
      id: "1a7b5d",
      role: "Quality Assurance",
      company: "Mister Aladin",
      period: "2019 - 2020",
      changes: [
        "Created detailed test scenarios for new mobile app features to ensure full requirements coverage.",
        "Performed manual testing for mobile applications (iOS/Android).",
        "Facilitated User Acceptance Testing (UAT) sessions with stakeholders to ensure product readiness.",
      ]
    },
    {
      id: "2c9a8b",
      role: "Quality Assurance",
      company: "Emerio (NTT)",
      period: "2018 - 2019",
      changes: [
        "Developed rigorous test cases and scenarios for complex banking and insurance workflows.",
        "Outsourced to Maybank: Focused on comprehensive manual testing for critical banking modules.",
        "Outsourced to Prudential: Developed automated functional testing using HP Unified Functional Testing (UFT) and executed performance/load tests with JMeter."
      ]
    },
    {
      id: "e5f6g7",
      role: "Tester",
      company: "Bank Central Asia",
      period: "2017 - 2018",
      changes: [
        "Conducted rigorous manual testing for banking applications to ensure high standards of quality.",
        "Created detailed test documentation including step-by-step screenshots for audit and validation purposes.",
        "Executed and validated automated test suites provided by the automation team to verify regression stability."
      ]
    },
  ];

  return (
    <section id="experience" className="py-24 bg-black text-gray-300 font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
            <span className="text-purple-500">02.</span>
            git log --experience
          </h2>
          <p className="text-gray-500 text-sm">HEAD -&gt; master, origin/master</p>
        </div>

        <div className="relative border-l-2 border-zinc-800 ml-3 md:ml-6 space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-8 md:pl-12 group">
              {/* Commit Dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-zinc-900 border-2 border-purple-500 group-hover:bg-purple-500 transition-colors" />

              {/* Commit Metadata */}
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-2">
                <span className="text-yellow-500 text-sm">commit {exp.id}</span>
                <span className="text-blue-400 font-bold text-xl">{exp.role}</span>
                <span className="text-gray-500 text-sm">@{exp.company}</span>
              </div>

              <div className="text-gray-500 text-xs mb-4">
                Date:   {exp.period}
              </div>

              {/* Commit Message / Changes */}
              <div className="bg-zinc-900/50 p-6 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-colors">
                <ul className="space-y-2">
                  {exp.changes.map((change, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm leading-relaxed">
                      <span className="text-green-500 mt-1">+</span>
                      <span>{change}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {/* Initial Commit */}
          <div className="relative pl-8 md:pl-12">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-zinc-800 border-2 border-zinc-600" />
            <span className="text-zinc-600 text-sm">Initial commit (Education & Internship)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
