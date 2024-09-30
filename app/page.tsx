"use client";

import React, { useState } from 'react';
import PhaseComponent from '../features/lesson/PhaseComponent';
import { LessonBlock, LessonPhase } from '@lessonTypes/lesson';  // Ensure you have proper types imported

const Page: React.FC = () => {
  // Example data: define phases and blocks state
  const [phases, setPhases] = useState<LessonPhase[]>([
    {
      phaseName: 'Introduction',
      blocks: [] // Initially empty
    },
    {
      phaseName: 'Instruction',
      blocks: [] // Initially empty
    },
    {
      phaseName: 'Practice',
      blocks: [] // Initially empty
    },
    {
      phaseName: 'Conclusion',
      blocks: [] // Initially empty
    }
  ]);

  // Add block to a phase
  const addBlock = (phaseIndex: number, block: LessonBlock) => {
    const updatedPhases = [...phases];
    updatedPhases[phaseIndex].blocks.push(block);
    setPhases(updatedPhases);
  };

  // Remove block from a phase
  const removeBlock = (phaseIndex: number, blockIndex: number) => {
    const updatedPhases = [...phases];
    updatedPhases[phaseIndex].blocks.splice(blockIndex, 1);
    setPhases(updatedPhases);
  };

  // Move block up within a phase
  const moveBlockUp = (phaseIndex: number, blockIndex: number) => {
    if (blockIndex > 0) {
      const updatedPhases = [...phases];
      const blocks = updatedPhases[phaseIndex].blocks;
      [blocks[blockIndex - 1], blocks[blockIndex]] = [blocks[blockIndex], blocks[blockIndex - 1]];
      setPhases(updatedPhases);
    }
  };

  // Move block down within a phase
  const moveBlockDown = (phaseIndex: number, blockIndex: number) => {
    const updatedPhases = [...phases];
    const blocks = updatedPhases[phaseIndex].blocks;
    if (blockIndex < blocks.length - 1) {
      [blocks[blockIndex + 1], blocks[blockIndex]] = [blocks[blockIndex], blocks[blockIndex + 1]];
      setPhases(updatedPhases);
    }
  };

  return (
    <div>
      {phases.map((phase, index) => (
        <PhaseComponent
          key={index}
          phase={phase}
          onAddBlock={(block) => addBlock(index, block)}
          onRemoveBlock={(blockIndex) => removeBlock(index, blockIndex)}
          onMoveUp={(blockIndex) => moveBlockUp(index, blockIndex)}
          onMoveDown={(blockIndex) => moveBlockDown(index, blockIndex)}
        />
      ))}
    </div>
  );
};

export default Page;