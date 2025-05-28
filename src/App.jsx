import React from "react";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AddInfo from "./components/AddInfo";

function App() {
  return (
    <div className="bg-bg-first">
      <Layout>
        <Navbar />
        <Hero />
        <Projects />
        <Skills />
        <Education />
        <Experience />
        <AddInfo />
        <Contact />
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
