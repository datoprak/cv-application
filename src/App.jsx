import { useState } from "react";

import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Cv from "./components/Cv";
import Navbar from "./components/Navbar";
import EXAMPLE_CV from "./util/example";
import "./styles/App.css";

function App() {
  const [person, setPerson] = useState(EXAMPLE_CV.person);
  const [totalEdu, setTotalEdu] = useState(EXAMPLE_CV.totalEdu);
  const [education, setEducation] = useState(EXAMPLE_CV.totalEdu[0]);
  const [totalExp, setTotalExp] = useState(EXAMPLE_CV.totalExp);
  const [experience, setExperience] = useState(EXAMPLE_CV.totalExp[0]);

  const loadExample = () => {
    setPerson(EXAMPLE_CV.person);
    setTotalEdu(EXAMPLE_CV.totalEdu);
    setTotalExp(EXAMPLE_CV.totalExp);
  };

  const clearCv = () => {
    setPerson({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
    });
    setTotalEdu({
      id: "",
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: "",
    });
    setTotalExp({
      id: "",
      company: "",
      title: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
    });
  };

  return (
    <div className="App">
      <Navbar clearCv={clearCv} loadExample={loadExample}></Navbar>
      <main>
        <section className="edit-section">
          <GeneralInfo person={person} setPerson={setPerson} />
          <Education
            education={education}
            setEducation={setEducation}
            totalEdu={totalEdu}
            setTotalEdu={setTotalEdu}
          />
          <Experience
            experience={experience}
            setExperience={setExperience}
            totalExp={totalExp}
            setTotalExp={setTotalExp}
          />
        </section>
        <section className="cv-section">
          <Cv person={person} totalEdu={totalEdu} totalExp={totalExp} />
        </section>
      </main>
    </div>
  );
}

export default App;
