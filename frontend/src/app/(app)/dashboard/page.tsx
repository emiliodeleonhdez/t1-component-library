"use client";
import { Button, Variant } from "@/app/components/atoms/Button/Button";
import { Input } from "@/app/components/atoms/Input/Input";
import { Modal } from "@/app/components/atoms/Modal/Modal";
import api from "@/app/lib/axios";
import { useEffect, useState } from "react";

const trackedComponents = [
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
  const [buttonStats, setButtonStats] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const handleTrack = async (tracking: any) => {
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

  const stats = Object.values(
    buttonStats.reduce((acc: any, curr: any) => {
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
    }, {})
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
                  variant={component.props.variant as Variant}
                >
                  <p>{component.props.children}</p>
                </Button>
              );
            case "input":
              return (
                <Input
                  label={component.props.label}
                  key={index}
                  onFocus={() => handleTrack(component.tracking)}
                />
              );
            case "modal":
              return (
                <>
                  <Button
                    onClick={() => {
                      setOpenModal(true);
                      handleTrack(component.tracking);
                    }}
                  >
                    <span>Open Modal</span>
                  </Button>
                  <Modal
                    key={index}
                    isOpen={openModal}
                    onClose={() => setOpenModal(false)}
                    title={component.props.title}
                  >
                    <p>Modal Body</p>
                  </Modal>
                </>
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
          {stats.map((stat: any, idx: number) => (
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
