import { useState } from "react";
import SearchInput from "./SearchInput";

type Fighter = {
  name: string;
  image: string | null;
  country: string | null;
};

type BoutBoxProps = {
  fighter1: Fighter;
  fighter2: Fighter;
  weightClass: string;
  isRevealed: boolean;
  isMainEvent: boolean;
  fighterInput1: string;
  fighterInput2: string;
  onInput1Change: (value: string) => void;
  onInput2Change: (value: string) => void;
  allFighters: string[];
  onFighterSelect1: (fighter: string) => void;
  onFighterSelect2: (fighter: string) => void;
  side: "left" | "right";
};

const fadeIn = "fadeIn 0.5s ease-in forwards";

export default function BoutBox({
  fighter1,
  fighter2,
  weightClass,
  isRevealed,
  isMainEvent,
  fighterInput1,
  fighterInput2,
  onInput1Change,
  onInput2Change,
  allFighters,
  onFighterSelect1,
  onFighterSelect2,
  side,
}: BoutBoxProps) {
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isFading1, setIsFading1] = useState(false);
  const [isFading2, setIsFading2] = useState(false);

  if (!isRevealed) {
    if (isMainEvent) {
      return (
        <>
          <div
            className={`relative transition-all duration-200 cursor-pointer ${!isActive1 ? "hover:opacity-75 hover:scale-105" : ""}`}
            onClick={() => {
              if (!isActive1) {
                setIsFading1(true);
                setTimeout(() => setIsActive1(true), 200);
              }
            }}
          >
            <img
              src="/bout-box.svg"
              alt="Card"
              className="w-full relative z-10"
            />
            {isActive1 ? (
              <div
                className="absolute inset-0 z-20"
                onClick={(e) => e.stopPropagation()}
              >
                <SearchInput
                  value={fighterInput1}
                  onChange={onInput1Change}
                  allFighters={allFighters}
                  onSelect={onFighterSelect1}
                />
              </div>
            ) : (
              <div
                className={`absolute inset-0 flex items-center justify-center text-white font-bold text-4xl pointer-events-none transition-opacity duration-200 ${isFading1 ? "opacity-0" : "opacity-100"}`}
              >
                👽
              </div>
            )}
          </div>

          <div
            className={`relative transition-all duration-200 cursor-pointer ${!isActive2 ? "hover:opacity-75 hover:scale-105" : ""}`}
            onClick={() => {
              if (!isActive2) {
                setIsFading2(true);
                setTimeout(() => setIsActive2(true), 200);
              }
            }}
          >
            <img src="/bout-box.svg" alt="Card" className="w-full" />
            {isActive2 ? (
              <div
                className="absolute inset-0 z-20"
                onClick={(e) => e.stopPropagation()}
              >
                <SearchInput
                  value={fighterInput2}
                  onChange={onInput2Change}
                  allFighters={allFighters}
                  onSelect={onFighterSelect2}
                />
              </div>
            ) : (
              <div
                className={`absolute inset-0 flex items-center justify-center text-white font-bold text-4xl pointer-events-none transition-opacity duration-200 ${isFading2 ? "opacity-0" : "opacity-100"}`}
              >
                👽
              </div>
            )}
          </div>
        </>
      );
    }

    return (
      <>
        <div className="relative hover:opacity-75 hover:scale-105 transition-all duration-200 cursor-pointer">
          <img
            src="/bout-box.svg"
            alt="Bout"
            className="w-full relative z-10"
          />
          <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-4xl pointer-events-none">
            👽
          </div>
        </div>
        <div className="relative hover:opacity-75 hover:scale-105 transition-all duration-200 cursor-pointer">
          <img src="/bout-box.svg" alt="Bout" className="w-full" />
          <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-4xl pointer-events-none">
            👽
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {/* FIGHTER 1 */}
      <div className="relative overflow-hidden rounded-xl">
        {fighter1.country && (
          <img
            src={`https://flagcdn.com/w160/${fighter1.country.toLowerCase()}.png`}
            alt={fighter1.country}
            className="absolute top-0 h-full w-24 object-cover skew-x-[10deg]"
            style={{ right: "0", left: "auto", animation: fadeIn }}
          />
        )}
        <img src="/bout-box.svg" alt="Card" className="w-full relative z-10" />
        {fighter1.image && (
          <img
            src={fighter1.image}
            alt={fighter1.name}
            className="absolute bottom-0 h-5/6 object-contain z-20 pointer-events-none -translate-y-1.5"
            style={{ right: "0", left: "auto", animation: fadeIn }}
          />
        )}
        <div className="absolute inset-0 flex items-center justify-center px-4 pointer-events-none z-30">
          <span
            className="text-left text-white font-bold text-5xl skew-x-[5deg] w-full block "
            style={{ animation: "slideInFromLeft 0.4s ease-out forwards" }}
          >
            {fighter1.name}
          </span>
        </div>
      </div>

      {/* FIGHTER 2 */}
      <div className="relative overflow-hidden rounded-xl">
        {fighter2.country && (
          <img
            src={`https://flagcdn.com/w160/${fighter2.country.toLowerCase()}.png`}
            alt={fighter2.country}
            className="absolute top-0 h-full w-24 object-cover skew-x-[-10deg]"
            style={{ left: "0", right: "auto", animation: fadeIn }}
          />
        )}
        <img src="/bout-box.svg" alt="Card" className="w-full relative z-10" />
        {fighter2.image && (
          <img
            src={fighter2.image}
            alt={fighter2.name}
            className="absolute bottom-0 h-5/6 object-contain z-20 pointer-events-none -translate-y-1.5"
            style={{ left: "0", right: "auto", animation: fadeIn }}
          />
        )}
        <div className="absolute inset-0 flex items-center justify-center px-4 pointer-events-none z-30">
          <span
            className="text-right text-white font-bold text-5xl skew-x-[-10deg] w-full block"
            style={{ animation: "slideInFromRight 0.4s ease-out forwards" }}
          >
            {fighter2.name}
          </span>
        </div>
      </div>
    </>
  );
}
