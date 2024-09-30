"use client";

import React, { useState } from 'react';
import BlockActionButtons from '../../../../components/BlockActionButtons';  // Import BlockActionButtons

interface OpenQuestionBlockProps {
  onMoveUp: () => void;
  onMoveDown: () => void;
  onRemove: () => void;
}

const OpenQuestionBlock: React.FC<OpenQuestionBlockProps> = ({
  onMoveUp,
  onMoveDown,
  onRemove,
}) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  return (
    <div className="open-question-block">
      <div className="question-section">
        <label>Question:</label>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mt-4">
        <label>Answer:</label>
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Block action buttons integrated inside the open-question-block */}
      <BlockActionButtons 
        onMoveUp={onMoveUp} 
        onMoveDown={onMoveDown} 
        onRemove={onRemove} 
      />
    </div>
  );
};

export default OpenQuestionBlock;
