import { useState, useRef } from "react";

type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
  allFighters: string[];
  onSelect: (fighter: string) => void;
};

export default function SearchInput({
  value,
  onChange,
  allFighters,
  onSelect,
}: SearchInputProps) {
  const [filteredFighters, setFilteredFighters] = useState<string[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    onChange(val);

    if (val.trim() === "") {
      setShowDropdown(false);
      setFilteredFighters([]);
      setHighlightedIndex(-1);
      return;
    }

    const matches = allFighters.filter((f) =>
      f.toLowerCase().includes(val.toLowerCase()),
    );
    setFilteredFighters(matches);
    setShowDropdown(matches.length > 0);
    setHighlightedIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showDropdown || filteredFighters.length === 0) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev < filteredFighters.length - 1 ? prev + 1 : 0,
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev > 0 ? prev - 1 : filteredFighters.length - 1,
        );
        break;
      case "Enter":
        e.preventDefault();
        const idx = highlightedIndex === -1 ? 0 : highlightedIndex;
        onSelect(filteredFighters[idx]);
        setShowDropdown(false);
        setFilteredFighters([]);
        setHighlightedIndex(-1);
        break;
      case "Escape":
        e.preventDefault();
        onChange("");
        setShowDropdown(false);
        setHighlightedIndex(-1);
        break;
    }
  };

  return (
    <div className="relative w-full h-full">
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onClick={(e) => e.stopPropagation()}
        className="absolute inset-0 bg-transparent text-white font-bold text-xl text-center focus:outline-none"
      />
      {showDropdown && (
        <div
          ref={dropdownRef}
          className="absolute top-full left-0 right-0 bg-[#d9d9d9] border-2 border-[#a98148] rounded max-h-60 overflow-y-auto z-10 animate-slideDown scrollbar-hide"
        >
          {filteredFighters.map((fighter, idx) => (
            <div
              key={idx}
              onClick={() => {
                onSelect(fighter);
                setShowDropdown(false);
                setFilteredFighters([]);
                setHighlightedIndex(-1);
              }}
              className={`p-2 cursor-pointer uppercase text-xl font-bold border-b border-[#a98148] slide-hover ${
                idx === highlightedIndex
                  ? "bg-[#2d55aa] text-white"
                  : "hover:bg-[#2d55aa] hover:text-white"
              }`}
            >
              {fighter}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
