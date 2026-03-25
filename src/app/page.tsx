import Header from "../components/Header";
import Footer from "../components/Footer";
import EventBox from "../components/EventBox";
import BoutBox from "../components/BoutBox";

export default function Game() {
  return (
    <div className="px-25">
      <Header />
      <EventBox />
      <Footer />
    </div>
  );
}
