import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Experience({
  experience,
  setExperience,
  totalExp,
  setTotalExp,
}) {
  const [isEditMode, setIsEditMode] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setExperience(prevExp => {
      return { ...prevExp, [name]: value };
    });
  };

  const saveEntry = () => {
    if (!experience.id) {
      const uid = uuidv4();
      const copyExp = { ...experience };
      copyExp.id = uid;
      setExperience(copyExp);
      const copyTotal = [...totalExp];
      copyTotal.push(copyExp);
      setTotalExp(copyTotal);
    } else {
      const copy = [...totalExp];
      const copyExp = copy.find(exp => exp.id === experience.id);
      const index = copy.indexOf(copyExp);
      copy[index] = { ...experience };
      setTotalExp(copy);
    }
    setIsEditMode(false);
    setExperience({
      id: "",
      company: "",
      title: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
    });
  };

  const deleteEntry = () => {
    const copyTotal = [...totalExp];
    const deleteExp = copyTotal.find(exp => exp.id === experience.id);
    const index = copyTotal.indexOf(deleteExp);
    copyTotal.splice(index, 1);
    setTotalExp(copyTotal);
    setIsEditMode(false);
    setExperience({
      id: "",
      company: "",
      title: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
    });
  };

  const cancelEntry = () => {
    setIsEditMode(false);
  };

  const handleEdit = id => {
    setIsEditMode(true);
    let editExp = totalExp.find(exp => exp.id === id);
    setExperience(editExp);
  };

  return (
    <section className="experience">
      <h2>Experience</h2>
      {isEditMode ? (
        <form>
          <label>
            Company Name
            <input
              type="text"
              name="company"
              value={experience.company}
              onChange={handleChange}
            />
          </label>
          <label>
            Title
            <input
              type="text"
              name="title"
              value={experience.title}
              onChange={handleChange}
            />
          </label>
          <label>
            Start Date
            <input
              type="text"
              name="startDate"
              value={experience.startDate}
              onChange={handleChange}
            />
          </label>
          <label>
            End Date
            <input
              type="text"
              name="endDate"
              value={experience.endDate}
              onChange={handleChange}
            />
          </label>
          <label>
            Location
            <input
              type="text"
              name="location"
              value={experience.location}
              onChange={handleChange}
            />
          </label>
          <button onClick={saveEntry}>Save</button>
          <button onClick={cancelEntry}>Cancel</button>
          <button onClick={deleteEntry}>Delete</button>
        </form>
      ) : (
        <>
          {totalExp.length > 0 &&
            totalExp.map(exp => {
              return (
                <div key={exp.id}>
                  <div className="company-name">{exp.company}</div>
                  <button onClick={() => handleEdit(exp.id)}>EDIT</button>
                </div>
              );
            })}
          <button
            onClick={() => {
              setIsEditMode(!isEditMode);
            }}
          >
            ADD
          </button>
        </>
      )}
    </section>
  );
}
