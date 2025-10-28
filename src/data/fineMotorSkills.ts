import type { Skill } from '../types';

export const fineMotorSkills: Skill[] = [
  // Level 0: Reflexive grasping
  {
    id: 'fm-001',
    name: 'Reflexive Grasp',
    description: 'Automatically grasps objects placed in palm (reflex)',
    domain: 'fine-motor',
    ageRange: { min: 0, max: 2 },
    prerequisites: [],
    tips: [
      'Place your finger in baby\'s palm to trigger the grasp reflex',
      'This reflex will disappear around 3-4 months',
    ],
    milestoneImportance: 'standard',
  },
  {
    id: 'fm-002',
    name: 'Hands to Mouth',
    description: 'Can bring hands to mouth intentionally',
    domain: 'fine-motor',
    ageRange: { min: 1, max: 3 },
    prerequisites: [],
    tips: [
      'This is an important self-soothing skill',
      'Baby is learning about their own body',
    ],
    milestoneImportance: 'standard',
  },
  {
    id: 'fm-003',
    name: 'Watches Own Hands',
    description: 'Spends time looking at and studying own hands',
    domain: 'fine-motor',
    ageRange: { min: 2, max: 4 },
    prerequisites: ['fm-002'],
    tips: [
      'This shows growing body awareness',
      'Baby is learning they can control their hands',
    ],
    milestoneImportance: 'standard',
  },

  // Level 1: Reaching and batting
  {
    id: 'fm-004',
    name: 'Swipes at Toys',
    description: 'Swings arms to bat at dangling toys',
    domain: 'fine-motor',
    ageRange: { min: 3, max: 5 },
    prerequisites: ['fm-003'],
    tips: [
      'Use a baby gym or hang toys from play mat',
      'Baby is learning cause and effect',
    ],
    milestoneImportance: 'standard',
  },
  {
    id: 'fm-005',
    name: 'Reaches for Objects',
    description: 'Reaches for objects with one or both hands',
    domain: 'fine-motor',
    ageRange: { min: 3, max: 5 },
    prerequisites: ['fm-004'],
    tips: [
      'Offer toys at chest level during tummy time',
      'This requires coordination between eyes and hands',
    ],
    milestoneImportance: 'standard',
  },

  // Level 2: Voluntary grasping
  {
    id: 'fm-006',
    name: 'Voluntary Grasp',
    description: 'Can intentionally grasp objects (not reflexive)',
    domain: 'fine-motor',
    ageRange: { min: 4, max: 6 },
    prerequisites: ['fm-005', 'fm-001'],
    tips: [
      'Offer rattles and soft toys to practice',
      'This is a huge developmental leap!',
    ],
    milestoneImportance: 'critical',
  },
  {
    id: 'fm-007',
    name: 'Holds and Shakes Rattle',
    description: 'Can hold a rattle and shake it to make noise',
    domain: 'fine-motor',
    ageRange: { min: 4, max: 6 },
    prerequisites: ['fm-006'],
    tips: [
      'Baby is learning cause and effect',
      'Encourage shaking by demonstrating',
    ],
    milestoneImportance: 'standard',
  },
  {
    id: 'fm-008',
    name: 'Transfers Object Hand to Hand',
    description: 'Can pass a toy from one hand to the other',
    domain: 'fine-motor',
    ageRange: { min: 5, max: 7 },
    prerequisites: ['fm-006'],
    tips: [
      'This shows improved hand coordination',
      'Offer objects to one hand, see if baby transfers',
    ],
    milestoneImportance: 'critical',
  },

  // Level 3: Raking and pincer development
  {
    id: 'fm-009',
    name: 'Raking Grasp',
    description: 'Uses whole hand in raking motion to pick up small objects',
    domain: 'fine-motor',
    ageRange: { min: 6, max: 8 },
    prerequisites: ['fm-008'],
    tips: [
      'Try with puffs or small soft foods during meals',
      'Supervise closely to prevent choking',
    ],
    milestoneImportance: 'standard',
  },
  {
    id: 'fm-010',
    name: 'Bangs Objects Together',
    description: 'Holds object in each hand and bangs them together',
    domain: 'fine-motor',
    ageRange: { min: 7, max: 9 },
    prerequisites: ['fm-008'],
    tips: [
      'Offer blocks or rattles to bang together',
      'Baby loves the noise and cause-effect',
    ],
    milestoneImportance: 'standard',
  },
  {
    id: 'fm-011',
    name: 'Pincer Grasp (Crude)',
    description: 'Can pick up small objects using thumb and fingers (not precise yet)',
    domain: 'fine-motor',
    ageRange: { min: 8, max: 10 },
    prerequisites: ['fm-009'],
    tips: [
      'Practice with Cheerios or puffs',
      'This is a precursor to self-feeding',
      'Always supervise with small objects',
    ],
    milestoneImportance: 'critical',
  },
  {
    id: 'fm-012',
    name: 'Pincer Grasp (Fine)',
    description: 'Can pick up tiny objects with thumb and index finger precisely',
    domain: 'fine-motor',
    ageRange: { min: 9, max: 12 },
    prerequisites: ['fm-011'],
    tips: [
      'Baby can now pick up very small objects',
      'Keep small choking hazards out of reach',
      'Great for self-feeding small pieces',
    ],
    milestoneImportance: 'critical',
  },

  // Level 4: Advanced manipulation
  {
    id: 'fm-013',
    name: 'Points with Index Finger',
    description: 'Uses index finger to point at objects or pictures',
    domain: 'fine-motor',
    ageRange: { min: 9, max: 12 },
    prerequisites: ['fm-012'],
    tips: [
      'Baby may point to request things',
      'This is also an important communication skill',
      'Point at pictures in books together',
    ],
    milestoneImportance: 'critical',
  },
  {
    id: 'fm-014',
    name: 'Puts Objects in Container',
    description: 'Can place objects into containers and dump them out',
    domain: 'fine-motor',
    ageRange: { min: 10, max: 14 },
    prerequisites: ['fm-012'],
    tips: [
      'Use a bucket and blocks for practice',
      'Baby loves the game of filling and dumping',
    ],
    milestoneImportance: 'standard',
  },
  {
    id: 'fm-015',
    name: 'Stacks 2 Blocks',
    description: 'Can stack one block on top of another',
    domain: 'fine-motor',
    ageRange: { min: 12, max: 16 },
    prerequisites: ['fm-010', 'fm-014'],
    tips: [
      'Demonstrate stacking first',
      'Celebrate when the tower falls!',
      'This requires hand-eye coordination and balance',
    ],
    milestoneImportance: 'standard',
  },
  {
    id: 'fm-016',
    name: 'Turns Pages in Book',
    description: 'Can turn pages in a board book (may turn multiple at once)',
    domain: 'fine-motor',
    ageRange: { min: 12, max: 18 },
    prerequisites: ['fm-012'],
    tips: [
      'Use thick board books designed for babies',
      'Turning pages builds interest in books',
      'Fine control will improve over time',
    ],
    milestoneImportance: 'standard',
  },
];
