"use client";

import { useState } from "react";

export default function RulesButton() {
  const [showRules, setShowRules] = useState(false);

  return (
    <>
      <button onClick={() => setShowRules(true)}>
        <img
          className="hover:scale-110 hover:opacity-85 hover:brightness-105 transition-all duration-200 cursor-pointer"
          src="/icons/rules-button.svg"
        ></img>
      </button>

      {showRules && (
        <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#e5d9b8] p-8 rounded-lg shadow-2xl max-w-md w-full mx-4 relative border-4 border-[#4a3f2e] animate-scaleIn">
            <button
              onClick={() => setShowRules(false)}
              className="absolute top-4 right-4 text-3xl font-bold hover:opacity-70 cursor-pointer hover:scale-110 transition-all duration-200"
            >
              <img src="/icons/exit-button.svg"></img>
            </button>

            <h2 className="text-center text-3xl font-bold mb-4">RULES</h2>
            <p className="text-center mb-4">
              Guess the UFC PPV Main Event in four tries.
            </p>
            <p className="text-center mb-4">
              Each incorrect guess reveals the subsequent bout from today's
              mystery card.
            </p>
            <p className="text-center font-bold">Good luck!</p>
          </div>
        </div>
      )}
    </>
  );
}
