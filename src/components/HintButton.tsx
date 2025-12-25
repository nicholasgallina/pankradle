"use client";
import { useState } from "react";

// src/app/components/HintButton.tsx
export default function HintButton() {
  const [showHint, setShowHint] = useState(false);

  return (
    <>
      <button onClick={() => setShowHint(true)}>
        <img
          className="hover:scale-110 hover:opacity-85 hover:brightness-105 transition-all duration-200 cursor-pointer"
          src="/icons/hint-button.svg"
          alt="Hint"
        />
      </button>

      {showHint && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative animate-scaleIn">
            <img src="/sample-hint.svg" alt="Hint card" />

            <button
              onClick={() => setShowHint(false)}
              className="absolute top-4 right-4 cursor-pointer hover:scale-110 hover:opacity-70 transition-all"
            >
              <img src="/icons/exit-button.svg" alt="Close" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
