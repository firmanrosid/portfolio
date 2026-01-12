const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black text-white border-t border-zinc-900 font-mono">
      <div className="max-w-4xl mx-auto px-4 text-center">

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-2 flex items-center justify-center gap-3">
            <span className="text-green-500">04.</span>
            Initialize Connection
          </h2>
          <p className="text-gray-500 text-sm">Target: User needs Quality Engineering expertise</p>
        </div>

        {/* Terminal Window */}
        <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-6 max-w-2xl mx-auto mb-10 text-left shadow-2xl">
          <div className="flex gap-2 mb-4 border-b border-zinc-700 pb-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="font-mono text-sm space-y-2">
            <p className="text-gray-400">$ ping firmansyah</p>
            <p className="text-green-400">Pinging firmansyah [127.0.0.1] with 32 bytes of data:</p>
            <p className="text-gray-300">Reply from 127.0.0.1: bytes=32 time&lt;1ms TTL=128</p>
            <p className="text-gray-300">Reply from 127.0.0.1: bytes=32 time&lt;1ms TTL=128</p>
            <p className="text-blue-400 mt-4">&gt; Connection established.</p>
            <p className="text-blue-400">&gt; Awaiting input...</p>
          </div>
        </div>

        <p className="text-xl text-gray-300 mb-8">
          Ready to optimize your delivery pipeline?
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <a href="mailto:firman.rosid@gmail.com" className="group px-8 py-3 bg-zinc-100 text-black font-bold rounded hover:bg-white transition-all w-full md:w-auto flex items-center gap-2">
            <span className="text-green-600">✉</span>
            send_email.sh
          </a>
          <a href="https://linkedin.com/in/firmansyah-rosid" target="_blank" rel="noopener noreferrer" className="group px-8 py-3 bg-[#0077b5] text-white font-bold rounded hover:bg-[#006396] transition-all w-full md:w-auto flex items-center gap-2">
            <span className="text-white">in</span>
            connect_linkedin.exe
          </a>
        </div>

        <footer className="mt-20 pt-8 border-t border-zinc-900 text-gray-600 text-xs font-mono">
          <p>
            <span className="text-green-500">➜</span>
            &nbsp;git commit -m &quot;Update portfolio: {new Date().getFullYear()}&quot;
            <br />
            Built with Next.js, Tailwind & Playwright.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;

