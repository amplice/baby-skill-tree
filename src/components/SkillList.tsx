import { useState } from 'react';
import { ChevronDown, ChevronRight, Check, Lock, Circle } from 'lucide-react';
import type { Skill } from '../types';
import { useProgressStore } from '../store/progressStore';

interface SkillListProps {
  skills: Skill[];
  onSkillClick: (skill: Skill) => void;
}

interface SkillGroup {
  label: string;
  ageRange: { min: number; max: number };
  skills: Skill[];
}

const SkillList = ({ skills, onSkillClick }: SkillListProps) => {
  const getSkillStatus = useProgressStore((state) => state.getSkillStatus);
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(new Set(['0-3']));

  // Group skills by age ranges (3-month buckets)
  const groupSkills = (): SkillGroup[] => {
    const groups = new Map<string, SkillGroup>();

    skills.forEach((skill) => {
      const age = skill.ageRange.typical || skill.ageRange.min;
      const bucketStart = Math.floor(age / 3) * 3;
      const bucketEnd = bucketStart + 3;
      const key = `${bucketStart}-${bucketEnd}`;

      if (!groups.has(key)) {
        groups.set(key, {
          label: bucketEnd <= 12
            ? `${bucketStart}-${bucketEnd} months`
            : `${bucketStart}-${bucketEnd} mo (${Math.floor(bucketStart/12)}-${Math.floor(bucketEnd/12)}y)`,
          ageRange: { min: bucketStart, max: bucketEnd },
          skills: [],
        });
      }

      groups.get(key)!.skills.push(skill);
    });

    // Sort groups by age and skills within groups
    return Array.from(groups.values())
      .sort((a, b) => a.ageRange.min - b.ageRange.min)
      .map(group => ({
        ...group,
        skills: group.skills.sort((a, b) => {
          const ageA = a.ageRange.typical || a.ageRange.min;
          const ageB = b.ageRange.typical || b.ageRange.min;
          return ageA - ageB;
        }),
      }));
  };

  const toggleGroup = (key: string) => {
    setExpandedGroups(prev => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'mastered':
        return <Check className="w-5 h-5 text-green-600" />;
      case 'available':
        return <Circle className="w-5 h-5 text-blue-500" />;
      default:
        return <Lock className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'mastered':
        return 'bg-green-50 border-green-200';
      case 'available':
        return 'bg-blue-50 border-blue-200';
      default:
        return 'bg-gray-50 border-gray-200';
    }
  };

  const skillGroups = groupSkills();

  return (
    <div className="w-full h-full overflow-y-auto bg-gray-50 p-4">
      <div className="max-w-2xl mx-auto space-y-3">
        {skillGroups.map((group) => {
          const groupKey = `${group.ageRange.min}-${group.ageRange.max}`;
          const isExpanded = expandedGroups.has(groupKey);

          // Count statuses in this group
          const statusCounts = group.skills.reduce((acc, skill) => {
            const status = getSkillStatus(skill.id);
            acc[status] = (acc[status] || 0) + 1;
            return acc;
          }, {} as Record<string, number>);

          return (
            <div key={groupKey} className="bg-white rounded-lg shadow-sm border border-gray-200">
              {/* Group Header */}
              <button
                onClick={() => toggleGroup(groupKey)}
                className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  {isExpanded ? (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-gray-500" />
                  )}
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-900">{group.label}</h3>
                    <p className="text-sm text-gray-500">
                      {statusCounts.mastered || 0} mastered • {group.skills.length} total
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  {statusCounts.mastered > 0 && (
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                      {statusCounts.mastered}
                    </span>
                  )}
                  {statusCounts.available > 0 && (
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                      {statusCounts.available}
                    </span>
                  )}
                </div>
              </button>

              {/* Skills List */}
              {isExpanded && (
                <div className="border-t border-gray-100">
                  {group.skills.map((skill) => {
                    const status = getSkillStatus(skill.id);
                    return (
                      <button
                        key={skill.id}
                        onClick={() => onSkillClick(skill)}
                        className={`w-full px-4 py-3 flex items-start gap-3 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors text-left ${getStatusColor(status)}`}
                      >
                        <div className="flex-shrink-0 mt-0.5">
                          {getStatusIcon(status)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-gray-900 text-sm">
                            {skill.name}
                          </h4>
                          <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                            {skill.description}
                          </p>
                          <div className="flex items-center gap-2 mt-2">
                            <span className="text-xs text-gray-500">
                              {skill.ageRange.min}-{skill.ageRange.max} months
                            </span>
                            {skill.prerequisites.length > 0 && (
                              <span className="text-xs text-gray-400">
                                • {skill.prerequisites.length} prereq
                              </span>
                            )}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillList;
