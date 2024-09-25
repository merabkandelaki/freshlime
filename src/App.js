import "./App.css";
import { ScrollProvider } from "./context/ScrollContext";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/Home";

function App() {
  return (
    <ScrollProvider>
      <div className="App">
        <Header />
        <Home />
        <Footer />
      </div>
    </ScrollProvider>
  );
}

export default App;
