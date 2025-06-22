"use client";
import { Modal } from "@/app/components/atoms/Modal/Modal";
import { useState } from "react";

export default function ModalPage() {
  const [openSmall, setOpenSmall] = useState(false);
  const [openMedium, setOpenMedium] = useState(false);
  const [openLarge, setOpenLarge] = useState(false);

  return (
    <section className="flex flex-col gap-6 py-6">
      <h2 className="font-bold text-3xl">Modal Component</h2>
      <h3 className="font-bold text-xl">Modal Sizes</h3>
      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => setOpenSmall(true)}
          className="bg-brand-primary text-white px-4 py-2 rounded"
        >
          Open Small Modal
        </button>
        <button
          onClick={() => setOpenMedium(true)}
          className="bg-brand-primary text-white px-4 py-2 rounded"
        >
          Open Medium Modal
        </button>
        <button
          onClick={() => setOpenLarge(true)}
          className="bg-brand-primary text-white px-4 py-2 rounded"
        >
          Open Large Modal
        </button>
      </div>
      <Modal
        isOpen={openSmall}
        onClose={() => setOpenSmall(false)}
        title="Small Modal"
        size="sm"
        footer={
          <div className="flex justify-end gap-2">
            <button
              onClick={() => setOpenSmall(false)}
              className="text-sm text-gray-500"
            >
              Cancel
            </button>
            <button className="bg-blue-500 text-white px-4 py-1 rounded">
              Confirm
            </button>
          </div>
        }
      >
        <p>This is a small modal.</p>
      </Modal>
      <Modal
        isOpen={openMedium}
        onClose={() => setOpenMedium(false)}
        title="Medium Modal"
        size="md"
        footer={
          <div className="flex justify-end gap-2">
            <button
              onClick={() => setOpenMedium(false)}
              className="text-sm text-gray-500"
            >
              Cancel
            </button>
            <button className="bg-blue-500 text-white px-4 py-1 rounded">
              Confirm
            </button>
          </div>
        }
      >
        <p>This is a medium modal.</p>
      </Modal>
      <Modal
        isOpen={openLarge}
        onClose={() => setOpenLarge(false)}
        title="Large Modal"
        size="lg"
        footer={
          <div className="flex justify-end gap-2">
            <button
              onClick={() => setOpenLarge(false)}
              className="text-sm text-gray-500"
            >
              Cancel
            </button>
            <button className="bg-blue-500 text-white px-4 py-1 rounded">
              Confirm
            </button>
          </div>
        }
      >
        <p>This is a large modal.</p>
      </Modal>
    </section>
  );
}
