import { Input } from "../components/atoms/Input/Input";

const standardInputs = [
  {
    label: "Email",
    inputType: "email",
    placeHolder: "your@example.com",
  },
  {
    label: "Text",
    inputType: "text",
    placeHolder: "Enter your text here",
  },
  {
    label: "Password",
    inputType: "password",
    placeHolder: "password",
  },
] as const;

const stateInputs = [
  {
    label: "Email",
    inputType: "email",
    placeHolder: "your@example.com",
    state: "default" as const,
    helperText: "Default",
  },
  {
    label: "Text",
    inputType: "text",
    placeHolder: "Enter your text here",
    state: "error" as const,
    helperText: "Special characters are not allowed",
  },
  {
    label: "Password",
    inputType: "password",
    placeHolder: "password",
    state: "success" as const,
    helperText: "Valid password format",
  },
] as const;

const disabledInputs = [
  {
    label: "Email",
    inputType: "email",
    placeHolder: "your@example.com",
    helperText: "disabled",
    disabled: true,
  },
] as const;

export default function InputPage() {
  return (
    <section className="flex flex-col gap-6 py-6">
      <h2 className="font-bold text-3xl">Input Component</h2>
      <h3 className="font-bold text-xl">Standard inputs</h3>
      <div className="flex flex-wrap gap-4">
        {standardInputs.map((props, i) => (
          <Input key={`standard-${i}`} {...props} />
        ))}
      </div>

      <h3 className="font-bold text-xl">Input validation states</h3>
      <div className="flex flex-wrap gap-4">
        {stateInputs.map((props, i) => (
          <Input key={`state-${i}`} {...props} />
        ))}
      </div>

      <h3 className="font-bold text-xl">Disabled</h3>
      <div className="flex flex-wrap gap-4">
        {disabledInputs.map((props, i) => (
          <Input key={`disabled-${i}`} {...props} />
        ))}
      </div>
    </section>
  );
}
