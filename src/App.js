import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Navbar } from "./components/Navbar/Navbar";
import QuickFacts from "./components/QuickFacts/QuickFacts";
import Testimonials from "./components/About/Testimonials";
import Skills from "./components/skills/skills";
import Personality from "./components/personality/personality";
import ResumeOverview from "./components/resumeOverview/resumeOverview";
import Experiences from "./components/Experiences/experiences";
import Contact from "./components/Contact/Contact";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <QuickFacts></QuickFacts>
      <Testimonials></Testimonials>
      <Skills></Skills>
      <Experiences></Experiences>
      <ResumeOverview></ResumeOverview>
      <Personality></Personality> <Contact></Contact>
    </>
  );
}

export default App;
