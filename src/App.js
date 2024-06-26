import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ImproveSkills from "./components/ImprovedSkills";
import QuoteSection from "./components/QuoteSection";
import CheifSection from "./components/ChiefSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className = "container main">
        <HeroSection />
        <ImproveSkills />
        <QuoteSection />
        <CheifSection />
      </div>
    </div>
  );
}

export default App;
