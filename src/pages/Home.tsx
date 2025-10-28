import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Baby, Sparkles, Target, TrendingUp } from 'lucide-react';
import { useProgressStore } from '../store/progressStore';
import type { BabyProfile } from '../types';

const Home = () => {
  const navigate = useNavigate();
  const { babyProfile, setBabyProfile } = useProgressStore();
  const [showSetup, setShowSetup] = useState(!babyProfile);
  const [name, setName] = useState(babyProfile?.name || '');
  const [birthDate, setBirthDate] = useState(
    babyProfile?.birthDate ? new Date(babyProfile.birthDate).toISOString().split('T')[0] : ''
  );

  const handleSetup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !birthDate) return;

    const profile: BabyProfile = {
      id: crypto.randomUUID(),
      name,
      birthDate: new Date(birthDate),
      createdAt: new Date(),
    };

    setBabyProfile(profile);
    setShowSetup(false);
  };

  const calculateAge = () => {
    if (!babyProfile?.birthDate) return 0;
    const today = new Date();
    const birth = new Date(babyProfile.birthDate);
    const months = (today.getFullYear() - birth.getFullYear()) * 12 +
                   (today.getMonth() - birth.getMonth());
    return Math.max(0, months);
  };

  if (showSetup) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-success-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
              <Baby className="w-8 h-8 text-primary-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Baby Skill Tree
            </h1>
            <p className="text-gray-600">
              Track your baby's developmental milestones like leveling up in a game!
            </p>
          </div>

          <form onSubmit={handleSetup} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Baby's Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Enter baby's name"
                required
              />
            </div>

            <div>
              <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700 mb-1">
                Birth Date
              </label>
              <input
                type="date"
                id="birthDate"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              />
            </div>

            <button type="submit" className="w-full btn-primary">
              Get Started
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <Sparkles className="w-6 h-6 text-primary-500 mx-auto mb-1" />
                <p className="text-xs text-gray-600">40+ Skills</p>
              </div>
              <div>
                <Target className="w-6 h-6 text-primary-500 mx-auto mb-1" />
                <p className="text-xs text-gray-600">Track Progress</p>
              </div>
              <div>
                <TrendingUp className="w-6 h-6 text-primary-500 mx-auto mb-1" />
                <p className="text-xs text-gray-600">Expert Tips</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-success-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                <Baby className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Baby Skill Tree</h1>
                {babyProfile && (
                  <p className="text-sm text-gray-600">
                    {babyProfile.name} • {calculateAge()} months old
                  </p>
                )}
              </div>
            </div>
            <button
              onClick={() => setShowSetup(true)}
              className="text-sm text-primary-600 hover:text-primary-700 font-medium px-3 py-1.5 rounded-md hover:bg-primary-50 active:bg-primary-100 transition-all"
            >
              Edit Profile
            </button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Gross Motor */}
          <div
            onClick={() => navigate('/tree/gross-motor')}
            className="relative overflow-hidden bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-transparent to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative p-7">
              <div className="flex items-start justify-between mb-5">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                      🤸
                    </div>
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-bold rounded-full uppercase tracking-wide">
                      24 Skills
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors leading-tight">
                    Gross Motor Skills
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Movement and physical milestones: tummy time, rolling, sitting, crawling, walking
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-primary-600 font-semibold group-hover:gap-3 transition-all">
                <span>Explore Tree</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>

          {/* Fine Motor */}
          <div
            onClick={() => navigate('/tree/fine-motor')}
            className="relative overflow-hidden bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-transparent to-teal-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative p-7">
              <div className="flex items-start justify-between mb-5">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-success-100 to-emerald-200 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                      ✋
                    </div>
                    <span className="px-3 py-1 bg-success-100 text-success-700 text-xs font-bold rounded-full uppercase tracking-wide">
                      16 Skills
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-success-600 transition-colors leading-tight">
                    Fine Motor Skills
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Hand and finger skills: grasping, reaching, pincer grip, stacking
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-success-600 font-semibold group-hover:gap-3 transition-all">
                <span>Explore Tree</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>

          {/* Coming soon cards */}
          <div className="relative overflow-hidden bg-white/40 backdrop-blur-sm rounded-2xl border-2 border-dashed border-gray-300 p-7">
            <div className="absolute top-4 right-4 px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full uppercase tracking-wide">
              Coming Soon
            </div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-100 to-pink-200 flex items-center justify-center text-xl">
                💬
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-700 mb-2 leading-tight">
              Language & Communication
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              Cooing, babbling, first words, and language development
            </p>
          </div>

          <div className="relative overflow-hidden bg-white/40 backdrop-blur-sm rounded-2xl border-2 border-dashed border-gray-300 p-7">
            <div className="absolute top-4 right-4 px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full uppercase tracking-wide">
              Coming Soon
            </div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-100 to-orange-200 flex items-center justify-center text-xl">
                😊
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-700 mb-2 leading-tight">
              Social & Emotional
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              Smiling, attachment, emotional regulation, and social interaction
            </p>
          </div>
        </div>

        {/* Info section */}
        <div className="mt-12 bg-gradient-to-br from-primary-50 via-white to-success-50 rounded-2xl border border-primary-200/60 p-8 shadow-lg">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-success-500 flex items-center justify-center shadow-md">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                About Baby Skill Tree
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Track your baby's developmental milestones in a fun, game-like interface. Each skill
                builds on previous ones, just like leveling up in a game. Remember: every baby
                develops at their own pace, and age ranges are approximate guidelines, not strict
                rules.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-lg p-4">
                <p className="text-sm text-amber-900 leading-relaxed">
                  <strong className="font-bold">Important:</strong> This app is for tracking and educational purposes. Always
                  consult your pediatrician if you have concerns about your baby's development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
