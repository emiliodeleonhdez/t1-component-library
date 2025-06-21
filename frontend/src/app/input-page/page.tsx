import { Input } from "../components/atoms/Input/Input";

export default function InputPage() {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="font-bold text-3xl">Input Component</h2>
      <h3 className="font-bold text-xl">Standard inputs</h3>
      <div className="flex flex-wrap gap-4">
        <Input label="Email" inputType="email" placeHolder="your@example.com" />
        <Input
          label="Text"
          inputType="text"
          placeHolder="Enter your text here"
        />
        <Input label="Password" inputType="password" placeHolder="password" />
      </div>
      <h3 className="font-bold text-xl">Input validation states</h3>
      <div className="flex flex-wrap gap-4">
        <Input
          state="default"
          label="Email"
          inputType="email"
          placeHolder="your@example.com"
          helperText="Default"
        />
        <Input
          state="error"
          label="Text"
          inputType="text"
          placeHolder="Enter your text here"
          helperText="Special characters are not allowed"
        />
        <Input
          state="success"
          helperText="Valid password format"
          label="Password"
          inputType="password"
          placeHolder="password"
        />
      </div>
      <h3 className="font-bold text-xl">Disabled</h3>
      <div className="flex flex-wrap gap-4">
        <Input
          helperText="disabled"
          label="Email"
          inputType="email"
          placeHolder="your@example.com"
          disabled={true}
        />
      </div>
    </section>
  );
}
