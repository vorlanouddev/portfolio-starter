import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import IntroDuaction from "./Components/Intro/IntroDuaction";
import Services from "./Components/services/Services";

function App() {
  return (
    <div className="App">
      <Navbar />
      <IntroDuaction />
      <Services />
    </div>
  );
}

export default App;
