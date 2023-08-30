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
    const id = uuidv4();
    setExperience(prevExp => {
      return { ...prevExp, [name]: value, id: id };
    });
  };

  const handleEdit = type => {
    if (type === "save") {
      setTotalExp(prevExp => [...prevExp, experience]);
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
    } else if (type === "cancel") {
      setIsEditMode(false);
    } else if (type === "delete") {
      setIsEditMode(false);
    }
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
          <button onClick={() => handleEdit("save")}>Save</button>
          <button onClick={() => handleEdit("cancel")}>Cancel</button>
          <button onClick={() => handleEdit("delete")}>Delete</button>
        </form>
      ) : (
        <>
          {totalExp.length > 0 &&
            totalExp.map(exp => {
              return (
                <>
                  <div className="company-name">{exp.school}</div>
                  <button>EDIT</button>
                </>
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
