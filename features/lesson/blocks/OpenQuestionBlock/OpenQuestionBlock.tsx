"use client";

import React, { useState } from 'react';
import BlockActionButtons from '../../../../components/BlockActionButtons';

interface OpenQuestionBlockProps {
  onMoveUp: () => void;
  onMoveDown: () => void;
  onRemove: () => void;
  blockId: string; // Add blockId to ensure unique form field IDs
}

const OpenQuestionBlock: React.FC<OpenQuestionBlockProps> = ({
  onMoveUp,
  onMoveDown,
  onRemove,
  blockId,  // blockId will be passed to this component
}) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  return (
    <div className="open-question-block">
      <div className="question-section">
        {/* Generate a unique id using blockId */}
        <label htmlFor={`open-question-${blockId}`}>Question:</label>
        <input
          type="text"
          id={`open-question-${blockId}`}  // Unique id for the question input
          name={`open-question-${blockId}`} // Unique name using blockId
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mt-4">
        {/* Generate a unique id using blockId */}
        <label htmlFor={`open-answer-${blockId}`}>Answer:</label>
        <input
          type="text"
          id={`open-answer-${blockId}`}  // Unique id for the answer input
          name={`open-answer-${blockId}`} // Unique name using blockId
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Block action buttons */}
      <BlockActionButtons 
        onMoveUp={onMoveUp} 
        onMoveDown={onMoveDown} 
        onRemove={onRemove} 
      />
    </div>
  );
};

export default OpenQuestionBlock;