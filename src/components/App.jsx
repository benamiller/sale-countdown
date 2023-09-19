import "./App.css";
import NavigationBar from "./NavigationBar";
import HeroSection from "./HeroSection";
import SalesBanner from './SalesBanner';

function App() {
  return (
    <>
      <SalesBanner saleEndDate={new Date('2023-09-25T23:59:50').getTime()}/>
      <NavigationBar />
      <HeroSection />
    </>
  );
}

export default App;
