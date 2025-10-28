// Skill progress status
export type SkillStatus = 'locked' | 'available' | 'in-progress' | 'mastered';

// Developmental domain categories
export type SkillDomain =
  | 'gross-motor'
  | 'fine-motor'
  | 'language'
  | 'social-emotional'
  | 'cognitive';

// Age ranges in months
export interface AgeRange {
  min: number; // in months
  max: number; // in months
}

// Individual skill definition
export interface Skill {
  id: string;
  name: string;
  description: string;
  domain: SkillDomain;
  ageRange: AgeRange;
  prerequisites: string[]; // IDs of skills that must be mastered first
  tips?: string[]; // Tips for parents to help baby master this skill
  milestoneImportance?: 'standard' | 'critical'; // Some are more important markers
}

// User's progress on a specific skill
export interface SkillProgress {
  skillId: string;
  status: SkillStatus;
  startedAt?: Date;
  masteredAt?: Date;
  notes?: string;
}

// Baby profile
export interface BabyProfile {
  id: string;
  name: string;
  birthDate: Date;
  photo?: string;
  createdAt: Date;
}

// Complete progress state
export interface ProgressState {
  babyProfile: BabyProfile;
  skillProgress: Record<string, SkillProgress>; // key is skillId
  lastUpdated: Date;
}

// For the visual tree
export interface SkillNode extends Skill {
  status: SkillStatus;
  progress?: SkillProgress;
}
