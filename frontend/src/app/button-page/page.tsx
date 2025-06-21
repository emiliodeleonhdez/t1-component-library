import { Button } from "../components/atoms/Button/Button";
import { Coffee, Home, ShieldAlert, TriangleAlert } from "lucide-react";
export default function ButtonPage() {
  return (
    <div className="flex flex-col gap-6 py-6">
      <h2 className="font-bold text-3xl">Button</h2>
      <h3 className="font-bold text-xl">Standard Buttons</h3>
      <div className="flex flex-wrap gap-4">
        <Button variant="primary">Primary button</Button>
        <Button variant="secondary">Secondary button</Button>
        <Button variant="danger">Danger button</Button>
        <Button variant="warning">Warning button</Button>
      </div>
      <h3 className="font-bold text-xl">State Buttons</h3>
      <div className="flex flex-wrap gap-4">
        <Button variant="primary">Default</Button>
        <Button variant="primary" loading={true}>
          Loading...
        </Button>
        <Button variant="secondary" disabled={true}>
          Disabled
        </Button>
      </div>
      <h3 className="font-bold text-xl">Buttons with icons</h3>
      <div className="flex flex-wrap gap-4">
        <Button variant="primary" icon={<Home />}>
          Home
        </Button>
        <Button variant="secondary" icon={<Coffee />}>
          Coffee
        </Button>
        <Button variant="danger" icon={<ShieldAlert />}>
          Danger button
        </Button>
        <Button variant="warning" icon={<TriangleAlert />}>
          Alert
        </Button>
      </div>
    </div>
  );
}
