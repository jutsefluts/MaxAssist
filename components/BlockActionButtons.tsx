import React from 'react';

type BlockActionButtonsProps = {
  onMoveUp: () => void;
  onMoveDown: () => void;
  onRemove: () => void;
};

const BlockActionButtons: React.FC<BlockActionButtonsProps> = ({
  onMoveUp,
  onMoveDown,
  onRemove,
}) => {
  return (
    <div className="block-buttons-right">
      <button onClick={onMoveUp} className="action-button move-up">
        ▲
      </button>
      <button onClick={onRemove} className="action-button remove-button">
        ✖
      </button>
      <button onClick={onMoveDown} className="action-button move-down">
        ▼
      </button>
    </div>
  );
};

export default BlockActionButtons;
