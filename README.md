# Baby Skill Tree 🍼🌳

Track your baby's developmental milestones like leveling up in a game! A fun, interactive Progressive Web App designed for nerdy parents who want to understand early childhood development through the lens of mastery learning.

## Features

- **Interactive Skill Trees**: Visual representation of baby development across multiple domains
- **40+ Skills**: Comprehensive coverage of early childhood milestones (0-18 months)
- **Progress Tracking**: Mark skills as locked, available, in-progress, or mastered
- **Expert Tips**: Actionable advice for each skill to help support your baby's development
- **Multiple Domains**:
  - Gross Motor Skills (tummy time → rolling → sitting → crawling → walking)
  - Fine Motor Skills (reflexive grasp → voluntary grasp → pincer grip)
  - More domains coming soon (Language, Social/Emotional, Cognitive)
- **Persistent Storage**: All progress saved locally in your browser
- **Mobile-First Design**: Responsive interface that works on all devices
- **No Backend Required**: Privacy-friendly, all data stays on your device

## Philosophy

Baby Skill Tree emphasizes that early childhood development (and all learning, really) follows principles of mastery learning:

- **Prerequisites Matter**: Skills build on each other in a logical progression
- **Individual Pace**: Age ranges are guidelines, not rules - every baby develops differently
- **Mastery Over Speed**: Focus on achieving solid foundations before moving forward
- **Visibility**: Understanding the skill tree helps parents see the bigger picture

## Tech Stack

- **React 18** + **TypeScript** - Type-safe component development
- **Vite** - Lightning-fast development and builds
- **Tailwind CSS** - Modern, utility-first styling
- **React Flow** - Interactive node-based skill tree visualization
- **Zustand** - Lightweight state management with persistence
- **React Router** - Client-side routing
- **Lucide React** - Beautiful, consistent icons

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/baby-skill-tree.git

# Navigate to the project directory
cd baby-skill-tree

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Building for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## Usage

### First Time Setup

1. **Enter Baby's Information**: On first launch, you'll be prompted to enter your baby's name and birth date
2. **Choose a Domain**: Select a developmental domain (e.g., Gross Motor Skills)
3. **Explore the Tree**: View all the skills your baby will master, organized by prerequisites

### Tracking Progress

1. **Click on a Skill Node**: View detailed information, tips, and prerequisites
2. **Update Status**: Mark skills as:
   - **Locked**: Prerequisites not yet met
   - **Available**: Prerequisites met, ready to start
   - **In Progress**: Currently working on this skill
   - **Mastered**: Skill fully achieved!
3. **View Progress**: Visual indicators show your baby's journey through the skill tree

### Understanding the Skill Tree

- **Arrows**: Show prerequisite relationships between skills
- **Age Ranges**: Typical timeframes (remember: these are averages!)
- **Key Milestones**: Highlighted skills that pediatricians often check
- **Tips**: Practical advice for encouraging each skill

## Project Structure

```
baby-skill-tree/
├── src/
│   ├── components/      # React components
│   │   ├── SkillNode.tsx       # Individual skill node visualization
│   │   ├── SkillDetail.tsx     # Detailed skill information panel
│   │   └── SkillTree.tsx       # Main skill tree container
│   ├── data/           # Skill definitions
│   │   ├── grossMotorSkills.ts
│   │   ├── fineMotorSkills.ts
│   │   └── index.ts
│   ├── pages/          # Page components
│   │   ├── Home.tsx            # Landing page and baby profile setup
│   │   └── TreeView.tsx        # Skill tree view page
│   ├── store/          # State management
│   │   └── progressStore.ts    # Zustand store for progress tracking
│   ├── types/          # TypeScript types
│   │   ├── skill.ts
│   │   └── index.ts
│   ├── utils/          # Utility functions
│   │   └── skillTreeLayout.ts  # Skill tree layout algorithm
│   ├── App.tsx         # Main app component with routing
│   └── main.tsx        # Entry point
├── index.html
├── package.json
└── README.md
```

## Adding New Skills

Skills are defined in TypeScript files under `src/data/`. Each skill follows this structure:

```typescript
{
  id: 'gm-001',
  name: 'Lifts Head Briefly',
  description: 'While on tummy, baby can lift head briefly (1-2 seconds)',
  domain: 'gross-motor',
  ageRange: { min: 0, max: 2 }, // in months
  prerequisites: [], // IDs of required skills
  tips: [
    'Try tummy time for 3-5 minutes, 2-3 times per day',
    'Get down on baby\'s level to encourage them to look at you',
  ],
  milestoneImportance: 'standard', // or 'critical'
}
```

## Roadmap

- [ ] Additional domains (Language, Social/Emotional, Cognitive)
- [ ] Multiple baby profiles (for families with multiple children)
- [ ] Photo attachments for each milestone
- [ ] Export progress reports as PDF
- [ ] Share achievements with family
- [ ] Customizable skill trees
- [ ] Integration with pediatrician appointments
- [ ] Push notifications for age-appropriate skills
- [ ] PWA installation prompt
- [ ] Offline support
- [ ] Backend sync (optional cloud storage)

## Contributing

This is currently an MVP/side hustle project. Contributions, ideas, and feedback are welcome!

## Disclaimer

**Important**: This app is for educational and tracking purposes only. Developmental timelines are approximate guidelines based on typical development. Every baby is unique and develops at their own pace. Always consult with your pediatrician if you have concerns about your baby's development.

## License

MIT License - feel free to use this project for your own purposes!

## Acknowledgments

- Milestone data based on CDC, WHO, and AAP developmental guidelines
- Inspired by video game skill trees and mastery learning principles
- Built for parents, by parents who love both babies and technology

---

**Made with ❤️ for nerdy parents everywhere**
