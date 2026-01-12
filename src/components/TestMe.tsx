'use client';
import { useState, useEffect } from 'react';

const TestMe = () => {
  const [clicked, setClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [showSecret, setShowSecret] = useState(false);

  // Mobile States
  const [swipeProgress, setSwipeProgress] = useState(0);
  const [unlocked, setUnlocked] = useState(false);
  const [pressTimer, setPressTimer] = useState<NodeJS.Timeout | null>(null);
  const [longPressed, setLongPressed] = useState(false);
  const [isSwiping, setIsSwiping] = useState(false);
  const [activeTab, setActiveTab] = useState<'web' | 'mobile'>('web');

  // Auto-reset logic
  useEffect(() => {
    if (clicked) {
      const timer = setTimeout(() => setClicked(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [clicked]);

  useEffect(() => {
    if (inputValue === 'Hello World') {
      const timer = setTimeout(() => setInputValue(''), 5000);
      return () => clearTimeout(timer);
    }
  }, [inputValue]);

  useEffect(() => {
    if (showSecret) {
      const timer = setTimeout(() => setShowSecret(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showSecret]);

  useEffect(() => {
    if (unlocked) {
      const timer = setTimeout(() => {
        setUnlocked(false);
        setSwipeProgress(0);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [unlocked]);

  useEffect(() => {
    if (longPressed) {
      const timer = setTimeout(() => setLongPressed(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [longPressed]);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setClicked(true);
      setLoading(false);
    }, 2000);
  };

  const handleHover = () => {
    setTimeout(() => setShowSecret(true), 500);
  }

  // Swipe Logic (Unified)
  const handleSwipeStart = () => {
    setIsSwiping(true);
  };

  const handleMove = (clientX: number, rect: DOMRect) => {
    if (!isSwiping) return;
    const progress = Math.min(Math.max((clientX - rect.left) / rect.width, 0), 1);
    setSwipeProgress(progress);
    if (progress > 0.9) setUnlocked(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX, e.currentTarget.getBoundingClientRect());
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleMove(e.clientX, e.currentTarget.getBoundingClientRect());
  };

  const handleEnd = () => {
    setIsSwiping(false);
    if (swipeProgress < 0.9) setSwipeProgress(0);
  };

  // Long Press Logic
  const startPress = () => {
    const timer = setTimeout(() => setLongPressed(true), 2000); // 2s hold
    setPressTimer(timer);
  };

  const endPress = () => {
    if (pressTimer) clearTimeout(pressTimer);
  };

  return (
    <section id="test-me" className="py-20 bg-zinc-900 text-white border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-linear-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
            Test Me!
          </h2>
          <p className="text-gray-400">
            This section is designed to be tested. It has delays, dynamic content, and hidden elements.
            <br />
            <span className="text-sm text-gray-500">Target for your Playwright/Selenium scripts.</span>
            <br />
            <span className="text-xs text-yellow-500 font-mono mt-2 block">
              ⚠️ Note: All successful states will automatically reset after 5 seconds.
            </span>
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-zinc-800 p-1 rounded-full inline-flex">
            <button
              data-testid="button-tab_web-testme"
              onClick={() => setActiveTab('web')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'web'
                ? 'bg-zinc-700 text-white shadow-sm'
                : 'text-gray-400 hover:text-white'
                }`}
            >
              Web Interactions
            </button>
            <button
              data-testid="button-tab_mobile-testme"
              onClick={() => setActiveTab('mobile')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'mobile'
                ? 'bg-zinc-700 text-white shadow-sm'
                : 'text-gray-400 hover:text-white'
                }`}
            >
              Mobile Gestures
            </button>
          </div>
        </div>

        {/* Web / Core Challenges */}
        {activeTab === 'web' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-2xl font-bold mb-6 text-gray-200 border-l-4 border-blue-500 pl-4">Core Challenges</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Card 1: Explicit Wait */}
              <div className="bg-zinc-800/50 p-6 rounded-xl border border-zinc-700">
                <h3 className="text-xl font-semibold mb-4 text-green-400">1. Explicit Wait</h3>
                <p className="text-gray-400 text-sm mb-4">Button has a 2-second delay before changing state.</p>
                <button
                  data-testid="button-explicit_wait-testme"
                  id="delay-button"
                  onClick={handleClick}
                  disabled={loading || clicked}
                  className={`w-full px-4 py-2 rounded font-medium transition-all ${clicked
                    ? 'bg-green-600 text-white cursor-default'
                    : loading
                      ? 'bg-zinc-600 text-zinc-300 cursor-wait'
                      : 'bg-blue-600 hover:bg-blue-500 text-white'
                    }`}
                >
                  {loading ? 'Processing...' : clicked ? 'Action Complete!' : 'Click Me (2s Delay)'}
                </button>
                {clicked && (
                  <p id="delay-message" className="mt-4 text-green-400 text-center animate-pulse">
                    Success! You waited correctly.
                  </p>
                )}
              </div>

              {/* Card 2: Input Logic */}
              <div className="bg-zinc-800/50 p-6 rounded-xl border border-zinc-700">
                <h3 className="text-xl font-semibold mb-4 text-green-400">2. Input Logic</h3>
                <p className="text-gray-400 text-sm mb-4">Type &quot;Hello World&quot; to enable the submit button.</p>
                <input
                  data-testid="input-logic-testme"
                  type="text"
                  id="test-input"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type here..."
                  className="w-full px-4 py-2 bg-zinc-900 border border-zinc-700 rounded mb-4 focus:border-green-500 focus:outline-none transition-colors"
                />
                <button
                  data-testid="button-submit_logic-testme"
                  id="submit-input"
                  disabled={inputValue !== 'Hello World'}
                  className={`w-full px-4 py-2 rounded font-medium transition-all ${inputValue === 'Hello World'
                    ? 'bg-green-600 hover:bg-green-500 text-white'
                    : 'bg-zinc-700 text-zinc-500 cursor-not-allowed'
                    }`}
                >
                  Submit
                </button>
              </div>

              {/* Card 3: Hover/Dynamic */}
              <div
                data-testid="div-hover_area-testme"
                className="bg-zinc-800/50 p-6 rounded-xl border border-zinc-700"
                onMouseEnter={handleHover}
              >
                <h3 className="text-xl font-semibold mb-4 text-green-400">3. Hover Source</h3>
                <p className="text-gray-400 text-sm mb-4">Hover over this card to reveal the secret.</p>

                <div className="h-20 flex items-center justify-center border-t border-zinc-700 border-dashed">
                  {showSecret ? (
                    <span id="secret-text" className="text-yellow-400 font-mono">SECRET_REVEALED</span>
                  ) : (
                    <span className="text-zinc-600 italic">Hover to see...</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mobile / Gesture Challenges */}
        {activeTab === 'mobile' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-2xl font-bold mb-6 text-gray-200 border-l-4 border-purple-500 pl-4">Mobile Gestures</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* Mobile 1: Swipe to Unlock */}
              <div className="bg-zinc-800/50 p-6 rounded-xl border border-zinc-700 overflow-hidden">
                <h3 className="text-xl font-semibold mb-4 text-purple-400">4. Swipe to Unlock</h3>
                <p className="text-gray-400 text-sm mb-4">Simulate a swipe gesture (Left to Right).</p>

                <div
                  data-testid="div-swipe_slider-testme"
                  className="relative w-full h-12 bg-zinc-900 rounded-full border border-zinc-700 select-none cursor-pointer"
                  onTouchStart={handleSwipeStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleEnd}
                  onMouseDown={handleSwipeStart}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleEnd}
                  onMouseLeave={handleEnd}
                >
                  <div
                    className={`absolute left-0 top-0 h-full rounded-full transition-all duration-75 flex items-center justify-center ${unlocked ? 'bg-green-500 w-full' : 'bg-purple-600'}`}
                    style={{ width: unlocked ? '100%' : `${Math.max(15, swipeProgress * 100)}%` }}
                  >
                    {unlocked && <span className="text-white font-bold animate-pulse">UNLOCKED!</span>}
                  </div>
                  {!unlocked && <span className="absolute inset-0 flex items-center justify-center text-xs text-gray-500 pointer-events-none">Swipe Right &gt;&gt;&gt;</span>}
                </div>
              </div>

              {/* Mobile 2: Long Press */}
              <div className="bg-zinc-800/50 p-6 rounded-xl border border-zinc-700">
                <h3 className="text-xl font-semibold mb-4 text-purple-400">5. Long Press</h3>
                <p className="text-gray-400 text-sm mb-4">Hold button for 2 seconds (Tap & Hold).</p>

                <button
                  data-testid="button-long_press-testme"
                  onMouseDown={startPress}
                  onMouseUp={endPress}
                  onMouseLeave={endPress}
                  onTouchStart={startPress}
                  onTouchEnd={endPress}
                  className={`w-full py-4 rounded-xl font-bold transition-all transform active:scale-95 ${longPressed
                    ? 'bg-linear-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30'
                    : 'bg-zinc-700 text-gray-300'
                    }`}
                >
                  {longPressed ? 'Action Triggered! 🚀' : 'Hold Me (2s)'}
                </button>
              </div>

              {/* Mobile 3: Orientation Logic */}
              <div
                data-testid="div-orientation-testme"
                className="bg-zinc-800/50 p-6 rounded-xl border border-zinc-700 md:col-span-2"
              >
                <h3 className="text-xl font-semibold mb-4 text-purple-400">6. Orientation Logic</h3>
                <p className="text-gray-400 text-sm mb-4">Rotate your device (Portrait/Landscape) to reveal different content.</p>

                <div className="p-4 bg-zinc-900 rounded-lg text-center border-l-4 border-yellow-500">
                  <p className="block portrait:hidden text-green-400 font-bold">🎯 LANDSCAPE MODE DETECTED!</p>
                  <p className="hidden portrait:block text-yellow-500 italic">Please rotate your device to landscape 🔄</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestMe;
