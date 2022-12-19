import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "./components/Navbar/Navbar";
import QuickFacts from "./components/QuickFacts/QuickFacts";
import Intro from "./components/Intro/Intro";
import Testimonials from "./components/About/Testimonials";
import Skills from "./components/skills/skills";
import Personality from "./components/personality/personality";
import ResumeOverview from "./components/resumeOverview/resumeOverview";
import Experiences from "./components/Experiences/experiences";
import Portfolio from "./components/Portfolio/portfolio";
import Contact from "./components/Contact/Contact";
function App() {
  
  return (
    <>
      <Navbar></Navbar>
      <Intro></Intro>
      <QuickFacts></QuickFacts>
      <Testimonials></Testimonials>
      <Skills></Skills>
      <Experiences></Experiences>
      <ResumeOverview></ResumeOverview>
      <Personality></Personality>
      <Portfolio></Portfolio>
      <Contact></Contact>

    </>
  );
}

export default App;
