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
    setEducation(prevEdu => {
      return { ...prevEdu, [name]: value };
    });
  };

  const saveEntry = () => {
    if (!education.id) {
      const uid = uuidv4();
      const copyEdu = { ...education };
      copyEdu.id = uid;
      setEducation(copyEdu);
      const copyTotal = [...totalEdu];
      copyTotal.push(copyEdu);
      setTotalEdu(copyTotal);
    } else {
      const copy = [...totalEdu];
      const copyEdu = copy.find(edu => edu.id === education.id);
      const index = copy.indexOf(copyEdu);
      copy[index] = { ...education };
      setTotalEdu(copy);
    }
    setIsEditMode(false);
    setEducation({
      id: "",
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: "",
    });
  };

  const deleteEntry = () => {
    setIsEditMode(false);
  };

  const cancelEntry = () => {
    setIsEditMode(false);
  };

  const handleEdit = id => {
    setIsEditMode(true);
    let editEdu = totalEdu.find(edu => edu.id === id);
    setEducation(editEdu);
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
          <button onClick={() => saveEntry()}>Save</button>
          <button onClick={() => cancelEntry()}>Cancel</button>
          <button onClick={() => deleteEntry()}>Delete</button>
        </form>
      ) : (
        <>
          {totalEdu.length > 0 &&
            totalEdu.map(edu => {
              return (
                <div key={edu.id}>
                  <div className="school-name">{edu.school}</div>
                  <button onClick={() => handleEdit(edu.id)}>EDIT</button>
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
