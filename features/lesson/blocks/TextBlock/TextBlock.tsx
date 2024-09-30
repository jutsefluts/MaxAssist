"use client";

import React, { useState } from 'react';
import ImageUploader from './ImageUploader';
import RichTextEditor from './RichTextEditor';
import FileUploader from './FileUploader';
import BlockActionButtons from '../../../../components/BlockActionButtons';
import { EditorState, Modifier, RichUtils } from 'draft-js';

interface TextBlockProps {
  onMoveUp: () => void;
  onMoveDown: () => void;
  onRemove: () => void;
}

const TextBlock: React.FC<TextBlockProps> = ({ onMoveUp, onMoveDown, onRemove }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  // Function to add a file link
  const handleFileLinkAdd = (fileURL: string) => {
    const selection = editorState.getSelection();

    // Check if text is selected
    if (!selection.isCollapsed()) {
      const contentState = editorState.getCurrentContent();
      const contentStateWithEntity = contentState.createEntity('LINK', 'MUTABLE', { url: fileURL });
      const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
      const newContentState = Modifier.applyEntity(contentStateWithEntity, selection, entityKey);
      const newEditorState = EditorState.push(editorState, newContentState, 'apply-entity');
      setEditorState(RichUtils.toggleLink(newEditorState, selection, entityKey));
    } else {
      alert('Please select text to add a file link.');
    }
  };

  // Function to remove the file link from the text
  const handleFileLinkRemove = () => {
    const selection = editorState.getSelection();
    if (!selection.isCollapsed()) {
      setEditorState(RichUtils.toggleLink(editorState, selection, null)); // Remove link from the selected text
    }
  };

  // Function to handle file upload
  const handleFileUpload = (file: File | null) => {
    const selection = editorState.getSelection();
    if (!selection.isCollapsed()) {
      console.log('File Uploaded:', file);
    } else {
      alert('Please select text before uploading a file.');
      return; // Prevent file upload from proceeding
    }
  };

  // Check if text is selected
  const isTextSelected = !editorState.getSelection().isCollapsed();

  return (
    <div className="textblock-container">
      <ImageUploader onImageUpload={(url) => console.log('Image Uploaded:', url)} />

      {/* FileUploader for uploading and linking files */}
      <FileUploader
        onFileUpload={handleFileUpload}
        onFileLinkAdd={handleFileLinkAdd}
        onFileLinkRemove={handleFileLinkRemove}  // Pass the new file link remove function
        isTextSelected={isTextSelected}
      />

      <div className="textblock-editor-container">
        <RichTextEditor editorState={editorState} onEditorStateChange={setEditorState} />
      </div>

      {/* Block action buttons use props from the parent */}
      <BlockActionButtons 
        onMoveUp={onMoveUp} 
        onMoveDown={onMoveDown} 
        onRemove={onRemove} 
      />
    </div>
  );
};

export default TextBlock;