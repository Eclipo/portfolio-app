import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Navbar } from "./components/Navbar/Navbar";
import QuickFacts from "./components/QuickFacts/QuickFacts";
import About from "./components/About/About";
import Skills from "./components/skills/skills";
import Personality from "./components/personality/personality";
import ResumeOverview from "./components/resumeOverview/resumeOverview";
import Experiences from "./components/Experiences/experiences";
import Contact from "./components/Contact/Contact";
import LocomotiveScrollWrapper from "./locomotivesroll";
function App() {
  return (
    <LocomotiveScrollWrapper>
      <Navbar></Navbar>
      <QuickFacts></QuickFacts>
      <Skills></Skills>
      <Experiences></Experiences>
      <ResumeOverview></ResumeOverview>
      <About></About>
      <Personality></Personality>
      <Contact></Contact>
    </LocomotiveScrollWrapper>
  );
}

export default App;
