// features/lesson/blocks/__tests__/MultipleChoiceBlock.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import MultipleChoiceBlock from '../MultipleChoiceBlock/MultipleChoiceBlock';

describe('MultipleChoiceBlock', () => {
  it('renders an empty question and one empty option', () => {
    render(
      <MultipleChoiceBlock
        onMoveUp={jest.fn()}
        onMoveDown={jest.fn()}
        onRemove={jest.fn()}
      />
    );

    // Check if the question input is rendered
    const questionInput = screen.getByLabelText('Question:');
    expect(questionInput).toBeInTheDocument();  // Make sure the input for the question is there
    
    // Check if there is one option input rendered
    const optionInputs = screen.getAllByDisplayValue('');  // Find all inputs that are empty
    expect(optionInputs).toHaveLength(2);  // We expect 2 inputs: 1 for the question and 1 for the option
  });
});
