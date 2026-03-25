// data shapes for proper object validation

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
};

export default function BoutBox({
  fighter1,
  fighter2,
  weightClass,
  isRevealed,
}: BoutBoxProps) {
  if (!isRevealed) {
    return (
      <div className="relative">
        <img src="/bout-box.svg" alt="Card" className="w-full" />
        <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-4xl">
          ?
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <img src="/bout-box.svg" alt="Card" className="w-full" />
      <div className="absolute inset-0 flex items-center justify-between px-4">
        {/* Fighter 1 */}
        <div className="flex flex-col items-center w-2/5">
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

        {/* Weight class */}
        <div className="flex flex-col items-center w-1/5">
          <span className="text-white font-bold text-xs text-center uppercase">
            {weightClass}
          </span>
          <span className="text-white text-lg font-bold">VS</span>
        </div>

        {/* Fighter 2 */}
        <div className="flex flex-col items-center w-2/5">
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
    </div>
  );
}
