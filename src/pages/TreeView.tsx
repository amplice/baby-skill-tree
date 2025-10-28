import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Baby } from 'lucide-react';
import SkillTree from '../components/SkillTree';
import { getSkillsByDomain } from '../data';
import type { SkillDomain } from '../types';
import { useProgressStore } from '../store/progressStore';

const TreeView = () => {
  const { domain } = useParams<{ domain: SkillDomain }>();
  const navigate = useNavigate();
  const babyProfile = useProgressStore((state) => state.babyProfile);

  if (!domain) {
    navigate('/');
    return null;
  }

  const skills = getSkillsByDomain(domain);

  const getDomainTitle = () => {
    switch (domain) {
      case 'gross-motor':
        return 'Gross Motor Skills';
      case 'fine-motor':
        return 'Fine Motor Skills';
      case 'language':
        return 'Language & Communication';
      case 'social-emotional':
        return 'Social & Emotional';
      case 'cognitive':
        return 'Cognitive Skills';
      default:
        return 'Skills';
    }
  };

  const getDomainEmoji = () => {
    switch (domain) {
      case 'gross-motor':
        return '🤸';
      case 'fine-motor':
        return '✋';
      case 'language':
        return '💬';
      case 'social-emotional':
        return '😊';
      case 'cognitive':
        return '🧠';
      default:
        return '⭐';
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm z-10">
        <div className="px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/')}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Back to home"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-3">
                <span className="text-3xl">{getDomainEmoji()}</span>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">
                    {getDomainTitle()}
                  </h1>
                  {babyProfile && (
                    <p className="text-sm text-gray-600">{babyProfile.name}'s Progress</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Legend */}
      <div className="bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-wrap items-center gap-4 text-sm">
          <span className="font-medium text-gray-700">Legend:</span>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gray-200 border-2 border-gray-400"></div>
            <span className="text-gray-600">Locked</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-white border-2 border-gray-400"></div>
            <span className="text-gray-600">Available</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary-200 border-2 border-primary-500"></div>
            <span className="text-gray-600">In Progress</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-success-200 border-2 border-success-500"></div>
            <span className="text-gray-600">Mastered</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-amber-200 border border-amber-400"></div>
            <span className="text-gray-600">Key Milestone</span>
          </div>
        </div>
      </div>

      {/* Skill Tree */}
      <div className="flex-1 overflow-hidden">
        {skills.length > 0 ? (
          <SkillTree skills={skills} />
        ) : (
          <div className="h-full flex items-center justify-center">
            <div className="text-center">
              <Baby className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                No skills found for this domain
              </h2>
              <p className="text-gray-600">Check back soon for more content!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TreeView;
