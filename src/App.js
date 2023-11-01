import "./main.css";
import NavBar from "./Components/Navbar/NavBar";
import LandingOne from "./Components/landingpage/landingOne/Landing-One";
import LandingTwo from "./Components/landingpage/landingTwo/Landing-Two";
import LandingThree from "./Components/landingpage/landingThree/Landing-Three";
import LandingFour from "./Components/landingpage/landingFour/LandingFour";
import CounterPage from "./Components/landingcomponent/Counter";
import TestiMonials from "./Components/landingpage/testimonials/TestiMonials";
import Service from "./Components/landingpage/service/Service";
import Team from "./Components/landingpage/Team/Team";
import ContactUs from "./Components/landingpage/contactus/ContactUs";
import Footer from "./Components/footer/footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <LandingOne />
        <LandingTwo />
        <LandingThree />
        <LandingFour />
        <CounterPage />
        <TestiMonials />
        <Service />
        <Team />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
