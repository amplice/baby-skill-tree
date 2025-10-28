import { memo } from 'react';
import { Handle, Position } from 'reactflow';
import type { NodeProps } from 'reactflow';
import type { SkillNode as SkillNodeType } from '../types';
import { Lock, CheckCircle2, Circle } from 'lucide-react';

const SkillNode = ({ data }: NodeProps<SkillNodeType>) => {
  const { name, status, ageRange, milestoneImportance } = data;

  // Enhanced color scheme based on status
  const getStatusStyle = () => {
    switch (status) {
      case 'mastered':
        return {
          bg: 'bg-gradient-to-br from-success-50 to-success-100',
          border: 'border-success-400',
          shadow: 'shadow-success-100/50',
          text: 'text-success-900',
          icon: <CheckCircle2 className="w-5 h-5 text-success-600" />,
          glow: 'hover:shadow-success-200/60',
        };
      case 'available':
        return {
          bg: 'bg-gradient-to-br from-white to-primary-50',
          border: 'border-primary-300',
          shadow: 'shadow-primary-100/50',
          text: 'text-gray-900',
          icon: <Circle className="w-5 h-5 text-primary-600" />,
          glow: 'hover:shadow-primary-200/60',
        };
      case 'locked':
      default:
        return {
          bg: 'bg-gradient-to-br from-gray-50 to-gray-100',
          border: 'border-gray-300',
          shadow: 'shadow-gray-100/50',
          text: 'text-gray-500',
          icon: <Lock className="w-5 h-5 text-gray-400" />,
          glow: 'hover:shadow-gray-200/60',
        };
    }
  };

  const statusStyle = getStatusStyle();
  const isCritical = milestoneImportance === 'critical';

  return (
    <div
      className={`
        relative px-5 py-4 rounded-xl border-2 min-w-[220px] max-w-[260px]
        transition-all duration-300 cursor-pointer
        ${statusStyle.bg} ${statusStyle.border}
        shadow-md ${statusStyle.shadow} ${statusStyle.glow}
        ${isCritical ? 'ring-2 ring-amber-400/60 ring-offset-2' : ''}
        hover:shadow-2xl hover:scale-105 hover:z-10 hover:-translate-y-1
        active:scale-[0.98] active:translate-y-0
        backdrop-blur-sm
      `}
    >
      {/* Connection handles */}
      <Handle
        type="target"
        position={Position.Top}
        className="w-3 h-3 !bg-gray-400"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        className="w-3 h-3 !bg-gray-400"
      />

      {/* Content */}
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 mt-0.5 p-1.5 rounded-lg bg-white/50 backdrop-blur-sm">
          {statusStyle.icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className={`font-bold text-[0.9375rem] ${statusStyle.text} leading-tight tracking-tight`}>
            {name}
          </h3>
          <div className="flex items-center gap-2 mt-2">
            <span className="inline-flex items-center gap-1 text-[0.6875rem] text-gray-600 font-medium">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {ageRange.min}-{ageRange.max} mo
            </span>
            {isCritical && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-amber-100 text-amber-900 text-[0.6875rem] rounded-md font-bold uppercase tracking-wide">
                <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Key
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(SkillNode);
