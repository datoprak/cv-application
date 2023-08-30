import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Cv from "./components/Cv";
import "./App.css";

function App() {
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
  });
  const [totalEdu, setTotalEdu] = useState([]);
  const [education, setEducation] = useState({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
  });
  const [totalExp, setTotalExp] = useState([]);
  const [experience, setExperience] = useState({
    company: "",
    title: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
  });

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
