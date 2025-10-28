import type { Skill } from '../types';

export const socialEmotionalSkills: Skill[] = [
  // SOCIAL SMILE AND ATTACHMENT CHAIN

  {
    id: 'se-001',
    name: 'Reflexive Smile',
    description: 'Smiles during sleep or random times (not social yet)',
    domain: 'social-emotional',
    ageRange: { min: 0, max: 1, typical: 0 },
    prerequisites: [],
    tips: [
      'These early smiles are reflexive, not in response to you',
      'Social smiling will come soon!',
      'Enjoy these sweet moments',
    ],
    milestoneImportance: 'standard',
    complexity: 'simple',
    variability: 'low',
    category: 'attachment',
  },

  {
    id: 'se-002',
    name: 'Social Smile',
    description: 'Smiles in response to your smile or voice',
    domain: 'social-emotional',
    ageRange: { min: 1, max: 3, typical: 2 },
    prerequisites: ['se-001'],
    tips: [
      'This is baby\'s first true social interaction!',
      'Smile often at your baby',
      'Celebrate this milestone - connection has begun',
    ],
    milestoneImportance: 'critical',
    complexity: 'simple',
    variability: 'low',
    clinicalNotes: 'No social smile by 3 months warrants evaluation',
    category: 'attachment',
  },

  {
    id: 'se-003',
    name: 'Smiles at Familiar People',
    description: 'Smiles readily at familiar caregivers',
    domain: 'social-emotional',
    ageRange: { min: 3, max: 5, typical: 4 },
    prerequisites: ['se-002'],
    tips: [
      'Baby is learning who their important people are',
      'Shows developing attachment bonds',
      'Responds more to familiar faces',
    ],
    milestoneImportance: 'standard',
    complexity: 'simple',
    variability: 'low',
    category: 'attachment',
  },

  {
    id: 'se-004',
    name: 'Spontaneous Smile for Attention',
    description: 'Smiles on own to get your attention - not just responding',
    domain: 'social-emotional',
    ageRange: { min: 4, max: 6, typical: 4 },
    prerequisites: ['se-003'],
    tips: [
      'Baby is learning they can initiate interaction',
      'Understands cause and effect in social situations',
      'This shows growing social awareness',
    ],
    milestoneImportance: 'critical',
    complexity: 'moderate',
    variability: 'low',
    category: 'social-interaction',
  },

  {
    id: 'se-005',
    name: 'Distinguishes Familiar from Strangers',
    description: 'Shows awareness of difference between familiar people and strangers',
    domain: 'social-emotional',
    ageRange: { min: 6, max: 8, typical: 6 },
    prerequisites: ['se-003'],
    tips: [
      'May stare longer at unfamiliar faces',
      'This is cognitive and social development',
      'Precursor to stranger anxiety',
    ],
    milestoneImportance: 'standard',
    complexity: 'moderate',
    variability: 'moderate',
    category: 'attachment',
  },

  {
    id: 'se-006',
    name: 'Stranger Anxiety',
    description: 'Shows wariness or distress around unfamiliar people',
    domain: 'social-emotional',
    ageRange: { min: 6, max: 12, typical: 8 },
    prerequisites: ['se-005'],
    relatedSkills: ['cog-004'], // Object permanence helps baby understand stranger is "not mama"
    tips: [
      'This is actually a positive sign of healthy attachment!',
      'May cry when held by strangers',
      'Usually peaks around 8-10 months',
      'Give baby time to warm up to new people',
    ],
    milestoneImportance: 'standard',
    complexity: 'moderate',
    variability: 'high',
    category: 'attachment',
  },

  {
    id: 'se-007',
    name: 'Separation Anxiety',
    description: 'Shows distress when primary caregiver leaves',
    domain: 'social-emotional',
    ageRange: { min: 8, max: 15, typical: 10 },
    prerequisites: ['se-006'],
    relatedSkills: ['cog-004'], // Requires object permanence - knows you exist when gone!
    tips: [
      'This shows strong, healthy attachment',
      'Result of developing object permanence',
      'Usually peaks 10-18 months',
      'Practice short separations',
      'Always say goodbye - don\'t sneak away',
    ],
    milestoneImportance: 'standard',
    complexity: 'complex', // Requires object permanence + attachment
    variability: 'high',
    clinicalNotes: 'Caused by object permanence - baby knows you exist when you\'re gone',
    category: 'attachment',
  },

  // SELF-SOOTHING AND REGULATION

  {
    id: 'se-008',
    name: 'Calms When Picked Up',
    description: 'Stops crying when held or comforted by caregiver',
    domain: 'social-emotional',
    ageRange: { min: 0, max: 3, typical: 1 },
    prerequisites: [],
    tips: [
      'This shows baby is learning you provide comfort',
      'Foundation for attachment',
      'Respond to cries - you can\'t spoil a newborn',
    ],
    milestoneImportance: 'foundational',
    complexity: 'simple',
    variability: 'low',
    category: 'self-regulation',
  },

  {
    id: 'se-009',
    name: 'Brings Hands to Mouth',
    description: 'Sucks on fingers or thumb for self-soothing',
    domain: 'social-emotional',
    ageRange: { min: 2, max: 4, typical: 3 },
    prerequisites: [],
    relatedSkills: ['fm-002'], // Also a fine motor skill
    tips: [
      'This is healthy self-soothing behavior',
      'Shows baby is learning to regulate emotions',
      'May use thumb, fingers, or pacifier',
    ],
    milestoneImportance: 'standard',
    complexity: 'simple',
    variability: 'low',
    category: 'self-regulation',
  },

  {
    id: 'se-010',
    name: 'Self-Soothing Begins',
    description: 'Can sometimes calm self without help (though still often needs help)',
    domain: 'social-emotional',
    ageRange: { min: 3, max: 6, typical: 4 },
    prerequisites: ['se-008', 'se-009'],
    tips: [
      'May suck thumb, look at hands, rock',
      'Don\'t expect constant self-soothing yet',
      'This skill develops gradually',
    ],
    milestoneImportance: 'standard',
    complexity: 'moderate',
    variability: 'high',
    category: 'self-regulation',
  },

  {
    id: 'se-011',
    name: 'Attachment to Object',
    description: 'Shows preference for specific lovey, blanket, or stuffed animal',
    domain: 'social-emotional',
    ageRange: { min: 6, max: 12, typical: 9 },
    prerequisites: ['se-010'],
    relatedSkills: ['cog-004'], // Object permanence helps
    tips: [
      'This is called a "transitional object"',
      'Actually a positive sign of independence',
      'Have a backup if possible!',
      'Shows baby can seek comfort beyond parent',
    ],
    milestoneImportance: 'standard',
    complexity: 'moderate',
    variability: 'high',
    category: 'self-regulation',
  },

  // SOCIAL INTERACTION AND PLAY

  {
    id: 'se-012',
    name: 'Enjoys Peek-a-Boo',
    description: 'Laughs and enjoys peek-a-boo games',
    domain: 'social-emotional',
    ageRange: { min: 6, max: 9, typical: 7 },
    prerequisites: ['se-004'],
    relatedSkills: ['cog-003'], // Early object permanence
    tips: [
      'This is social play and learning combined',
      'Practices object permanence concepts',
      'Take turns hiding your face and baby\'s',
    ],
    milestoneImportance: 'standard',
    complexity: 'moderate',
    variability: 'moderate',
    category: 'social-play',
  },

  {
    id: 'se-013',
    name: 'Plays Social Games',
    description: 'Engages in simple games like pat-a-cake, so-big',
    domain: 'social-emotional',
    ageRange: { min: 9, max: 12, typical: 10 },
    prerequisites: ['se-012'],
    relatedSkills: ['cog-010'], // Imitation
    tips: [
      'Baby is learning social routines',
      'May try to initiate games',
      'This builds social skills and turn-taking',
    ],
    milestoneImportance: 'standard',
    complexity: 'moderate',
    variability: 'moderate',
    category: 'social-play',
  },

  {
    id: 'se-014',
    name: 'Solitary Play',
    description: 'Plays alone, absorbed in own activity, unaware of other children',
    domain: 'social-emotional',
    ageRange: { min: 0, max: 24, typical: 12 },
    prerequisites: [],
    tips: [
      'This is typical for infants and young toddlers',
      'Not antisocial - developmentally appropriate',
      'Parallel play comes next',
    ],
    milestoneImportance: 'standard',
    complexity: 'simple',
    variability: 'low',
    category: 'play-stages',
  },

  {
    id: 'se-015',
    name: 'Onlooker Play',
    description: 'Watches other children play with interest but doesn\'t join',
    domain: 'social-emotional',
    ageRange: { min: 12, max: 24, typical: 18 },
    prerequisites: ['se-014'],
    tips: [
      'Baby is learning by watching',
      'Shows social interest developing',
      'Will progress to parallel play',
    ],
    milestoneImportance: 'standard',
    complexity: 'simple',
    variability: 'moderate',
    category: 'play-stages',
  },

  {
    id: 'se-016',
    name: 'Parallel Play',
    description: 'Plays alongside other children, may imitate, but no real interaction',
    domain: 'social-emotional',
    ageRange: { min: 24, max: 36, typical: 27 },
    prerequisites: ['se-015'],
    tips: [
      'Plays near other kids with similar toys',
      'May copy what other child does',
      'This is normal toddler social behavior',
      'Not ready for true cooperative play yet',
    ],
    milestoneImportance: 'standard',
    complexity: 'moderate',
    variability: 'moderate',
    category: 'play-stages',
  },

  {
    id: 'se-017',
    name: 'Associative Play',
    description: 'Interacts with other children, but play not organized (no shared goal)',
    domain: 'social-emotional',
    ageRange: { min: 36, max: 48, typical: 42 },
    prerequisites: ['se-016'],
    tips: [
      'Talks to other kids, shares toys',
      'But not working toward common goal yet',
      'Transition toward cooperative play',
    ],
    milestoneImportance: 'standard',
    complexity: 'moderate',
    variability: 'moderate',
    category: 'play-stages',
  },

  {
    id: 'se-018',
    name: 'Cooperative Play',
    description: 'Plays with others toward shared goal with assigned roles',
    domain: 'social-emotional',
    ageRange: { min: 42, max: 60, typical: 48 },
    prerequisites: ['se-017'],
    tips: [
      'Builds together, acts out scenarios',
      'Highest level of social play',
      'Can take turns and follow rules',
    ],
    milestoneImportance: 'standard',
    complexity: 'complex',
    variability: 'moderate',
    category: 'play-stages',
  },

  // EMOTIONAL DEVELOPMENT

  {
    id: 'se-019',
    name: 'Shows Joy',
    description: 'Expresses happiness through smiling, laughing, squealing',
    domain: 'social-emotional',
    ageRange: { min: 3, max: 6, typical: 4 },
    prerequisites: ['se-002'],
    tips: [
      'Baby\'s first laughs are magical!',
      'Shows developing emotional range',
      'Responds to peek-a-boo, tickles, silly faces',
    ],
    milestoneImportance: 'standard',
    complexity: 'simple',
    variability: 'low',
    category: 'emotions',
  },

  {
    id: 'se-020',
    name: 'Shows Excitement',
    description: 'Gets excited when favorite person or activity appears',
    domain: 'social-emotional',
    ageRange: { min: 6, max: 9, typical: 7 },
    prerequisites: ['se-019'],
    tips: [
      'Kicks legs, waves arms, smiles big',
      'Shows anticipation and memory',
      'Recognizes favorite activities',
    ],
    milestoneImportance: 'standard',
    complexity: 'moderate',
    variability: 'moderate',
    category: 'emotions',
  },

  {
    id: 'se-021',
    name: 'Shows Frustration',
    description: 'Expresses frustration when wants aren\'t met or can\'t do something',
    domain: 'social-emotional',
    ageRange: { min: 6, max: 12, typical: 9 },
    prerequisites: [],
    tips: [
      'Healthy emotional development includes negative emotions',
      'Help baby learn to handle frustration',
      'Offer comfort and problem-solve together',
    ],
    milestoneImportance: 'standard',
    complexity: 'simple',
    variability: 'moderate',
    category: 'emotions',
  },

  {
    id: 'se-022',
    name: 'Shows Affection',
    description: 'Shows affection to familiar people (hugs, kisses, cuddles)',
    domain: 'social-emotional',
    ageRange: { min: 12, max: 24, typical: 18 },
    prerequisites: ['se-003'],
    tips: [
      'May hug stuffed animals or dolls too',
      'Shows empathy and attachment',
      'Different babies show affection differently',
    ],
    milestoneImportance: 'standard',
    complexity: 'moderate',
    variability: 'high',
    category: 'emotions',
  },

  {
    id: 'se-023',
    name: 'Notices When Others Are Hurt',
    description: 'Shows concern when another child cries or is upset',
    domain: 'social-emotional',
    ageRange: { min: 18, max: 30, typical: 24 },
    prerequisites: ['se-022'],
    tips: [
      'May look concerned, pat other child',
      'This is empathy developing',
      'Help child learn to comfort others',
    ],
    milestoneImportance: 'standard',
    complexity: 'complex',
    variability: 'high',
    category: 'empathy',
  },

  {
    id: 'se-024',
    name: 'Shows Concern for Crying Friend',
    description: 'Actively tries to comfort another child who is upset',
    domain: 'social-emotional',
    ageRange: { min: 30, max: 36, typical: 33 },
    prerequisites: ['se-023'],
    tips: [
      'May offer toy, hug, or get adult help',
      'Shows advanced empathy',
      'Praise this prosocial behavior',
    ],
    milestoneImportance: 'standard',
    complexity: 'complex',
    variability: 'high',
    category: 'empathy',
  },

  // COMMUNICATION AND GESTURES

  {
    id: 'se-025',
    name: 'Makes Eye Contact',
    description: 'Makes and maintains eye contact during interactions',
    domain: 'social-emotional',
    ageRange: { min: 0, max: 3, typical: 1 },
    prerequisites: [],
    tips: [
      'Foundation for all social communication',
      'Gets down to baby\'s level',
      'Make eye contact during feeding and play',
    ],
    milestoneImportance: 'critical',
    complexity: 'simple',
    variability: 'low',
    clinicalNotes: 'Lack of eye contact by 3-6 months warrants evaluation',
    category: 'communication',
  },

  {
    id: 'se-026',
    name: 'Responds to Name',
    description: 'Turns to look when name is called',
    domain: 'social-emotional',
    ageRange: { min: 6, max: 10, typical: 9 },
    prerequisites: ['se-025'],
    relatedSkills: ['lang-r03'], // Also language skill
    tips: [
      'Use baby\'s name often',
      'This is social awareness and language combined',
    ],
    milestoneImportance: 'critical',
    complexity: 'moderate',
    variability: 'low',
    clinicalNotes: 'Not responding to name by 12 months may warrant evaluation',
    category: 'communication',
  },

  {
    id: 'se-027',
    name: 'Uses Gestures',
    description: 'Waves bye-bye, shakes head no, reaches to be picked up',
    domain: 'social-emotional',
    ageRange: { min: 9, max: 12, typical: 10 },
    prerequisites: ['se-026'],
    tips: [
      'Gestures are important pre-language communication',
      'Model gestures for baby',
      'Respond to baby\'s gestural requests',
    ],
    milestoneImportance: 'critical',
    complexity: 'moderate',
    variability: 'moderate',
    category: 'communication',
  },

  {
    id: 'se-028',
    name: 'Points to Show Things',
    description: 'Points at objects to show you ("look at that!")',
    domain: 'social-emotional',
    ageRange: { min: 12, max: 18, typical: 15 },
    prerequisites: ['se-027'],
    relatedSkills: ['fm-013'], // Also fine motor
    tips: [
      'This is called "declarative pointing"',
      'Shows desire to share experiences with you',
      'Different from pointing to request',
    ],
    milestoneImportance: 'critical',
    complexity: 'complex',
    variability: 'moderate',
    category: 'communication',
  },

  {
    id: 'se-029',
    name: 'Imitates Peers',
    description: 'Copies actions of other children during play',
    domain: 'social-emotional',
    ageRange: { min: 12, max: 18, typical: 15 },
    prerequisites: ['se-015'],
    relatedSkills: ['cog-010'], // Imitation
    tips: [
      'Learning through watching others',
      'Shows social interest in peers',
      'Foundation for peer relationships',
    ],
    milestoneImportance: 'standard',
    complexity: 'moderate',
    variability: 'moderate',
    category: 'social-interaction',
  },

  // INDEPENDENCE

  {
    id: 'se-030',
    name: 'Wants to Help',
    description: 'Tries to help with tasks like dressing, cleaning',
    domain: 'social-emotional',
    ageRange: { min: 18, max: 24, typical: 21 },
    prerequisites: [],
    tips: [
      'Encourage this even if it makes tasks longer!',
      'Foundation for independence',
      'Praise attempts, not just results',
    ],
    milestoneImportance: 'standard',
    complexity: 'moderate',
    variability: 'moderate',
    category: 'independence',
  },

  {
    id: 'se-031',
    name: 'Shows Defiance',
    description: 'Says "no," tests boundaries, may have tantrums',
    domain: 'social-emotional',
    ageRange: { min: 18, max: 30, typical: 24 },
    prerequisites: [],
    tips: [
      'This is actually healthy - child is developing autonomy!',
      'Stay calm and set consistent limits',
      'Offer choices when possible',
      'This is normal toddler behavior',
    ],
    milestoneImportance: 'standard',
    complexity: 'moderate',
    variability: 'high',
    category: 'independence',
  },

  {
    id: 'se-032',
    name: 'Takes Turns in Games',
    description: 'Can take turns in simple games with help',
    domain: 'social-emotional',
    ageRange: { min: 30, max: 36, typical: 33 },
    prerequisites: ['se-016'],
    tips: [
      'Practice with rolling ball back and forth',
      'This is hard for toddlers - keep it simple',
      'Builds social skills',
    ],
    milestoneImportance: 'standard',
    complexity: 'complex',
    variability: 'moderate',
    category: 'social-interaction',
  },
];
