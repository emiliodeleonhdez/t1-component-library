import React from "react";
import clsx from "clsx";

type BorderStyle = "default" | "outlined" | "dashed" | "none";
type CardSize = "sm" | "md" | "lg";

interface CardProps {
  imageSrc?: string;
  imageAlt?: string;
  title?: string;
  subTitle?: string;
  body?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  borderStyle?: BorderStyle;
  size?: CardSize;
}

const sizeClasses: Record<CardSize, string> = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-3xl",
};

const borderClasses: Record<BorderStyle, string> = {
  default: "border border-gray-200",
  outlined: "border-2 border-brand-primary",
  dashed: "border-2 border-dashed border-gray-400",
  none: "border-none",
};

const Card: React.FC<CardProps> = ({
  imageSrc,
  imageAlt = "Card image",
  title,
  subTitle,
  body,
  footer,
  className,
  borderStyle = "default",
  size = "md",
}) => {
  return (
    <div
      className={clsx(
        "bg-white rounded-xl shadow-sm overflow-hidden",
        borderClasses[borderStyle],
        sizeClasses[size],
        className
      )}
    >
      {imageSrc && (
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-48 object-cover"
        />
      )}

      <div className="p-6 flex flex-col gap-4">
        {title && <h2 className="text-2xl font-bold">{title}</h2>}
        {subTitle && <h2 className="text-xl">{subTitle}</h2>}

        {body && <div>{body}</div>}
        {footer && (
          <div className="pt-4 border-t border-gray-400">{footer}</div>
        )}
      </div>
    </div>
  );
};

export default Card;
