import type { Node, Edge } from 'reactflow';
import type { Skill, SkillNode, SkillStatus } from '../types';

interface LayoutOptions {
  horizontalSpacing: number;
  verticalSpacing: number;
}

/**
 * Converts skill data into React Flow nodes and edges with automatic layout
 */
export const createSkillTree = (
  skills: Skill[],
  getSkillStatus: (skillId: string) => SkillStatus,
  options: LayoutOptions = { horizontalSpacing: 300, verticalSpacing: 150 }
): { nodes: Node<SkillNode>[]; edges: Edge[] } => {
  // Build a map of skills
  const skillMap = new Map(skills.map((skill) => [skill.id, skill]));

  // Calculate depth for each skill (longest path from root)
  const depthMap = new Map<string, number>();
  const calculateDepth = (skillId: string): number => {
    if (depthMap.has(skillId)) {
      return depthMap.get(skillId)!;
    }

    const skill = skillMap.get(skillId);
    if (!skill || skill.prerequisites.length === 0) {
      depthMap.set(skillId, 0);
      return 0;
    }

    const maxPrereqDepth = Math.max(
      ...skill.prerequisites.map((prereqId) => calculateDepth(prereqId))
    );
    const depth = maxPrereqDepth + 1;
    depthMap.set(skillId, depth);
    return depth;
  };

  // Calculate depths for all skills
  skills.forEach((skill) => calculateDepth(skill.id));

  // Group skills by depth level
  const levelMap = new Map<number, Skill[]>();
  skills.forEach((skill) => {
    const depth = depthMap.get(skill.id) || 0;
    if (!levelMap.has(depth)) {
      levelMap.set(depth, []);
    }
    levelMap.get(depth)!.push(skill);
  });

  // Create nodes with positions
  const nodes: Node<SkillNode>[] = [];

  levelMap.forEach((levelSkills, level) => {
    const sortedSkills = levelSkills.sort((a, b) => {
      // Sort by age range, then by ID for consistency
      if (a.ageRange.min !== b.ageRange.min) {
        return a.ageRange.min - b.ageRange.min;
      }
      return a.id.localeCompare(b.id);
    });

    sortedSkills.forEach((skill, index) => {
      const status = getSkillStatus(skill.id);

      // Calculate x position (spread horizontally)
      const totalWidth = (sortedSkills.length - 1) * options.horizontalSpacing;
      const startX = -totalWidth / 2;
      const x = startX + index * options.horizontalSpacing;

      // Calculate y position (stack vertically by level)
      const y = level * options.verticalSpacing;

      const node: Node<SkillNode> = {
        id: skill.id,
        type: 'skillNode',
        position: { x, y },
        data: {
          ...skill,
          status,
        },
      };

      nodes.push(node);
    });
  });

  // Create edges (connections between skills)
  const edges: Edge[] = [];
  skills.forEach((skill) => {
    skill.prerequisites.forEach((prereqId) => {
      edges.push({
        id: `${prereqId}-${skill.id}`,
        source: prereqId,
        target: skill.id,
        type: 'smoothstep',
        animated: false,
        style: { stroke: '#94a3b8', strokeWidth: 2 },
      });
    });
  });

  return { nodes, edges };
};
