import React from "react";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Formation from "./pages/Parcours";
import Competences from "./pages/Competences";
import Contact from "./pages/Contact";
import ConstellationBackground from "./components/ConstellationBackground";
import { Contact as ContactIcon } from "lucide-react";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import Stage from "./pages/Stage";
import AutoEvaluation from "./pages/AutoEvaluation";
import Parcours from "./pages/Parcours";

function App() {
  return (
    <>
      <ConstellationBackground />
      <div className="dark text-foreground font-sans relative z-10">
        <Navbar />
        <main className="pt-20">
          <About />
          <Competences />
          <AutoEvaluation />
          <Parcours />
          <Projects />
          <Stage />
          <Contact />
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
