
import React, { useState } from 'react';
import { LESSONS } from './data';
import { Lesson } from './types';
import PhonicsCard from './components/PhonicsCard';

const App: React.FC = () => {
  const [currentLesson, setCurrentLesson] = useState<Lesson>(LESSONS[0]);

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <header className="bg-white border-b border-orange-100 sticky top-0 z-30 px-6 py-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <div className="bg-pink-400 p-2 rounded-2xl shadow-inner">
             <span className="text-2xl">🦁</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 cute-font">大舅妈自然拼读</h1>
        </div>
        <div className="hidden md:flex gap-2">
           <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded-full font-bold">Phonics</span>
           <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full font-bold">Gemini Voice</span>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        {/* Intro Section */}
        <section className="mb-10 bg-gradient-to-r from-pink-50 to-orange-50 rounded-[40px] p-8 md:p-12 relative overflow-hidden shadow-sm">
          <div className="absolute top-[-20px] right-[-20px] text-9xl opacity-10">🌈</div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 cute-font">{currentLesson.title}</h2>
            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
              {currentLesson.description}
            </p>
            {currentLesson.tips && (
              <div className="mt-6 flex items-start gap-3 bg-white/80 p-4 rounded-2xl border-l-4 border-pink-400">
                <span className="text-xl">💡</span>
                <p className="text-pink-700 font-medium italic">{currentLesson.tips}</p>
              </div>
            )}
          </div>
        </section>

        {/* Content Grid */}
        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {currentLesson.items.map((item) => (
            <PhonicsCard key={item.id} item={item} />
          ))}
        </section>
      </main>

      {/* Navigation Bar (Floating) */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-md border border-white/40 shadow-2xl rounded-full px-4 py-3 flex gap-2 md:gap-4 max-w-[95vw] overflow-x-auto no-scrollbar scroll-smooth z-40">
        {LESSONS.map((lesson) => (
          <button
            key={lesson.id}
            onClick={() => {
              setCurrentLesson(lesson);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`whitespace-nowrap px-4 py-2 rounded-full font-bold transition-all ${
              currentLesson.id === lesson.id
                ? 'bg-pink-500 text-white shadow-lg'
                : 'text-gray-500 hover:bg-pink-100'
            }`}
          >
            {lesson.title}
          </button>
        ))}
      </nav>

      {/* Footer Decoration */}
      <div className="fixed bottom-0 left-0 w-full h-2 bg-gradient-to-r from-pink-300 via-orange-200 to-blue-300 opacity-50"></div>
    </div>
  );
};

export default App;
