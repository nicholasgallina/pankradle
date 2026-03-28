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
};

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
}: BoutBoxProps) {
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isFading1, setIsFading1] = useState(false);
  const [isFading2, setIsFading2] = useState(false);

  if (!isRevealed) {
    if (isMainEvent) {
      return (
        <>
          {/* Fighter 1 box */}
          <div
            className={`relative transition-all duration-200 cursor-pointer ${!isActive1 ? "hover:opacity-75 hover:scale-105" : ""}`}
            onClick={() => {
              if (!isActive1) {
                setIsFading1(true);
                setTimeout(() => setIsActive1(true), 200);
              }
            }}
          >
            <img src="/bout-box.svg" alt="Card" className="w-full" />
            {isActive1 ? (
              <div
                className="absolute inset-0"
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

          {/* Fighter 2 box */}
          <div
            className={`relative transition-all duration-200 cursor-pointer ${!isActive1 ? "hover:opacity-75 hover:scale-105" : ""}`}
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
                className="absolute inset-0"
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
          <img src="/bout-box.svg" alt="Card" className="w-full" />
          <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-4xl pointer-events-none">
            👽
          </div>
        </div>
        <div className="relative hover:opacity-75 hover:scale-105 transition-all duration-200 cursor-pointer">
          <img src="/bout-box.svg" alt="Card" className="w-full" />
          <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-4xl pointer-events-none">
            👽
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {/* Fighter 1 box */}
      <div className="relative">
        <img src="/bout-box.svg" alt="Card" className="w-full" />
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          {fighter1.country && (
            <img
              src={`https://flagcdn.com/w40/${fighter1.country.toLowerCase()}.png`}
              alt={fighter1.country}
              className="h-5 mb-1"
            />
          )}
          {fighter1.image && (
            <img
              src={fighter1.image}
              alt={fighter1.name}
              className="h-20 object-contain"
            />
          )}
          <span className="text-white font-bold text-sm text-center mt-1">
            {fighter1.name}
          </span>
        </div>
      </div>

      {/* Fighter 2 box */}
      <div className="relative">
        <img src="/bout-box.svg" alt="Card" className="w-full" />
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          {fighter2.country && (
            <img
              src={`https://flagcdn.com/w40/${fighter2.country.toLowerCase()}.png`}
              alt={fighter2.country}
              className="h-5 mb-1"
            />
          )}
          {fighter2.image && (
            <img
              src={fighter2.image}
              alt={fighter2.name}
              className="h-20 object-contain"
            />
          )}
          <span className="text-white font-bold text-sm text-center mt-1">
            {fighter2.name}
          </span>
        </div>
      </div>
    </>
  );
}
