'use client';

const TestStrategy = () => {
  return (
    <section id="strategy" className="py-20 bg-black text-white border-t border-zinc-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Quality Engineering Strategy
          </h2>
          <p className="text-gray-400">
            How I approach quality beyond just writing code. A case study on the &quot;Test Me&quot; feature.
          </p>
        </div>

        <div className="space-y-8">
          {/* 1. Risk Assessment */}
          <div className="bg-zinc-900 rounded-xl p-8 border border-zinc-800">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center mr-4">
                <span className="text-red-400 font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-white">Risk Assessment & Mitigation</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-gray-400">
                <thead className="text-xs uppercase bg-zinc-800 text-gray-300">
                  <tr>
                    <th className="px-4 py-3">Risk</th>
                    <th className="px-4 py-3">Impact</th>
                    <th className="px-4 py-3">Mitigation Strategy</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800">
                  <tr>
                    <td className="px-4 py-3">Flaky Tests due to &quot;Explicit Wait&quot;</td>
                    <td className="px-4 py-3 text-red-400">High</td>
                    <td className="px-4 py-3">Use dynamic polling (e.g., `expect(loc).toBeVisible()`) instead of hard sleeps.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Input Validation Failure</td>
                    <td className="px-4 py-3 text-yellow-400">Medium</td>
                    <td className="px-4 py-3">Boundary testing on client-side & API schema validation.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Hidden Elements (Hover)</td>
                    <td className="px-4 py-3 text-red-400">High</td>
                    <td className="px-4 py-3">Ensure playwright hovers correctly; verify accessibility properties.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 2. Test Pyramid Strategy */}
          <div className="bg-zinc-900 rounded-xl p-8 border border-zinc-800">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-4">
                <span className="text-blue-400 font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-white">Coverage Strategy (Pyramid)</h3>
            </div>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                <span>
                  <strong className="text-white">Unit Tests (Jest):</strong> Logic for `TestMe` component state (loading, clicked, etc).
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                <span>
                  <strong className="text-white">Component Tests (React Testing Lib):</strong> Verify rendering and basic interactivity in isolation.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                <span>
                  <strong className="text-white">E2E Tests (Playwright):</strong> User workflows (Click -&gt; Wait -&gt; Success) and cross-browser visual checks.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestStrategy;
