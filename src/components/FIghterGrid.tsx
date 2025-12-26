// src/app/components/FighterGrid.tsx

import SubmitButton from "./SubmitButton";

export default function FighterGrid() {
  const fighters = [
    { name: "Fighter 1", revealed: false, interactive: true },
    { name: "Fighter 2", revealed: false, interactive: true },
    { name: "Fighter 3", revealed: false, interactive: false },
    { name: "Fighter 4", revealed: false, interactive: false },
    { name: "Fighter 5", revealed: false, interactive: false },
    { name: "Fighter 6", revealed: false, interactive: false },
    { name: "Fighter 7", revealed: false, interactive: false },
    { name: "Fighter 8", revealed: false, interactive: false },
    { name: "Fighter 9", revealed: true, interactive: false },
    { name: "Fighter 10", revealed: true, interactive: false },
  ];

  return (
    <>
      <div className="mt-10 mb-5 grid grid-cols-2 gap-4">
        {fighters.map((fighter, i) => (
          <div
            key={i}
            className={`relative ${
              fighter.interactive ? "cursor-pointer hover:opacity-80" : ""
            }`}
          >
            <img src="/bout-box.svg" alt="Card" className="w-full" />

            <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">
              {fighter.revealed ? fighter.name : "???"}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mb-20">
        <SubmitButton />
      </div>
    </>
  );
}
