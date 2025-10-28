import { useCallback, useMemo, useState } from 'react';
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
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  // Generate nodes and edges
  const { nodes: initialNodes, edges: initialEdges } = useMemo(
    () => createSkillTree(skills, getSkillStatus),
    [skills, getSkillStatus]
  );

  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

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

  return (
    <div className="relative w-full h-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClick}
        nodeTypes={nodeTypes}
        fitView
        minZoom={0.1}
        maxZoom={1.5}
        defaultViewport={{ x: 0, y: 0, zoom: 0.8 }}
      >
        <Background color="#e5e7eb" gap={16} />
        <Controls />
        <MiniMap
          nodeColor={(node) => {
            const skill = node.data as any;
            switch (skill.status) {
              case 'mastered':
                return '#22c55e';
              case 'in-progress':
                return '#0ea5e9';
              case 'available':
                return '#ffffff';
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
