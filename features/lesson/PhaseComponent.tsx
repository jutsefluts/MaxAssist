import React from "react";
import MultipleChoiceBlock from "./blocks/MultipleChoiceBlock/MultipleChoiceBlock";
import OpenQuestionBlock from "./blocks/OpenQuestionBlock/OpenQuestionBlock";
import TextBlock from "./blocks/TextBlock/TextBlock";
import { LessonBlock, LessonPhase } from "@lessonTypes/lesson";
import { nanoid } from "nanoid"; 

interface PhaseComponentProps {
  phase: LessonPhase;
  onAddBlock: (block: LessonBlock) => void;
  onRemoveBlock: (index: number) => void;
  onMoveUp: (index: number) => void;
  onMoveDown: (index: number) => void;
}

const PhaseComponent: React.FC<PhaseComponentProps> = ({
  phase,
  onAddBlock,
  onRemoveBlock,
  onMoveUp,
  onMoveDown,
}) => {
  const handleAddBlock = (blockType: LessonBlock["type"]) => {
    let newBlock: LessonBlock;

    // Ensure the correct block shape is created based on block type
    switch (blockType) {
      case "TextBlock":
        newBlock = { id: nanoid(), type: "TextBlock", content: "", lesson_phase: phase.phaseName };
        break;
      case "OpenQuestionBlock":
        newBlock = {
          id: nanoid(),
          type: "OpenQuestionBlock",
          question: "",
          answer: "",
          lesson_phase: phase.phaseName,
        };
        break;
      case "MultipleChoiceBlock":
        newBlock = {
          id: nanoid(),
          type: "MultipleChoiceBlock",
          question: "",
          options: [],
          correctAnswers: [],
          lesson_phase: phase.phaseName,
        };
        break;
      default:
        throw new Error("Invalid block type");
    }

    onAddBlock(newBlock);
  };

  return (
    <div className="phase-container">
      <h2>{phase.phaseName}</h2>
      <div className="flex space-x-2 mb-4">
        <button onClick={() => handleAddBlock("TextBlock")} className="bg-blue-500 text-white px-3 py-2 rounded-lg">
          Add Text Block
        </button>
        <button onClick={() => handleAddBlock("OpenQuestionBlock")} className="bg-green-500 text-white px-3 py-2 rounded-lg">
          Add Open Question Block
        </button>
        <button onClick={() => handleAddBlock("MultipleChoiceBlock")} className="bg-purple-500 text-white px-3 py-2 rounded-lg">
          Add Multiple Choice Block
        </button>
      </div>

      {/* Render Blocks */}
      <div className="block-list">
        {phase.blocks.map((block: LessonBlock, index: number) => {
          const blockProps = {
            onMoveUp: () => onMoveUp(index),
            onMoveDown: () => onMoveDown(index),
            onRemove: () => onRemoveBlock(index),
            blockId: block.id, // Add blockId explicitly
            ...block,
          };

          // Handle rendering based on block type
          switch (block.type) {
            case "TextBlock":
              return <TextBlock key={block.id} {...blockProps} />;
            case "OpenQuestionBlock":
              return <OpenQuestionBlock key={block.id} {...blockProps} blockId={block.id} />;
            case "MultipleChoiceBlock":
              return <MultipleChoiceBlock key={block.id} {...blockProps} blockId={block.id} />;
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
};

export default PhaseComponent;
