import type { Node, Edge } from 'reactflow';
import type { Skill, SkillNode, SkillStatus } from '../types';

interface LayoutOptions {
  horizontalSpacing: number;
  verticalSpacing: number;
}

/**
 * Converts skill data into React Flow nodes and edges with automatic layout
 * Organizes skills vertically by age, so similar ages appear together
 */
export const createSkillTree = (
  skills: Skill[],
  getSkillStatus: (skillId: string) => SkillStatus,
  options: LayoutOptions = { horizontalSpacing: 350, verticalSpacing: 120 }
): { nodes: Node<SkillNode>[]; edges: Edge[] } => {
  // Get the representative age for positioning (prefer typical, fall back to min)
  const getAge = (skill: Skill): number => {
    return skill.ageRange.typical || skill.ageRange.min;
  };

  // Group skills by age buckets (3-month intervals)
  const ageBucketSize = 3; // 3 months per bucket
  const ageGroupMap = new Map<number, Skill[]>();

  skills.forEach((skill) => {
    const age = getAge(skill);
    const bucket = Math.floor(age / ageBucketSize);

    if (!ageGroupMap.has(bucket)) {
      ageGroupMap.set(bucket, []);
    }
    ageGroupMap.get(bucket)!.push(skill);
  });

  // Sort buckets by age
  const sortedBuckets = Array.from(ageGroupMap.entries()).sort((a, b) => a[0] - b[0]);

  // Create nodes with positions
  const nodes: Node<SkillNode>[] = [];

  sortedBuckets.forEach(([, bucketSkills]) => {
    // Within each age bucket, sort by actual age, then by number of prerequisites
    // (skills with fewer prerequisites go left to minimize line crossing)
    const sortedSkills = bucketSkills.sort((a, b) => {
      const ageA = getAge(a);
      const ageB = getAge(b);

      if (ageA !== ageB) {
        return ageA - ageB;
      }

      // Then by prerequisite count (fewer prereqs = further left)
      if (a.prerequisites.length !== b.prerequisites.length) {
        return a.prerequisites.length - b.prerequisites.length;
      }

      return a.id.localeCompare(b.id);
    });

    sortedSkills.forEach((skill, index) => {
      const status = getSkillStatus(skill.id);
      const age = getAge(skill);

      // Calculate x position (spread horizontally within age group)
      const totalWidth = (sortedSkills.length - 1) * options.horizontalSpacing;
      const startX = -totalWidth / 2;
      const x = startX + index * options.horizontalSpacing;

      // Calculate y position based on actual age (in months)
      // Use fine-grained vertical spacing based on age
      const y = age * options.verticalSpacing;

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
