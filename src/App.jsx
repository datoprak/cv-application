import { useState } from "react";

import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Cv from "./components/Cv";
import Navbar from "./components/Navbar";
import "./App.css";

const EXAMPLE_CV = {
  person: {
    firstName: "John",
    lastName: "Smith",
    email: "johnsmith@example.com",
    phone: "123456798",
    address: "London, UK",
  },
  totalEdu: [
    {
      id: "1edu",
      school: "University of Cambridge",
      degree: "Bachelor of Computer Engineering",
      startDate: "2010",
      endDate: "2014",
      location: "Cambridge, UK",
    },
  ],
  totalExp: [
    {
      id: "1exp",
      company: "Microsoft",
      title: "Frontend Developer",
      startDate: "2014",
      endDate: "2023",
      location: "Washington, US",
      description:
        "Determining the structure and design of web pages, striking a balance between functional and aesthetic design, and ensuring web design is optimized for smartphones.",
    },
  ],
};

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
    id: "",
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
  });
  const [totalExp, setTotalExp] = useState([]);
  const [experience, setExperience] = useState({
    id: "",
    company: "",
    title: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
  });

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
