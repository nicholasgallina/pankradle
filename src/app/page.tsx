import Header from "../components/Header";
import Footer from "../components/Footer";
import FighterGrid from "../components/FIghterGrid";

export default function Game() {
  return (
    <div className="px-25">
      <Header />
      <FighterGrid />
      <Footer />
    </div>
  );
}
