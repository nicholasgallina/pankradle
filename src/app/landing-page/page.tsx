// pankradle.io/landing-page

export default function LandingPage() {
  const today = new Date().toISOString().split("T")[0];

  return (
    <section className="flex flex-col justify-center items-center px-4 h-screen overflow-hidden">
      <img src="/logo.svg" />
      <h1 className="hidden">Pankradle</h1>
      <h2 className="my-2 text-4xl text-center font-black font-style: italic">
        The UFC PPV Guessing Game
      </h2>
      <h3 className=" text-2xl font-medium">
        Guess the mystery UFC event in 4 guesses!
      </h3>
      <a className="mt-2 mb-2" href="/">
        <img
          src="/icons/play-button.svg"
          alt="Play"
          className="hover:scale-105 transition-transform duration-200"
        />
      </a>
      <div className="text-xl font-medium">
        <p>{today}</p>
      </div>
    </section>
  );
}
