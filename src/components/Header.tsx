import HintButton from "./HintButton";
import RulesButton from "./RulesButton";

// src/app/components/Header.tsx
export default function Header() {
  return (
    <>
      <div className="flex justify-between items-center px-10 py-10">
        <a href="/">
          <img
            className="hover:brightness-110 hover:opacity-50 transition-all duration-200 cursor-pointer"
            src="/logo.svg"
            title="Pankradle Logo"
            alt="Pankradle Logo"
          />
        </a>

        <div className="flex gap-4">
          <HintButton />
          <RulesButton />
        </div>
      </div>

      <hr className="border-3" />
    </>
  );
}
