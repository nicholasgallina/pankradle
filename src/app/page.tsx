import Header from "../components/Header";
import Footer from "../components/Footer";
import EventBox from "../components/EventBox";
import BoutBox from "../components/BoutBox";
import NewsTicker from "../components/NewsTicker";

export default function Game() {
  return (
    <div className="px-25">
      <Header />
      <NewsTicker />
      <EventBox />
      <Footer />
    </div>
  );
}
