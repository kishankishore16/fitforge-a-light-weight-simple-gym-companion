'use client';

import { Check } from 'lucide-react';

export default function CongratulationsModal({
  isOpen,
  onClose,
  title = 'Congratulations!',
  message,
}) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-icon">
          <Check size={36} />
        </div>
        <h2 className="modal-title">{title}</h2>
        {message && <p className="modal-text">{message}</p>}
        <button className="btn btn-primary btn-full" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
