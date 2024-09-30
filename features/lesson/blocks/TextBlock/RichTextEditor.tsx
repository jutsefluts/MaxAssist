import React from 'react';
import dynamic from 'next/dynamic';
import { EditorState } from 'draft-js';
import { EditorProps } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const Editor = dynamic<EditorProps>(() => import('react-draft-wysiwyg').then(mod => mod.Editor), { ssr: false });

interface RichTextEditorProps {
  editorState: EditorState;
  onEditorStateChange: (state: EditorState) => void;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({ editorState, onEditorStateChange }) => {
  const handleEditorChange = (state: EditorState) => {
    onEditorStateChange(state);
  };

  return (
    <div className="rich-text-editor-container">
      <Editor
        editorState={editorState}
        onEditorStateChange={handleEditorChange}
        toolbar={{
          options: ['inline', 'blockType', 'list'], // Removed 'link' options
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