import type { Skill } from '../types';
import { grossMotorSkills } from './grossMotorSkills';
import { fineMotorSkills } from './fineMotorSkills';
import { languageSkills } from './languageSkills';
import { cognitiveSkills } from './cognitiveSkills';
import { socialEmotionalSkills } from './socialEmotionalSkills';
import { selfCareSkills } from './selfCareSkills';
import { sensorySkills } from './sensorySkills';

// Combine all skills
export const allSkills: Skill[] = [
  ...grossMotorSkills,
  ...fineMotorSkills,
  ...languageSkills,
  ...cognitiveSkills,
  ...socialEmotionalSkills,
  ...selfCareSkills,
  ...sensorySkills,
];

// Export individual domains for filtering
export {
  grossMotorSkills,
  fineMotorSkills,
  languageSkills,
  cognitiveSkills,
  socialEmotionalSkills,
  selfCareSkills,
  sensorySkills,
};

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

// Helper to get statistics about the skill tree
export const getSkillStats = () => {
  const stats = {
    total: allSkills.length,
    byDomain: {
      'gross-motor': grossMotorSkills.length,
      'fine-motor': fineMotorSkills.length,
      'language': languageSkills.length,
      'cognitive': cognitiveSkills.length,
      'social-emotional': socialEmotionalSkills.length,
      'self-care': selfCareSkills.length,
      'sensory': sensorySkills.length,
    },
    foundational: allSkills.filter(s => s.milestoneImportance === 'foundational').length,
    critical: allSkills.filter(s => s.milestoneImportance === 'critical').length,
    skippable: allSkills.filter(s => s.isSkippable).length,
  };
  return stats;
};
