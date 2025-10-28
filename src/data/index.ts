import type { Skill } from '../types';
import { grossMotorSkills } from './grossMotorSkills';
import { fineMotorSkills } from './fineMotorSkills';

// Combine all skills
export const allSkills: Skill[] = [
  ...grossMotorSkills,
  ...fineMotorSkills,
];

// Export individual domains for filtering
export { grossMotorSkills, fineMotorSkills };

// Helper to get skills by domain
export const getSkillsByDomain = (domain: string): Skill[] => {
  return allSkills.filter(skill => skill.domain === domain);
};

// Helper to get a skill by ID
export const getSkillById = (id: string): Skill | undefined => {
  return allSkills.find(skill => skill.id === id);
};

// Helper to check if all prerequisites are met
export const arePrerequisitesMet = (
  skillId: string,
  masteredSkills: string[]
): boolean => {
  const skill = getSkillById(skillId);
  if (!skill) return false;

  return skill.prerequisites.every(prereqId =>
    masteredSkills.includes(prereqId)
  );
};
