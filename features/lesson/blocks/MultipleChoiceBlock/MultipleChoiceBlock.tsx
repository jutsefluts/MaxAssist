"use client";

import React, { useState } from 'react';
import BlockActionButtons from '../../../../components/BlockActionButtons';

interface MultipleChoiceBlockProps {
  onMoveUp: () => void;
  onMoveDown: () => void;
  onRemove: () => void;
  blockId: string; // Add blockId prop for unique identification
}

const MultipleChoiceBlock: React.FC<MultipleChoiceBlockProps> = ({
  onMoveUp,
  onMoveDown,
  onRemove,
  blockId,  // blockId will be passed to this component
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
        {/* Using blockId to ensure unique id */}
        <label htmlFor={`multiple-choice-question-${blockId}`}>Question:</label>
        <input
          type="text"
          id={`multiple-choice-question-${blockId}`}  // Unique id using blockId
          name={`multiple-choice-question-${blockId}`} // Unique name using blockId
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
      </div>

      <div className="options-section">
        {options.map((option, index) => (
          <div key={index}>
            <label htmlFor={`option-${blockId}-${index}`}>Option {index + 1}:</label>
            <input
              type="text"
              id={`option-${blockId}-${index}`}  // Unique id using blockId and index
              name={`option-${blockId}-${index}`} // Unique name using blockId and index
              value={option}
              onChange={(e) => handleOptionChange(index, e.target.value)}
            />
            <input
              type="radio"
              id={`correct-${blockId}-${index}`}  // Unique id for correct answer radio
              name={`correct-answer-${blockId}`}   // Group radios by blockId
              checked={correctAnswerIndex === index}
              onChange={() => setCorrectAnswerIndex(index)}
            />
            <label htmlFor={`correct-${blockId}-${index}`}>Correct</label>
          </div>
        ))}
        <button onClick={addOption}>Add Option</button>
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

export default MultipleChoiceBlock;
