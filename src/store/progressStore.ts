import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { BabyProfile, SkillProgress, SkillStatus } from '../types';
import { arePrerequisitesMet } from '../data';

interface ProgressStore {
  babyProfile: BabyProfile | null;
  skillProgress: Record<string, SkillProgress>;

  // Actions
  setBabyProfile: (profile: BabyProfile) => void;
  updateSkillStatus: (skillId: string, status: SkillStatus, notes?: string) => void;
  getSkillStatus: (skillId: string) => SkillStatus;
  getSkillProgress: (skillId: string) => SkillProgress | undefined;
  resetProgress: () => void;
}

export const useProgressStore = create<ProgressStore>()(
  persist(
    (set, get) => ({
      babyProfile: null,
      skillProgress: {},

      setBabyProfile: (profile) => set({ babyProfile: profile }),

      updateSkillStatus: (skillId, status, notes) => {
        const currentProgress = get().skillProgress[skillId];
        const now = new Date();

        const updatedProgress: SkillProgress = {
          skillId,
          status,
          startedAt: currentProgress?.startedAt || (status === 'available' ? now : undefined),
          masteredAt: status === 'mastered' ? now : undefined,
          notes: notes || currentProgress?.notes,
        };

        set((state) => ({
          skillProgress: {
            ...state.skillProgress,
            [skillId]: updatedProgress,
          },
        }));
      },

      getSkillStatus: (skillId) => {
        const progress = get().skillProgress[skillId];
        if (progress?.status) {
          return progress.status;
        }

        // Check if prerequisites are met
        const masteredSkills = Object.values(get().skillProgress)
          .filter((p) => p.status === 'mastered')
          .map((p) => p.skillId);

        if (arePrerequisitesMet(skillId, masteredSkills)) {
          return 'available';
        }

        return 'locked';
      },

      getSkillProgress: (skillId) => {
        return get().skillProgress[skillId];
      },

      resetProgress: () => set({ skillProgress: {}, babyProfile: null }),
    }),
    {
      name: 'baby-skill-tree-storage',
    }
  )
);
