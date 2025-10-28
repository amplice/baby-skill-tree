import { memo } from 'react';
import { Handle, Position } from 'reactflow';
import type { NodeProps } from 'reactflow';
import type { SkillNode as SkillNodeType } from '../types';
import { Lock, CheckCircle2, Play, Circle } from 'lucide-react';

const SkillNode = ({ data }: NodeProps<SkillNodeType>) => {
  const { name, status, ageRange, milestoneImportance } = data;

  // Color scheme based on status
  const getStatusStyle = () => {
    switch (status) {
      case 'mastered':
        return {
          bg: 'bg-success-100 border-success-500',
          text: 'text-success-900',
          icon: <CheckCircle2 className="w-5 h-5 text-success-600" />,
        };
      case 'in-progress':
        return {
          bg: 'bg-primary-100 border-primary-500',
          text: 'text-primary-900',
          icon: <Play className="w-5 h-5 text-primary-600" />,
        };
      case 'available':
        return {
          bg: 'bg-white border-gray-300',
          text: 'text-gray-900',
          icon: <Circle className="w-5 h-5 text-gray-400" />,
        };
      case 'locked':
      default:
        return {
          bg: 'bg-gray-100 border-gray-300',
          text: 'text-gray-500',
          icon: <Lock className="w-5 h-5 text-gray-400" />,
        };
    }
  };

  const statusStyle = getStatusStyle();
  const isCritical = milestoneImportance === 'critical';

  return (
    <div
      className={`
        relative px-4 py-3 rounded-lg border-2 min-w-[200px] max-w-[250px]
        transition-all duration-200 cursor-pointer
        ${statusStyle.bg}
        ${isCritical ? 'ring-2 ring-amber-400 ring-offset-2' : ''}
        hover:shadow-xl hover:scale-105 hover:z-10
        active:scale-100 active:shadow-lg
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
      <div className="flex items-start gap-2">
        <div className="flex-shrink-0 mt-0.5">{statusStyle.icon}</div>
        <div className="flex-1 min-w-0">
          <h3 className={`font-semibold text-sm ${statusStyle.text} leading-tight`}>
            {name}
          </h3>
          <p className="text-xs text-gray-600 mt-1">
            {ageRange.min}-{ageRange.max} months
          </p>
          {isCritical && (
            <span className="inline-block mt-1 px-2 py-0.5 bg-amber-200 text-amber-900 text-xs rounded-full font-medium">
              Key Milestone
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(SkillNode);
