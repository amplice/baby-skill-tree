// Skill progress status
export type SkillStatus = 'locked' | 'available' | 'mastered';

// Developmental domain categories
export type SkillDomain =
  | 'gross-motor'
  | 'fine-motor'
  | 'language'
  | 'social-emotional'
  | 'cognitive'
  | 'self-care'
  | 'sensory';

// Age ranges in months
export interface AgeRange {
  min: number; // in months
  max: number; // in months
  typical?: number; // Most common age (75th percentile from CDC)
}

// Complexity level (how many prerequisites required)
export type ComplexityLevel = 'simple' | 'moderate' | 'complex' | 'very-complex';

// Individual skill definition
export interface Skill {
  id: string;
  name: string;
  description: string;
  domain: SkillDomain;
  ageRange: AgeRange;
  prerequisites: string[]; // IDs of skills that must be mastered first
  tips?: string[]; // Tips for parents to help baby master this skill
  milestoneImportance?: 'standard' | 'critical' | 'foundational'; // foundational = unlocks many other skills
  complexity?: ComplexityLevel; // Based on number of prerequisites
  isSkippable?: boolean; // Can be skipped (like crawling)
  variability?: 'low' | 'moderate' | 'high'; // How much variation in timing
  clinicalNotes?: string; // Important clinical information or red flags
  relatedSkills?: string[]; // Skills that are related but not prerequisites
  category?: string; // Sub-category within domain (e.g., "grasping", "walking progression")
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
