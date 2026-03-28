"use client";

import { useState, useEffect } from "react";
import BoutBox from "./BoutBox";
import Timer from "./Timer";
import SubmitButton from "./SubmitButton";

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
  const [allFighters, setAllFighters] = useState<string[]>([]);

  useEffect(() => {
    fetch("/api/fighters")
      .then((res) => res.json())
      .then((data) => setAllFighters(data));
  }, []);

  if (!event) return <p className="text-white">Loading...</p>;
  console.log(event);

  const bouts = event.bouts;
  const MAX_GUESSES = bouts.length - 1;

  // bouts[0] is the main event (hidden until guessed correctly)
  // bouts[1..n] are revealed progressively as guesses are used
  // on 0 guesses used: only bouts[4] visible (last bout on card)
  // on 1 guess wrong: bouts[3] also revealed, etc.
  const revealedFromIndex = bouts.length - 1 - guessesUsed;

  console.log("bouts.length:", bouts.length);
  console.log("revealedFromIndex:", revealedFromIndex);

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
    <div className="w-full max-w-6xl mx-auto">
      {/* Event metadata */}
      <div className="grid grid-cols-3 items-center w-full m-1">
        <h2 className="text-black font-bold text-4xl m-2">{event.name}</h2>

        {/* GUESSES */}
        <div className="flex gap-2 justify-center mb-4">
          {Array.from({ length: MAX_GUESSES }).map((_, i) => (
            <div
              key={i}
              className={`w-6 h-6 rounded-full border-2 border-white ${
                i >= MAX_GUESSES - guessesUsed ? "bg-transparent" : "bg-white"
              }`}
            />
          ))}
        </div>

        {/* TIMER */}
        <div className="flex justify-end">
          <Timer />
        </div>
      </div>

      {/* Bout grid */}
      <div className="grid grid-cols-2 gap-4 w-full mb-6">
        {bouts.map((bout, i) => {
          const isMainEvent = i === 0;
          const isRevealed = isMainEvent ? isGameOver : i >= revealedFromIndex;
          console.log(
            `bout ${i}: isRevealed=${isRevealed}, isMainEvent=${isMainEvent}`,
          );

          return (
            <BoutBox
              key={bout.id}
              fighter1={bout.fighter1}
              fighter2={bout.fighter2}
              weightClass={bout.weightClass}
              isRevealed={isRevealed}
              isMainEvent={i === 0}
              fighterInput1={fighter1Input}
              fighterInput2={fighter2Input}
              onInput1Change={(val) => {
                console.log("input1 changed:", val);
                setFighter1Input(val);
              }}
              onInput2Change={(val) => {
                console.log("input2 changed:", val);
                setFighter2Input(val);
              }}
              allFighters={allFighters}
              onFighterSelect1={(f) => setFighter1Input(f)}
              onFighterSelect2={(f) => setFighter2Input(f)}
            />
          );
        })}
      </div>

      {/* GAME STATE: GUESS */}
      {!isGameOver && (
        <div className="flex justify-center mb-20">
          <SubmitButton onClick={handleSubmit} />
        </div>
      )}

      {/* GAME STATE: OVER */}
      {isGameOver && isCorrect && (
        <p className="text-green-400 font-bold text-xl">Correct! 🏆</p>
      )}
      {isGameOver && !isCorrect && (
        <p className="text-red-400 font-bold text-xl">Better luck tomorrow.</p>
      )}
    </div>
  );
}
