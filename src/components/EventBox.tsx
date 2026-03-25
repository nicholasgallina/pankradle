"use client";

import { useState, useEffect } from "react";
import BoutBox from "./BoutBox";

type Fighter = {
  name: string;
  image: string | null;
  country: string | null;
};

type Bout = {
  id: number;
  fighter1: Fighter;
  fighter2: Fighter;
  weightClass: string;
};

type Event = {
  name: string;
  date: string;
  location: string;
  bouts: Bout[];
};

export default function EventBox() {
  const [event, setEvent] = useState<Event | null>(null);
  const [guessesUsed, setGuessesUsed] = useState(0);

  useEffect(() => {
    fetch("/api/today")
      .then((res) => res.json())
      .then((data) => setEvent(data));
  }, []);

  const [fighter1Input, setFighter1Input] = useState("");
  const [fighter2Input, setFighter2Input] = useState("");
  const [isGameOver, setIsGameOver] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  if (!event) return <p className="text-white">Loading...</p>;

  const bouts = event.bouts;
  const MAX_GUESSES = bouts.length - 1;

  // bouts[0] is the main event (hidden until guessed correctly)
  // bouts[1..n] are revealed progressively as guesses are used
  // on 0 guesses used: only bouts[4] visible (last bout on card)
  // on 1 guess wrong: bouts[3] also revealed, etc.
  const revealedFromIndex = bouts.length - 1 - guessesUsed;

  const handleSubmit = () => {
    const mainFighter1 = bouts[0].fighter1.name.toLowerCase();
    const mainFighter2 = bouts[0].fighter2.name.toLowerCase();
    const guess1 = fighter1Input.trim().toLowerCase();
    const guess2 = fighter2Input.trim().toLowerCase();

    const correct =
      (guess1 === mainFighter1 && guess2 === mainFighter2) ||
      (guess1 === mainFighter2 && guess2 === mainFighter1);

    if (correct) {
      setIsCorrect(true);
      setIsGameOver(true);
      return;
    }

    const newGuessesUsed = guessesUsed + 1;
    setGuessesUsed(newGuessesUsed);
    setFighter1Input("");
    setFighter2Input("");

    if (newGuessesUsed >= MAX_GUESSES) {
      setIsGameOver(true);
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      {/* Event metadata */}
      <h2 className="text-white font-bold text-2xl mb-1">{event.name}</h2>
      <p className="text-gray-400 text-sm mb-2">
        {event.date} · {event.location}
      </p>

      {/* Guesses remaining */}
      <p className="text-white mb-4">
        Guesses remaining:{" "}
        <span className="font-bold">{MAX_GUESSES - guessesUsed}</span>
      </p>

      {/* Bout grid */}
      <div className="grid grid-cols-2 gap-4 w-full mb-6">
        {bouts.map((bout, i) => {
          const isMainEvent = i === 0;
          const isRevealed = isMainEvent ? isGameOver : i >= revealedFromIndex;

          return (
            <BoutBox
              key={bout.id}
              fighter1={bout.fighter1}
              fighter2={bout.fighter2}
              weightClass={bout.weightClass}
              isRevealed={isRevealed}
            />
          );
        })}
      </div>

      {/* Guess inputs */}
      {!isGameOver && (
        <div className="flex gap-4 mb-4">
          <input
            type="text"
            value={fighter1Input}
            onChange={(e) => setFighter1Input(e.target.value)}
            placeholder="Fighter 1"
            className="bg-transparent border border-white text-white px-4 py-2 rounded"
          />
          <input
            type="text"
            value={fighter2Input}
            onChange={(e) => setFighter2Input(e.target.value)}
            placeholder="Fighter 2"
            className="bg-transparent border border-white text-white px-4 py-2 rounded"
          />
          <button
            onClick={handleSubmit}
            className="bg-[#a98148] text-white font-bold px-6 py-2 rounded"
          >
            Submit
          </button>
        </div>
      )}

      {/* Game over states */}
      {isGameOver && isCorrect && (
        <p className="text-green-400 font-bold text-xl">Correct! 🏆</p>
      )}
      {isGameOver && !isCorrect && (
        <p className="text-red-400 font-bold text-xl">Better luck tomorrow.</p>
      )}
    </div>
  );
}
