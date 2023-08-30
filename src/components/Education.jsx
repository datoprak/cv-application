import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Education({
  education,
  setEducation,
  totalEdu,
  setTotalEdu,
}) {
  const [isEditMode, setIsEditMode] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    const id = uuidv4();
    setEducation(prevEdu => {
      return { ...prevEdu, [name]: value, id: id };
    });
  };

  const handleEdit = type => {
    if (type === "save") {
      setTotalEdu(prevEdu => [...prevEdu, education]);
      setIsEditMode(false);
      setEducation({
        id: "",
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
        location: "",
      });
    } else if (type === "cancel") {
      setIsEditMode(false);
    } else if (type === "delete") {
      setIsEditMode(false);
    }
  };

  return (
    <section className="education">
      <h2>Education</h2>
      {isEditMode ? (
        <form>
          <label>
            School
            <input
              type="text"
              name="school"
              value={education.school}
              onChange={handleChange}
            />
          </label>
          <label>
            Degree
            <input
              type="text"
              name="degree"
              value={education.degree}
              onChange={handleChange}
            />
          </label>
          <label>
            Start Date
            <input
              type="text"
              name="startDate"
              value={education.startDate}
              onChange={handleChange}
            />
          </label>
          <label>
            End Date
            <input
              type="text"
              name="endDate"
              value={education.endDate}
              onChange={handleChange}
            />
          </label>
          <label>
            Location
            <input
              type="text"
              name="location"
              value={education.location}
              onChange={handleChange}
            />
          </label>
          <button onClick={() => handleEdit("save")}>Save</button>
          <button onClick={() => handleEdit("cancel")}>Cancel</button>
          <button onClick={() => handleEdit("delete")}>Delete</button>
        </form>
      ) : (
        <>
          {totalEdu.length > 0 &&
            totalEdu.map(edu => {
              return (
                <>
                  <div className="school-name">{edu.school}</div>
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
