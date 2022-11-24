import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <GlobalProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={ <Contact />} />
      </Routes>
      </GlobalProvider>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
