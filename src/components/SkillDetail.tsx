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
    <div className="absolute top-0 right-0 w-full md:w-96 h-full bg-white shadow-2xl z-10 overflow-y-auto">
      <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {getStatusIcon()}
          <h2 className="text-xl font-bold text-gray-900">{skill.name}</h2>
        </div>
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="p-6 space-y-6">
        {/* Age range */}
        <div>
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
            <Calendar className="w-4 h-4" />
            <span>Typical Age Range</span>
          </div>
          <p className="text-lg font-semibold text-gray-900">
            {skill.ageRange.min}-{skill.ageRange.max} months
          </p>
        </div>

        {/* Description */}
        <div>
          <h3 className="text-sm font-semibold text-gray-700 mb-2">Description</h3>
          <p className="text-gray-600">{skill.description}</p>
        </div>

        {/* Prerequisites */}
        {skill.prerequisites.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              Prerequisites
            </h3>
            <ul className="space-y-2">
              {skill.prerequisites.map((prereqId) => {
                const prereq = getSkillById(prereqId);
                const prereqStatus = getSkillStatus(prereqId);
                return prereq ? (
                  <li
                    key={prereqId}
                    className="flex items-center gap-2 text-sm text-gray-600"
                  >
                    {prereqStatus === 'mastered' ? (
                      <CheckCircle2 className="w-4 h-4 text-success-600 flex-shrink-0" />
                    ) : (
                      <Circle className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    )}
                    <span className={prereqStatus === 'mastered' ? 'line-through' : ''}>
                      {prereq.name}
                    </span>
                  </li>
                ) : null;
              })}
            </ul>
          </div>
        )}

        {/* Tips */}
        {skill.tips && skill.tips.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              Tips for Parents
            </h3>
            <ul className="space-y-2">
              {skill.tips.map((tip, index) => (
                <li key={index} className="flex gap-2 text-sm text-gray-600">
                  <span className="text-primary-500 font-bold">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Milestone importance */}
        {skill.milestoneImportance === 'critical' && (
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-sm text-amber-900">
              <strong>Key Milestone:</strong> This is an important developmental
              marker that pediatricians often check during well-child visits.
            </p>
          </div>
        )}

        {/* Progress tracking */}
        <div className="pt-4 border-t border-gray-200">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">
            Track Progress
          </h3>
          <div className="space-y-3">
            {status === 'locked' && (
              <p className="text-sm text-gray-500 text-center py-4">
                Complete the prerequisite skills to unlock this milestone.
              </p>
            )}

            {status === 'available' && (
              <button
                onClick={() => handleStatusChange('mastered')}
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4" />
                Mark as Mastered
              </button>
            )}

            {status === 'mastered' && (
              <>
                <div className="bg-success-50 border border-success-200 rounded-lg p-4 text-center">
                  <CheckCircle2 className="w-8 h-8 text-success-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-success-900">Mastered!</p>
                  <p className="text-xs text-success-700 mt-1">Great progress!</p>
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

          {/* Progress dates */}
          {progress?.masteredAt && (
            <div className="mt-4 text-xs text-gray-500">
              <p>Mastered: {new Date(progress.masteredAt).toLocaleDateString()}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillDetail;
