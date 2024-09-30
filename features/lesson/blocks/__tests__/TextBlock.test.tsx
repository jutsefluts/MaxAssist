// features/lesson/blocks/__tests__/TextBlock.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TextBlock from '../TextBlock/TextBlock';
import '@testing-library/jest-dom';

describe('TextBlock Component', () => {
  const mockMoveUp = jest.fn();
  const mockMoveDown = jest.fn();
  const mockRemove = jest.fn();

  beforeEach(() => {
    render(
      <TextBlock onMoveUp={mockMoveUp} onMoveDown={mockMoveDown} onRemove={mockRemove} />
    );
  });

  it('renders the editor and shows character count', () => {
    // Check if the editor is rendered
    expect(screen.getByText('Character count: 0')).toBeInTheDocument();

    // Simulate typing into the editor (this will not trigger without mocking draft-js interaction)
    // For a real interaction, you might need to mock draft-js's EditorState.
  });

  it('opens the modal when "Add Link" button is clicked', () => {
    // Click the "Add Link" button
    const addLinkButton = screen.getByText('Add Link');
    fireEvent.click(addLinkButton);

    // Check if the modal is displayed
    expect(screen.getByText('Add Link or File')).toBeInTheDocument();
  });

  it('handles Move Up, Move Down, and Remove buttons', () => {
    // Check Move Up
    const moveUpButton = screen.getByText('Move Up');
    fireEvent.click(moveUpButton);
    expect(mockMoveUp).toHaveBeenCalled();

    // Check Move Down
    const moveDownButton = screen.getByText('Move Down');
    fireEvent.click(moveDownButton);
    expect(mockMoveDown).toHaveBeenCalled();

    // Check Remove
    const removeButton = screen.getByText('Remove');
    fireEvent.click(removeButton);
    expect(mockRemove).toHaveBeenCalled();
  });
});