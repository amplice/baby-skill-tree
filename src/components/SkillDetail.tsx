import { X, Calendar, Lock, CheckCircle2, Circle } from 'lucide-react';
import type { Skill } from '../types';
import { useProgressStore } from '../store/progressStore';
import { getSkillById } from '../data';

interface SkillDetailProps {
  skill: Skill;
  onClose: () => void;
}

const SkillDetail = ({ skill, onClose }: SkillDetailProps) => {
  const getSkillStatus = useProgressStore((state) => state.getSkillStatus);
  const getSkillProgress = useProgressStore((state) => state.getSkillProgress);
  const updateSkillStatus = useProgressStore((state) => state.updateSkillStatus);

  const status = getSkillStatus(skill.id);
  const progress = getSkillProgress(skill.id);

  const handleStatusChange = (newStatus: 'mastered' | 'available') => {
    updateSkillStatus(skill.id, newStatus);
  };

  const getStatusIcon = () => {
    switch (status) {
      case 'mastered':
        return <CheckCircle2 className="w-6 h-6 text-success-600" />;
      case 'available':
        return <Circle className="w-6 h-6 text-primary-600" />;
      case 'locked':
      default:
        return <Lock className="w-6 h-6 text-gray-400" />;
    }
  };

  return (
    <div className="absolute top-0 right-0 w-full md:w-[480px] h-full bg-gradient-to-br from-gray-50 to-white shadow-2xl z-10 overflow-y-auto">
      {/* Enhanced Header */}
      <div className="sticky top-0 bg-white/80 backdrop-blur-lg border-b border-gray-200/60 px-6 py-5 z-10">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-xl bg-gradient-to-br from-primary-50 to-primary-100 shadow-sm">
                {getStatusIcon()}
              </div>
              <span className={`status-badge ${status}`}>
                {status === 'mastered' ? 'Mastered' : status === 'available' ? 'Available' : 'Locked'}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 leading-tight tracking-tight">
              {skill.name}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="flex-shrink-0 p-2.5 hover:bg-gray-100 rounded-xl transition-all hover:scale-105 active:scale-95"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="p-6 space-y-5">
        {/* Age Range Card */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-3">
            <Calendar className="w-4 h-4 text-primary-600" />
            <h3 className="section-header">Age Range</h3>
          </div>
          <p className="text-2xl font-bold text-gray-900 tracking-tight">
            {skill.ageRange.min}-{skill.ageRange.max} <span className="text-lg font-semibold text-gray-500">months</span>
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Typical timeframe for this milestone
          </p>
        </div>

        {/* Description Card */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <h3 className="section-header">What This Means</h3>
          <p className="text-gray-700 leading-relaxed">{skill.description}</p>
        </div>

        {/* Prerequisites Card */}
        {skill.prerequisites.length > 0 && (
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <h3 className="section-header">Prerequisites</h3>
            <ul className="space-y-3">
              {skill.prerequisites.map((prereqId) => {
                const prereq = getSkillById(prereqId);
                const prereqStatus = getSkillStatus(prereqId);
                return prereq ? (
                  <li
                    key={prereqId}
                    className="flex items-start gap-3 text-sm"
                  >
                    {prereqStatus === 'mastered' ? (
                      <CheckCircle2 className="w-5 h-5 text-success-600 flex-shrink-0 mt-0.5" />
                    ) : (
                      <Circle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    )}
                    <span className={`flex-1 leading-relaxed ${prereqStatus === 'mastered' ? 'line-through text-gray-500' : 'text-gray-700'}`}>
                      {prereq.name}
                    </span>
                  </li>
                ) : null;
              })}
            </ul>
          </div>
        )}

        {/* Tips Card */}
        {skill.tips && skill.tips.length > 0 && (
          <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-xl p-5 shadow-sm border border-primary-100">
            <h3 className="section-header flex items-center gap-2">
              <svg className="w-4 h-4 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              Tips for Parents
            </h3>
            <ul className="space-y-3">
              {skill.tips.map((tip, index) => (
                <li key={index} className="flex gap-3 text-sm">
                  <span className="text-primary-600 font-bold text-base flex-shrink-0">•</span>
                  <span className="text-gray-700 leading-relaxed">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Milestone importance */}
        {skill.milestoneImportance === 'critical' && (
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-xl p-5 shadow-sm">
            <div className="flex gap-3">
              <svg className="w-6 h-6 text-amber-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <div>
                <p className="font-bold text-amber-900 mb-1">Key Milestone</p>
                <p className="text-sm text-amber-800 leading-relaxed">
                  This is an important developmental marker that pediatricians often check during well-child visits.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Progress Tracking Card */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <h3 className="section-header">Track Progress</h3>
          <div className="space-y-3">
            {status === 'locked' && (
              <div className="text-center py-6">
                <Lock className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <p className="text-sm text-gray-500 leading-relaxed">
                  Complete the prerequisite skills to unlock this milestone.
                </p>
              </div>
            )}

            {status === 'available' && (
              <button
                onClick={() => handleStatusChange('mastered')}
                className="w-full btn-primary"
              >
                <CheckCircle2 className="w-5 h-5" />
                Mark as Mastered
              </button>
            )}

            {status === 'mastered' && (
              <>
                <div className="bg-gradient-to-br from-success-50 to-emerald-50 border-2 border-success-200 rounded-xl p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-success-100 rounded-full mb-3">
                    <CheckCircle2 className="w-8 h-8 text-success-600" />
                  </div>
                  <p className="text-lg font-bold text-success-900 mb-1">Mastered!</p>
                  <p className="text-sm text-success-700">Fantastic progress! 🎉</p>
                  {progress?.masteredAt && (
                    <p className="text-xs text-success-600 mt-3 font-medium">
                      {new Date(progress.masteredAt).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </p>
                  )}
                </div>
                <button
                  onClick={() => handleStatusChange('available')}
                  className="w-full btn-text"
                >
                  Reset to Available
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillDetail;
