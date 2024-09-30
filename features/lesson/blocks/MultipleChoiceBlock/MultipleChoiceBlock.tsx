"use client";

import React, { useState } from 'react';
import BlockActionButtons from '../../../../components/BlockActionButtons';  // Import BlockActionButtons

interface MultipleChoiceBlockProps {
  onMoveUp: () => void;
  onMoveDown: () => void;
  onRemove: () => void;
}

const MultipleChoiceBlock: React.FC<MultipleChoiceBlockProps> = ({
  onMoveUp,
  onRemove,
  onMoveDown,
}) => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['']);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState<number | null>(null);

  const addOption = () => setOptions([...options, '']);
  const handleOptionChange = (index: number, value: string) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  return (
    <div className="multiple-choice-block">
      <div className="question-section">
        <label htmlFor="question">Question:</label>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
      </div>

      <div className="options-section">
      <label htmlFor="options">Options:</label>
        {options.map((option, index) => (
          <div key={index}>
            <input
              type="text"
              value={option}
              onChange={(e) => handleOptionChange(index, e.target.value)}
            />
            <input
              type="radio"
              name="correctAnswer"
              checked={correctAnswerIndex === index}
              onChange={() => setCorrectAnswerIndex(index)}
            />
          </div>
        ))}
        <button onClick={addOption} className="add-option-button">Add Option</button>
      </div>

      {/* Block action buttons integrated inside the multiple-choice-block */}
      <BlockActionButtons 
        onMoveUp={onMoveUp} 
        onMoveDown={onMoveDown} 
        onRemove={onRemove} 
      />
    </div>
  );
};

export default MultipleChoiceBlock;
