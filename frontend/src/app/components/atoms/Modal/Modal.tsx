import React from "react";
import clsx from "clsx";

type ModalSize = "sm" | "md" | "lg";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: ModalSize;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

const sizeClasses: Record<ModalSize, string> = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-3xl",
};

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  size = "md",
  children,
  footer,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div
        className={clsx(
          "bg-white rounded-lg shadow-lg w-full mx-4",
          sizeClasses[size]
        )}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-bold">{title}</h2>
          <button
            onClick={onClose}
            className="modal-close-btn text-gray-500 hover:text-black text-xl"
          >
            &times;
          </button>
        </div>

        <div className="p-4">{children}</div>

        {footer && <div className="p-4 border-t">{footer}</div>}
      </div>
    </div>
  );
};
