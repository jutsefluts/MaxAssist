import React from 'react';

interface QuestionGeneratorProps {
  onGenerateMultipleChoice: () => void;
  onGenerateOpenQuestion: () => void;
}

const QuestionGenerator: React.FC<QuestionGeneratorProps> = ({ onGenerateMultipleChoice, onGenerateOpenQuestion }) => {
  return (
    <div className="question-generator-container">
      <button onClick={onGenerateMultipleChoice} className="textblock-button">Generate Multiple Choice</button>
      <button onClick={onGenerateOpenQuestion} className="textblock-button">Generate Open Question</button>
    </div>
  );
};

export default QuestionGenerator;
