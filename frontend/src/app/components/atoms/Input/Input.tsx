import clsx from "clsx";
import React from "react";

type InputState = "default" | "error" | "success";
type InputType = "text" | "email" | "password";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  state?: InputState;
  inputType?: InputType;
  placeHolder?: string;
  helperText?: string;
  disabled?: boolean;
}

const getStateClasses = (state: InputState, isDisabled?: boolean) => {
  const base = "border transition-colors outline-none";

  const stateColors = {
    default: "border-gray-300 focus:border-brand-primary",
    error: "border-red-500 focus:border-red-600",
    success: "border-green-500 focus:border-green-600",
  };

  const disabledStyles = "bg-gray-100 text-gray-400 cursor-not-allowed";

  return isDisabled
    ? `${base} ${disabledStyles}`
    : `${base} ${stateColors[state] ?? stateColors.default}`;
};

const getHelperTextClasses = (state: InputState) => {
  const base = "text-sm font-medium";
  const helperText = {
    default: "text-gray-700",
    error: "text-red-700",
    success: "text-green-700",
  };

  return `${base} ${helperText[state] ?? helperText.default}`;
};

export const Input: React.FC<InputProps> = ({
  label,
  state = "default",
  inputType = "text",
  placeHolder,
  helperText,
  disabled = false,
  ...props
}) => {
  const uniqueId = `${Math.random().toString(36).substring(2, 9)}`;
  return (
    <div className="input-container flex flex-col gap-2">
      {label && (
        <label className="font-bold" htmlFor={inputType}>
          {label}
        </label>
      )}

      <input
        autoComplete="off"
        id={inputType + "-" + uniqueId}
        disabled={disabled}
        className={clsx("rounded p-2 w-full", getStateClasses(state, disabled))}
        placeholder={placeHolder}
        type={inputType}
        {...props}
      />
      {helperText && (
        <p className={getHelperTextClasses(state)}>{helperText}</p>
      )}
    </div>
  );
};
