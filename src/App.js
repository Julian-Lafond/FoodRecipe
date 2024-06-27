import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ImproveSkills from "./components/ImprovedSkills";
import QuoteSection from "./components/QuoteSection";
import CheifSection from "./components/ChiefSection";
import Footer from "./components/Footer";
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
      <Footer />
    </div>
  );
}

export default App;
