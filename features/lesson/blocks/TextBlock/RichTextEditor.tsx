import React, { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { EditorState } from 'draft-js';
import { EditorProps } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

// Load the Editor dynamically
const Editor = dynamic<EditorProps>(() => import('react-draft-wysiwyg').then(mod => mod.Editor), { ssr: false });

interface RichTextEditorProps {
  editorState: EditorState;
  onEditorStateChange: (state: EditorState) => void;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({ editorState, onEditorStateChange }) => {
  // Use a ref to track if the component is mounted
  const isMountedRef = useRef(false);

  useEffect(() => {
    console.log('Mounting RichTextEditor...');
    isMountedRef.current = true; // Mark the component as mounted

    // Cleanup function to handle unmounting
    return () => {
      console.log('Unmounting RichTextEditor...');
      isMountedRef.current = false; // Mark the component as unmounted
    };
  }, []);

  const handleEditorChange = (state: EditorState) => {
    // Only update if the component is still mounted
    if (isMountedRef.current) {
      console.log('Editor is mounted, updating state...');
      onEditorStateChange(state);
    } else {
      console.warn('Editor is not mounted, skipping state update.');
    }
  };

  return (
    <div className="rich-text-editor-container">
      <Editor
        editorState={editorState}
        onEditorStateChange={handleEditorChange}
        toolbar={{
          options: ['inline', 'blockType', 'list'],
          inline: {
            options: ['bold', 'italic', 'underline'],
          },
          blockType: {
            options: [
              { label: 'Normal', style: 'unstyled' },
              { label: 'H1', style: 'header-one' },
              { label: 'H2', style: 'header-two' },
              { label: 'H3', style: 'header-three' },
            ],
          },
          list: {
            options: ['unordered', 'ordered'],
          },
        }}
      />
    </div>
  );
};

export default RichTextEditor;
