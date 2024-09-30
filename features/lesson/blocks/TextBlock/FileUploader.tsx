import React, { useState } from 'react';

interface FileUploaderProps {
  onFileUpload: (file: File | null) => void;
  onFileLinkAdd: (fileURL: string) => void;
  onFileLinkRemove: () => void; // <-- Add a new prop to remove the link when the file is removed
  isTextSelected: boolean;
}

const FileUploader: React.FC<FileUploaderProps> = ({ onFileUpload, onFileLinkAdd, onFileLinkRemove, isTextSelected }) => {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setFileName(file.name);
      onFileUpload(file); // Send file to parent component
      onFileLinkAdd(fileUrl); // Attach the file URL as a link to the selected text
    }
  };

  const handleRemoveFile = () => {
    setFileName(null);
    onFileUpload(null); // Reset file
    onFileLinkRemove(); // Remove the link from the editor text
  };

  const handleAttachFileClick = () => {
    if (!isTextSelected) {
      alert('Please select text before uploading a file.');
    } else {
      document.getElementById('file-upload')?.click();
    }
  };

  return (
    <div className="upload-preview-container">
      {fileName ? (
        <>
          <p className="file-preview">{fileName}</p>
          <button onClick={handleRemoveFile} className="textblock-button-remove">
            Remove File
          </button>
        </>
      ) : (
        <>
          <button onClick={handleAttachFileClick} className="textblock-button">
            Attach File
          </button>
          <input
            type="file"
            id="file-upload"
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
        </>
      )}
    </div>
  );
};

export default FileUploader;