import React from "react";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "danger" | "warning";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const getVariantClasses = (
  variant: Variant,
  isDisabled: boolean | undefined
) => {
  const base = {
    primary: "bg-brand-primary text-white",
    secondary: "bg-brand-surface text-white",
    danger: "bg-red-600 text-white",
    warning: "bg-yellow-400 text-white",
  }[variant];

  const hover = {
    primary: "hover:bg-brand-secondary",
    secondary: "hover:bg-brand-secondary",
    danger: "hover:bg-red-700",
    warning: "hover:bg-yellow-500",
  }[variant];

  return isDisabled ? base : `${base} ${hover}`;
};

const sizeClasses: Record<Size, string> = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4 text-base",
  lg: "h-12 px-5 text-lg",
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "sm",
  loading = false,
  icon,
  disabled,
  children,
  className,
  ...props
}) => {
  const isDisabled = loading || disabled;

  return (
    <button
      className={clsx(
        "flex items-center justify-center gap-2 rounded-md transition-all",
        getVariantClasses(variant, isDisabled),
        sizeClasses[size],
        {
          "opacity-50 cursor-not-allowed": isDisabled,
          "cursor-pointer": !isDisabled,
        },
        className
      )}
      disabled={isDisabled}
      {...props}
    >
      {loading ? (
        <span className="animate-pulse">Loading...</span>
      ) : (
        <>
          {icon && <span className="text-lg btn-icon">{icon}</span>}
          <span>{children}</span>
        </>
      )}
    </button>
  );
};
