import React, { useState } from 'react';

interface ImageUploaderProps {
  onImageUpload: (url: string) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUpload }) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
      onImageUpload(imageUrl); // Notify parent component
    }
  };

  const handleRemoveImage = () => {
    setImagePreview(null);
    onImageUpload(''); // Notify parent component that image is removed
  };

  return (
    <div className="image-uploader-container">
      {imagePreview ? (
        <div>
          <img src={imagePreview} alt="Uploaded" className="image-tiny-preview" />
          <button onClick={handleRemoveImage} className="textblock-button-remove">
            Delete Image
          </button>
        </div>
      ) : (
        <div>
          <button onClick={() => document.getElementById('image-upload')?.click()} className="textblock-button">
            Add Image
          </button>
          <input
            type="file"
            id="image-upload"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleImageChange}
          />
        </div>
      )}
    </div>
  );
};

export default ImageUploader;