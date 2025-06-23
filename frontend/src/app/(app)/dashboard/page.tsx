"use client";
import { Button, Variant } from "@/app/components/atoms/Button/Button";
import { Input } from "@/app/components/atoms/Input/Input";
import { Modal } from "@/app/components/atoms/Modal/Modal";
import api from "@/app/lib/axios";
import { useEffect, useState, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  size: "sm" | "md" | "lg";
  variant: Variant;
}

interface InputProps {
  label: string;
  placeHolder: string;
  inputType: string;
}

interface ModalProps {
  title: string;
  size: "sm" | "md" | "lg";
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

interface TrackingInfo {
  componentName: "Button" | "Input" | "Modal";
  variant: string;
  action: string;
}

interface StatsRecord {
  componentName: string;
  variant: string;
  action: string;
  timestamp: string;
}

interface AggregatedStat {
  componentName: string;
  variant: string;
  action: string;
  count: number;
  latest: string;
}

type TrackedComponent =
  | { type: "button"; props: ButtonProps; tracking: TrackingInfo }
  | { type: "input"; props: InputProps; tracking: TrackingInfo }
  | { type: "modal"; props: ModalProps; tracking: TrackingInfo };

const trackedComponents: TrackedComponent[] = [
  {
    type: "button",
    props: {
      children: "Track Primary Button",
      size: "md",
      variant: "danger",
    },
    tracking: {
      componentName: "Button",
      variant: "danger",
      action: "click",
    },
  },
  {
    type: "input",
    props: {
      label: "Name",
      placeHolder: "Enter your name",
      inputType: "text",
    },
    tracking: {
      componentName: "Input",
      variant: "default",
      action: "focus",
    },
  },
  {
    type: "modal",
    props: {
      title: "Example Modal",
      size: "lg",
      isOpen: true,
      onClose: () => {},
      children: <p>Modal Content</p>,
    },
    tracking: {
      componentName: "Modal",
      variant: "large",
      action: "open",
    },
  },
];

const Dashboard = () => {
  const [buttonStatsFlag, setButtonStatsFlag] = useState(false);
  const [buttonStats, setButtonStats] = useState<StatsRecord[]>([]);
  const [openModal, setOpenModal] = useState(false);

  const handleTrack = async (tracking: TrackingInfo) => {
    try {
      await api.post("/components/track", tracking);
      setButtonStatsFlag((prev) => !prev);
    } catch (err) {
      console.error("Error tracking component", err);
    }
  };

  const handleGetStats = async () => {
    try {
      const res = await api.get("/components/stats");
      setButtonStats(res.data.payload || []);
    } catch (err) {
      console.error("Error fetching stats", err);
    }
  };

  useEffect(() => {
    handleGetStats();
  }, [buttonStatsFlag]);

  const stats: AggregatedStat[] = Object.values(
    buttonStats.reduce(
      (acc: Record<string, AggregatedStat>, curr: StatsRecord) => {
        const key = `${curr.componentName}-${curr.variant}-${curr.action}`;
        if (!acc[key]) {
          acc[key] = {
            componentName: curr.componentName,
            variant: curr.variant,
            action: curr.action,
            count: 0,
            latest: curr.timestamp,
          };
        }
        acc[key].count += 1;
        if (new Date(curr.timestamp) > new Date(acc[key].latest)) {
          acc[key].latest = curr.timestamp;
        }
        return acc;
      },
      {}
    )
  );

  return (
    <section className="dashboard-container p-4">
      <section className="flex flex-wrap items-center gap-12">
        {trackedComponents.map((component, index) => {
          switch (component.type) {
            case "button":
              return (
                <Button
                  key={index}
                  onClick={() => handleTrack(component.tracking)}
                  variant={component.props.variant}
                  size={component.props.size}
                >
                  <p>{component.props.children}</p>
                </Button>
              );
            case "input":
              return (
                <Input
                  key={index}
                  label={component.props.label}
                  placeholder={component.props.placeHolder}
                  type={component.props.inputType}
                  onFocus={() => handleTrack(component.tracking)}
                />
              );
            case "modal":
              return (
                <div key={index}>
                  <Button
                    onClick={() => {
                      setOpenModal(true);
                      handleTrack(component.tracking);
                    }}
                    variant="primary"
                    size="md"
                  >
                    <span>Open Modal</span>
                  </Button>
                  <Modal
                    isOpen={openModal}
                    onClose={() => setOpenModal(false)}
                    title={component.props.title}
                    size={component.props.size}
                  >
                    {component.props.children}
                  </Modal>
                </div>
              );
            default:
              return null;
          }
        })}
      </section>

      <section className="mt-6">
        <h3 className="text-lg font-semibold mb-2">
          📊 Component Usage Statistics
        </h3>
        <ul className="flex flex-wrap gap-4">
          {stats.map((stat, idx) => (
            <li
              key={idx}
              className="border rounded p-4 shadow-sm bg-white text-gray-800"
            >
              <p>
                <strong>🧩 Component:</strong> {stat.componentName}
              </p>
              <p>
                <strong>🎨 Variant:</strong> {stat.variant}
              </p>
              <p>
                <strong>⚡ Action:</strong> {stat.action} (
                <span className="font-semibold">{stat.count}</span> times)
              </p>
              <p>
                <strong>🕒 Last used:</strong>{" "}
                {new Date(stat.latest).toLocaleString("en-US")}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default Dashboard;
