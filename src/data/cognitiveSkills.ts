import type { Skill } from '../types';

export const cognitiveSkills: Skill[] = [
  // OBJECT PERMANENCE CHAIN - Foundational Cognitive Skill

  {
    id: 'cog-001',
    name: 'Visual Tracking',
    description: 'Follows moving objects with eyes',
    domain: 'cognitive',
    ageRange: { min: 2, max: 4, typical: 3 },
    prerequisites: [],
    tips: [
      'Move a toy slowly across baby\'s field of vision',
      'This is the foundation for many cognitive skills',
      'Helps baby learn about objects in their world',
    ],
    milestoneImportance: 'foundational',
    complexity: 'simple',
    variability: 'low',
    category: 'object-permanence',
  },

  {
    id: 'cog-002',
    name: 'Looks for Dropped Objects Briefly',
    description: 'Looks briefly toward dropped object before losing interest',
    domain: 'cognitive',
    ageRange: { min: 4, max: 7, typical: 6 },
    prerequisites: ['cog-001'],
    tips: [
      'Drop a toy and see if baby looks for it',
      'Shows early awareness that objects exist',
      'Precursor to object permanence',
    ],
    milestoneImportance: 'standard',
    complexity: 'simple',
    variability: 'moderate',
    category: 'object-permanence',
  },

  {
    id: 'cog-003',
    name: 'Searches for Partially Hidden Objects',
    description: 'Will reach for an object that is partly covered by a cloth',
    domain: 'cognitive',
    ageRange: { min: 6, max: 9, typical: 8 },
    prerequisites: ['cog-002'],
    tips: [
      'Cover toy halfway with a blanket',
      'Baby is learning objects exist even when partly hidden',
      'This is a big cognitive leap',
    ],
    milestoneImportance: 'critical',
    complexity: 'moderate',
    variability: 'moderate',
    category: 'object-permanence',
  },

  {
    id: 'cog-004',
    name: 'Object Permanence',
    description: 'Searches for completely hidden objects - understands they still exist',
    domain: 'cognitive',
    ageRange: { min: 8, max: 12, typical: 10 },
    prerequisites: ['cog-003'],
    tips: [
      'Play peek-a-boo with objects and face',
      'Hide toys under blankets completely',
      'This unlocks many other cognitive and emotional skills',
    ],
    milestoneImportance: 'foundational', // Unlocks separation anxiety, pretend play, symbolic thinking
    complexity: 'moderate',
    variability: 'moderate',
    clinicalNotes: 'Critical for emotional and cognitive development; enables separation anxiety, symbolic thought',
    category: 'object-permanence',
  },

  {
    id: 'cog-005',
    name: 'Follows Visible Displacement',
    description: 'Finds object when moved to new hiding spot in front of them',
    domain: 'cognitive',
    ageRange: { min: 12, max: 18, typical: 15 },
    prerequisites: ['cog-004'],
    tips: [
      'Move a toy from one cup to another while baby watches',
      'Baby can track the object\'s movement',
      'More advanced object permanence',
    ],
    milestoneImportance: 'standard',
    complexity: 'moderate',
    variability: 'moderate',
    category: 'object-permanence',
  },

  {
    id: 'cog-006',
    name: 'Invisible Displacement Understanding',
    description: 'Finds object even when hiding is not fully visible',
    domain: 'cognitive',
    ageRange: { min: 18, max: 24, typical: 21 },
    prerequisites: ['cog-005'],
    tips: [
      'Hide object in your hand, then hide hand under blanket',
      'This shows mental representation ability',
      'Very advanced cognitive skill',
    ],
    milestoneImportance: 'standard',
    complexity: 'complex',
    variability: 'moderate',
    category: 'object-permanence',
  },

  // CAUSE AND EFFECT

  {
    id: 'cog-007',
    name: 'Cause and Effect - Shaking',
    description: 'Shakes rattle to make noise - understands action causes sound',
    domain: 'cognitive',
    ageRange: { min: 4, max: 6, typical: 5 },
    prerequisites: [],
    tips: [
      'Offer rattles and noisy toys',
      'Baby is learning "I make things happen"',
      'Foundation for understanding how world works',
    ],
    milestoneImportance: 'standard',
    complexity: 'simple',
    variability: 'low',
    category: 'cause-effect',
  },

  {
    id: 'cog-008',
    name: 'Intentional Actions',
    description: 'Deliberately drops objects to see them fall or hear sound',
    domain: 'cognitive',
    ageRange: { min: 7, max: 10, typical: 9 },
    prerequisites: ['cog-007'],
    tips: [
      'This is exploration, not misbehavior!',
      'Baby is testing what happens',
      'Provide safe objects to drop',
    ],
    milestoneImportance: 'standard',
    complexity: 'simple',
    variability: 'low',
    category: 'cause-effect',
  },

  {
    id: 'cog-009',
    name: 'Uses Tools',
    description: 'Uses one object to get another (pulls blanket to get toy on it)',
    domain: 'cognitive',
    ageRange: { min: 10, max: 14, typical: 12 },
    prerequisites: ['cog-008'],
    tips: [
      'Place toy on a small blanket or scarf',
      'Shows problem-solving ability',
      'This is advanced cause-effect understanding',
    ],
    milestoneImportance: 'critical',
    complexity: 'complex',
    variability: 'moderate',
    category: 'problem-solving',
  },

  // IMITATION AND PRETEND PLAY

  {
    id: 'cog-010',
    name: 'Imitates Actions Immediately',
    description: 'Copies simple actions like clapping or waving while watching',
    domain: 'cognitive',
    ageRange: { min: 9, max: 12, typical: 10 },
    prerequisites: [],
    tips: [
      'Play pat-a-cake and peek-a-boo',
      'Clap and see if baby copies',
      'This is social learning beginning',
    ],
    milestoneImportance: 'critical',
    complexity: 'moderate',
    variability: 'moderate',
    category: 'imitation',
  },

  {
    id: 'cog-011',
    name: 'Functional Play',
    description: 'Uses objects correctly (puts phone to ear, brushes hair)',
    domain: 'cognitive',
    ageRange: { min: 12, max: 15, typical: 13 },
    prerequisites: ['cog-010'],
    tips: [
      'Offer toy versions of household items',
      'Model using objects correctly',
      'Shows understanding of object purpose',
    ],
    milestoneImportance: 'standard',
    complexity: 'moderate',
    variability: 'moderate',
    category: 'pretend-play',
  },

  {
    id: 'cog-012',
    name: 'Deferred Imitation',
    description: 'Imitates actions seen earlier, not just immediately',
    domain: 'cognitive',
    ageRange: { min: 15, max: 20, typical: 18 },
    prerequisites: ['cog-010', 'cog-004'], // Needs object permanence for memory
    tips: [
      'Baby might copy your actions from earlier in the day',
      'Shows memory development',
      'Foundation for more complex pretend play',
    ],
    milestoneImportance: 'critical',
    complexity: 'complex',
    variability: 'moderate',
    category: 'imitation',
  },

  {
    id: 'cog-013',
    name: 'Symbolic Thinking Emerges',
    description: 'Understands one object can represent another',
    domain: 'cognitive',
    ageRange: { min: 18, max: 24, typical: 21 },
    prerequisites: ['cog-004'], // Requires object permanence
    tips: [
      'Baby might use a block as a phone',
      'This is the foundation for pretend play',
      'Also critical for language development',
    ],
    milestoneImportance: 'foundational', // Unlocks pretend play and advanced language
    complexity: 'complex',
    variability: 'moderate',
    category: 'pretend-play',
  },

  {
    id: 'cog-014',
    name: 'Simple Pretend Play',
    description: 'Pretends with self (pretends to drink from empty cup, eat pretend food)',
    domain: 'cognitive',
    ageRange: { min: 18, max: 24, typical: 21 },
    prerequisites: ['cog-011', 'cog-012', 'cog-013'], // Needs multiple prerequisites!
    tips: [
      'Provide props like toy kitchen items',
      'Join in the pretend play',
      'This shows abstract thinking ability',
    ],
    milestoneImportance: 'critical',
    complexity: 'very-complex', // Requires many prerequisites
    variability: 'moderate',
    category: 'pretend-play',
  },

  {
    id: 'cog-015',
    name: 'Pretend Play with Dolls/Toys',
    description: 'Feeds doll, puts teddy to bed - pretends for others',
    domain: 'cognitive',
    ageRange: { min: 24, max: 30, typical: 27 },
    prerequisites: ['cog-014'],
    tips: [
      'Provide baby dolls and stuffed animals',
      'This shows empathy development',
      'Can now imagine others\' experiences',
    ],
    milestoneImportance: 'standard',
    complexity: 'very-complex',
    variability: 'moderate',
    category: 'pretend-play',
  },

  {
    id: 'cog-016',
    name: 'Pretend with Imaginary Objects',
    description: 'Pretends without props (mimes drinking, pretends to drive)',
    domain: 'cognitive',
    ageRange: { min: 30, max: 36, typical: 33 },
    prerequisites: ['cog-015'],
    tips: [
      'Highest level of symbolic thinking',
      'Can create entire scenarios mentally',
      'Shows advanced abstract reasoning',
    ],
    milestoneImportance: 'standard',
    complexity: 'very-complex',
    variability: 'moderate',
    category: 'pretend-play',
  },

  {
    id: 'cog-017',
    name: 'Complex Pretend Sequences',
    description: 'Creates elaborate pretend scenarios with multiple steps',
    domain: 'cognitive',
    ageRange: { min: 30, max: 36, typical: 33 },
    prerequisites: ['cog-016'],
    tips: [
      'Making pretend meals, playing house, doctor',
      'Can act out stories from books',
      'Shows narrative thinking and sequencing',
    ],
    milestoneImportance: 'standard',
    complexity: 'very-complex',
    variability: 'moderate',
    category: 'pretend-play',
  },

  // SHAPE RECOGNITION

  {
    id: 'cog-018',
    name: 'Notices Shape Differences',
    description: 'Shows awareness that shapes look different (no matching yet)',
    domain: 'cognitive',
    ageRange: { min: 12, max: 18, typical: 15 },
    prerequisites: [],
    tips: [
      'Babies notice differences before they can match',
      'Play with shape sorters (they\'ll use trial-error)',
      'This is visual discrimination developing',
    ],
    milestoneImportance: 'standard',
    complexity: 'simple',
    variability: 'moderate',
    category: 'shapes',
  },

  {
    id: 'cog-019',
    name: 'Matches Basic Shapes',
    description: 'Can match identical shapes (circle to circle, square to square)',
    domain: 'cognitive',
    ageRange: { min: 19, max: 30, typical: 24 },
    prerequisites: ['cog-018'],
    tips: [
      'Use shape sorters and puzzles',
      'Start with very different shapes (circle vs square)',
      'Matching is easier than naming',
    ],
    milestoneImportance: 'standard',
    complexity: 'moderate',
    variability: 'moderate',
    category: 'shapes',
  },

  {
    id: 'cog-020',
    name: 'Sorts Shapes',
    description: 'Separates circles, squares, triangles into groups',
    domain: 'cognitive',
    ageRange: { min: 24, max: 36, typical: 30 },
    prerequisites: ['cog-019'],
    tips: [
      'Provide sets of different shapes',
      'Can put all circles in one pile, squares in another',
      'Shows categorization ability',
    ],
    milestoneImportance: 'standard',
    complexity: 'moderate',
    variability: 'moderate',
    category: 'shapes',
  },

  {
    id: 'cog-021',
    name: 'Names Basic Shapes',
    description: 'Can name circle, square, and triangle',
    domain: 'cognitive',
    ageRange: { min: 30, max: 36, typical: 33 },
    prerequisites: ['cog-020'],
    tips: [
      'Point out shapes in everyday objects',
      'Read books about shapes',
      'Naming is harder than matching',
    ],
    milestoneImportance: 'standard',
    complexity: 'complex',
    variability: 'moderate',
    category: 'shapes',
  },

  // COLOR RECOGNITION

  {
    id: 'cog-022',
    name: 'Understands "Same vs Different"',
    description: 'Understands concept that some things are same, some different',
    domain: 'cognitive',
    ageRange: { min: 18, max: 24, typical: 21 },
    prerequisites: [],
    tips: [
      'This is foundation for matching and sorting',
      'Point out same/different in daily life',
      'Precursor to all categorization',
    ],
    milestoneImportance: 'foundational',
    complexity: 'moderate',
    variability: 'moderate',
    category: 'colors',
  },

  {
    id: 'cog-023',
    name: 'Matches Colors',
    description: 'Can match objects of the same color together',
    domain: 'cognitive',
    ageRange: { min: 24, max: 30, typical: 27 },
    prerequisites: ['cog-022'],
    tips: [
      'Start with very different colors (red vs blue)',
      'Matching comes before naming',
      'Use everyday objects of different colors',
    ],
    milestoneImportance: 'standard',
    complexity: 'moderate',
    variability: 'high',
    category: 'colors',
  },

  {
    id: 'cog-024',
    name: 'Identifies Colors When Named',
    description: 'Can find the red block when you say "red" (receptive)',
    domain: 'cognitive',
    ageRange: { min: 27, max: 36, typical: 30 },
    prerequisites: ['cog-023'],
    tips: [
      'Ask "Can you find the blue car?"',
      'Understanding colors before naming them',
      'This is receptive color knowledge',
    ],
    milestoneImportance: 'standard',
    complexity: 'moderate',
    variability: 'high',
    category: 'colors',
  },

  {
    id: 'cog-025',
    name: 'Names 2+ Colors',
    description: 'Can name at least 2 colors correctly and consistently',
    domain: 'cognitive',
    ageRange: { min: 30, max: 42, typical: 36 },
    prerequisites: ['cog-024'],
    tips: [
      'Naming is the hardest color skill',
      'Every child develops at different pace',
      'Focus on primary colors first',
    ],
    milestoneImportance: 'standard',
    complexity: 'complex',
    variability: 'high',
    category: 'colors',
  },

  // NUMBER SENSE AND COUNTING

  {
    id: 'cog-026',
    name: 'One vs Many Concept',
    description: 'Understands difference between "one" and "many"',
    domain: 'cognitive',
    ageRange: { min: 12, max: 18, typical: 15 },
    prerequisites: [],
    tips: [
      'Use language: "one cookie" vs "many cookies"',
      'This is very early number sense',
      'Foundation for all math concepts',
    ],
    milestoneImportance: 'foundational',
    complexity: 'simple',
    variability: 'moderate',
    category: 'numbers',
  },

  {
    id: 'cog-027',
    name: 'Rote Counting to 5',
    description: 'Can recite numbers 1-5 (may skip numbers, order might be wrong)',
    domain: 'cognitive',
    ageRange: { min: 24, max: 36, typical: 30 },
    prerequisites: ['cog-026'],
    tips: [
      'Sing counting songs',
      'Count during daily activities',
      'Knowing number words comes before understanding them',
    ],
    milestoneImportance: 'standard',
    complexity: 'simple',
    variability: 'high',
    category: 'numbers',
  },

  {
    id: 'cog-028',
    name: 'One-to-One Correspondence Emerges',
    description: 'Beginning to point to objects while counting (may not be accurate)',
    domain: 'cognitive',
    ageRange: { min: 24, max: 36, typical: 30 },
    prerequisites: ['cog-027'],
    tips: [
      'Count toys together, touching each one',
      'This is the bridge between reciting and understanding',
      'Accuracy will improve with practice',
    ],
    milestoneImportance: 'critical',
    complexity: 'moderate',
    variability: 'high',
    category: 'numbers',
  },

  {
    id: 'cog-029',
    name: 'Counts to 10',
    description: 'Can rote count to 10 in order',
    domain: 'cognitive',
    ageRange: { min: 30, max: 42, typical: 36 },
    prerequisites: ['cog-027'],
    tips: [
      'Practice counting stairs, toys, snacks',
      'Make it part of play and routines',
      'Repetition helps memorization',
    ],
    milestoneImportance: 'standard',
    complexity: 'moderate',
    variability: 'high',
    category: 'numbers',
  },

  {
    id: 'cog-030',
    name: 'True Counting 1-3 Objects',
    description: 'Can count 1-3 objects accurately with one-to-one correspondence',
    domain: 'cognitive',
    ageRange: { min: 30, max: 42, typical: 36 },
    prerequisites: ['cog-028'],
    tips: [
      'Start with just 2-3 objects',
      'This shows true number understanding',
      'Can answer "how many?"',
    ],
    milestoneImportance: 'critical',
    complexity: 'complex',
    variability: 'high',
    category: 'numbers',
  },

  // PROBLEM SOLVING

  {
    id: 'cog-031',
    name: 'Trial and Error Problem Solving',
    description: 'Tries different approaches until finding solution (shape sorter)',
    domain: 'cognitive',
    ageRange: { min: 12, max: 18, typical: 15 },
    prerequisites: [],
    tips: [
      'Allow time for baby to figure things out',
      'Resist urge to solve immediately',
      'Frustration is part of learning',
    ],
    milestoneImportance: 'standard',
    complexity: 'moderate',
    variability: 'moderate',
    category: 'problem-solving',
  },

  {
    id: 'cog-032',
    name: 'Means-End Understanding',
    description: 'Understands need to do one thing to accomplish another',
    domain: 'cognitive',
    ageRange: { min: 15, max: 24, typical: 18 },
    prerequisites: ['cog-031', 'cog-009'],
    tips: [
      'Push button to make toy work, open door to get toy',
      'Shows understanding of cause-effect chains',
      'Foundation for complex problem solving',
    ],
    milestoneImportance: 'critical',
    complexity: 'complex',
    variability: 'moderate',
    category: 'problem-solving',
  },

  {
    id: 'cog-033',
    name: 'Simple Puzzles',
    description: 'Completes simple 2-4 piece puzzles',
    domain: 'cognitive',
    ageRange: { min: 18, max: 30, typical: 24 },
    prerequisites: ['cog-031'],
    tips: [
      'Start with knob puzzles',
      'Combines spatial awareness and problem-solving',
      'Builds patience and persistence',
    ],
    milestoneImportance: 'standard',
    complexity: 'moderate',
    variability: 'high',
    category: 'problem-solving',
  },
];
