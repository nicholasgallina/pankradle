"use client";
import SubmitButton from "./SubmitButton";
import { useState, useEffect, useRef } from "react";
import mockData from "../data/mockData.json";

export default function FighterGrid() {
  // Input values
  const [fighter1Input, setFighter1Input] = useState("");
  const [fighter2Input, setFighter2Input] = useState("");

  // Dropdown visibility
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);

  // Filtered fighter lists for each dropdown
  const [filteredFighters1, setFilteredFighters1] = useState([]);
  const [filteredFighters2, setFilteredFighters2] = useState([]);

  // Keyboard navigation - track highlighted index
  const [highlightedIndex1, setHighlightedIndex1] = useState(-1);
  const [highlightedIndex2, setHighlightedIndex2] = useState(-1);

  // Refs for the input fields and dropdowns
  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const dropdown1Ref = useRef(null);
  const dropdown2Ref = useRef(null);

  // Get data from mock JSON
  const todayEvent = mockData.events[0];
  const fighters = todayEvent.fighters;
  const allFighters = mockData.allFighters;

  // an array to keep track of revealed fighters
  const revealedIndices = [4, 5, 6, 7, 8, 9];

  // Function to scroll highlighted item into view
  const scrollToHighlighted = (dropdownRef, index) => {
    if (!dropdownRef.current) return;

    const dropdown = dropdownRef.current;
    const highlightedItem = dropdown.children[index];

    if (highlightedItem) {
      highlightedItem.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  };

  // Handler for box 1 input changes
  const handleBox1Change = (e) => {
    const value = e.target.value;
    setFighter1Input(value);

    // If input is empty, hide dropdown
    if (value.trim() === "") {
      setShowDropdown1(false);
      setFilteredFighters1([]);
      setHighlightedIndex1(-1);
      return;
    }

    // Filter fighters: match search AND exclude box 2's selection
    const matches = allFighters.filter(
      (fighter) =>
        fighter.toLowerCase().includes(value.toLowerCase()) &&
        fighter !== fighter2Input,
    );

    // Update filtered list and show/hide dropdown
    setFilteredFighters1(matches);
    setShowDropdown1(matches.length > 0);
    setHighlightedIndex1(-1); // Reset highlight when results change
  };

  // Handler for box 2 input changes
  const handleBox2Change = (e) => {
    const value = e.target.value;
    setFighter2Input(value);

    // If input is empty, hide dropdown
    if (value.trim() === "") {
      setShowDropdown2(false);
      setFilteredFighters2([]);
      setHighlightedIndex2(-1);
      return;
    }

    // Filter fighters: match search AND exclude box 1's selection
    const matches = allFighters.filter(
      (fighter) =>
        fighter.toLowerCase().includes(value.toLowerCase()) &&
        fighter !== fighter1Input,
    );

    // Update filtered list and show/hide dropdown
    setFilteredFighters2(matches);
    setShowDropdown2(matches.length > 0);
    setHighlightedIndex2(-1); // Reset highlight when results change
  };

  // Handler when user clicks a fighter in box 1's dropdown
  const handleFighterSelect1 = (fighter) => {
    setFighter1Input(fighter);
    setShowDropdown1(false);
    setFilteredFighters1([]);
    setHighlightedIndex1(-1);
  };

  // Handler when user clicks a fighter in box 2's dropdown
  const handleFighterSelect2 = (fighter) => {
    setFighter2Input(fighter);
    setShowDropdown2(false);
    setFilteredFighters2([]);
    setHighlightedIndex2(-1);
  };

  // Keyboard handler for box 1
  const handleBox1KeyDown = (e) => {
    if (!showDropdown1 || filteredFighters1.length === 0) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        const newIndexDown =
          highlightedIndex1 < filteredFighters1.length - 1
            ? highlightedIndex1 + 1
            : 0;
        setHighlightedIndex1(newIndexDown);
        scrollToHighlighted(dropdown1Ref, newIndexDown);
        break;
      case "ArrowUp":
        e.preventDefault();
        const newIndexUp =
          highlightedIndex1 > 0
            ? highlightedIndex1 - 1
            : filteredFighters1.length - 1;
        setHighlightedIndex1(newIndexUp);
        scrollToHighlighted(dropdown1Ref, newIndexUp);
        break;
      case "Enter":
        e.preventDefault();
        // If nothing highlighted, select first item. Otherwise select highlighted item
        const selectedIndex = highlightedIndex1 === -1 ? 0 : highlightedIndex1;
        handleFighterSelect1(filteredFighters1[selectedIndex]);
        break;
      case "Escape":
        e.preventDefault();
        setFighter1Input("");
        setShowDropdown1(false);
        setHighlightedIndex1(-1);
        break;
    }
  };

  // Keyboard handler for box 2
  const handleBox2KeyDown = (e) => {
    if (!showDropdown2 || filteredFighters2.length === 0) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        const newIndexDown =
          highlightedIndex2 < filteredFighters2.length - 1
            ? highlightedIndex2 + 1
            : 0;
        setHighlightedIndex2(newIndexDown);
        scrollToHighlighted(dropdown2Ref, newIndexDown);
        break;
      case "ArrowUp":
        e.preventDefault();
        const newIndexUp =
          highlightedIndex2 > 0
            ? highlightedIndex2 - 1
            : filteredFighters2.length - 1;
        setHighlightedIndex2(newIndexUp);
        scrollToHighlighted(dropdown2Ref, newIndexUp);
        break;
      case "Enter":
        e.preventDefault();
        // If nothing highlighted, select first item. Otherwise select highlighted item
        const selectedIndex = highlightedIndex2 === -1 ? 0 : highlightedIndex2;
        handleFighterSelect2(filteredFighters2[selectedIndex]);
        break;
      case "Escape":
        e.preventDefault();
        setFighter2Input("");
        setShowDropdown2(false);
        setHighlightedIndex2(-1);
        break;
    }
  };

  return (
    <>
      <div className="mt-10 mb-5 grid grid-cols-2 gap-4">
        {fighters.map((fighter, i) => {
          // First box - input with dropdown
          if (i === 0) {
            return (
              <div key={i} className="relative">
                <img src="/bout-box.svg" alt="Card" className="w-full" />
                <input
                  ref={input1Ref}
                  type="text"
                  value={fighter1Input}
                  onChange={handleBox1Change}
                  onKeyDown={handleBox1KeyDown}
                  className="absolute inset-0 bg-transparent text-white font-bold text-xl text-center placeholder-white focus:outline-none"
                />

                {showDropdown1 && (
                  <div
                    ref={dropdown1Ref}
                    className="absolute top-full left-10 right-10 bg-[#d9d9d9] border-2 border-[#a98148] rounded -mt-1 max-h-60 overflow-y-auto z-10 animate-slideDown scrollbar-hide"
                  >
                    {filteredFighters1.map((fighter, idx) => (
                      <div
                        key={idx}
                        onClick={() => handleFighterSelect1(fighter)}
                        className={`p-2 cursor-pointer transition-colors uppercase duration-500 slide-hover text-xl font-bold border-3 border-[#a98148] ${
                          idx === highlightedIndex1
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

          // Second box - input with dropdown
          if (i === 1) {
            return (
              <div key={i} className="relative">
                <img src="/bout-box.svg" alt="Card" className="w-full" />
                <input
                  ref={input2Ref}
                  type="text"
                  value={fighter2Input}
                  onChange={handleBox2Change}
                  onKeyDown={handleBox2KeyDown}
                  className="absolute inset-0 bg-transparent text-white font-bold text-xl text-center placeholder-white focus:outline-none"
                />

                {/* Dropdown for box 2 */}
                {showDropdown2 && (
                  <div
                    ref={dropdown2Ref}
                    className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded mt-1 max-h-60 overflow-y-auto z-10 animate-slideDown scrollbar-hide"
                  >
                    {filteredFighters2.map((fighter, idx) => (
                      <div
                        key={idx}
                        onClick={() => handleFighterSelect2(fighter)}
                        className={`p-2 cursor-pointer transition-colors ${
                          idx === highlightedIndex2
                            ? "bg-blue-500 text-white"
                            : "hover:bg-blue-500 hover:text-white"
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

          // Rest of the boxes - regular fighter cards
          const isRevealed = revealedIndices.includes(i);
          return (
            <div key={i} className="relative">
              <img src="/bout-box.svg" alt="Card" className="w-full" />
              {isRevealed ? (
                <div className="absolute inset-0 flex flex-row items-center justify-center">
                  <span className="text-white font-bold text-3xl">
                    {fighter.name}
                  </span>
                  {fighter.image && (
                    <img
                      src={fighter.image}
                      alt={fighter.name}
                      className="h-4/5 object-contain translate-y-0.5"
                    />
                  )}
                </div>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-4xl">
                  ?
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
