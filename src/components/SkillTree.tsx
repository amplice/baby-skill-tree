import { useCallback, useMemo, useState, useEffect } from 'react';
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
} from 'reactflow';
import type { NodeTypes, Node } from 'reactflow';
import 'reactflow/dist/style.css';

import SkillNode from './SkillNode';
import SkillDetail from './SkillDetail';
import SkillList from './SkillList';
import { createSkillTree } from '../utils/skillTreeLayout';
import { useProgressStore } from '../store/progressStore';
import type { Skill } from '../types';

interface SkillTreeProps {
  skills: Skill[];
}

const nodeTypes: NodeTypes = {
  skillNode: SkillNode,
};

const SkillTree = ({ skills }: SkillTreeProps) => {
  const getSkillStatus = useProgressStore((state) => state.getSkillStatus);
  const skillProgress = useProgressStore((state) => state.skillProgress);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Generate nodes and edges - re-generate when skill progress changes
  const { nodes: initialNodes, edges: initialEdges } = useMemo(
    () => createSkillTree(skills, getSkillStatus),
    [skills, getSkillStatus, skillProgress] // Add skillProgress to trigger updates
  );

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  // Update nodes when initialNodes change
  useEffect(() => {
    setNodes(initialNodes);
  }, [initialNodes, setNodes]);

  // Handle node click to show details
  const onNodeClick = useCallback((_event: React.MouseEvent, node: Node) => {
    const skill = skills.find((s) => s.id === node.id);
    if (skill) {
      setSelectedSkill(skill);
    }
  }, [skills]);

  const handleCloseDetail = () => {
    setSelectedSkill(null);
  };

  const handleSkillClick = (skill: Skill) => {
    setSelectedSkill(skill);
  };

  // Calculate initial viewport to focus on earliest skills or user's current progress
  const initialViewport = useMemo(() => {
    // Find first available skill, or fallback to earliest skill
    const availableNode = nodes.find(n => n.data.status === 'available');
    const targetNode = availableNode || nodes[0];

    if (targetNode) {
      return {
        x: -targetNode.position.x + 200, // Offset to center
        y: -targetNode.position.y + 100,
        zoom: 1.2, // More zoomed in
      };
    }

    return { x: 200, y: 100, zoom: 1.2 };
  }, [nodes]);

  // Render mobile list view on small screens
  if (isMobile) {
    return (
      <div className="relative w-full h-full">
        <SkillList skills={skills} onSkillClick={handleSkillClick} />

        {/* Skill detail panel */}
        {selectedSkill && (
          <SkillDetail skill={selectedSkill} onClose={handleCloseDetail} />
        )}
      </div>
    );
  }

  // Render tree view on desktop
  return (
    <div className="relative w-full h-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClick}
        nodeTypes={nodeTypes}
        fitView={false}
        minZoom={0.1}
        maxZoom={1.5}
        defaultViewport={initialViewport}
      >
        <Background color="#e5e7eb" gap={16} />
        <Controls />
        <MiniMap
          nodeColor={(node) => {
            const skill = node.data as any;
            switch (skill.status) {
              case 'mastered':
                return '#22c55e';
              case 'available':
                return '#dbeafe';
              default:
                return '#e5e7eb';
            }
          }}
          maskColor="rgba(0, 0, 0, 0.1)"
        />
      </ReactFlow>

      {/* Skill detail panel */}
      {selectedSkill && (
        <SkillDetail skill={selectedSkill} onClose={handleCloseDetail} />
      )}
    </div>
  );
};

export default SkillTree;
