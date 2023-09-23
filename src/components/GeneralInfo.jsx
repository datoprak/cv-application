import { useState } from "react";

export default function GeneralInfo({ person, setPerson }) {
  const [isEditMode, setIsEditMode] = useState(true);

  const handleChange = e => {
    const { name, value } = e.target;
    setPerson(prevPerson => {
      return { ...prevPerson, [name]: value };
    });
  };

  return (
    <section className="general-info">
      <h2>General Info</h2>
      {isEditMode ? (
        <>
          <label>
            First Name:&#9;
            <input
              type="text"
              name="firstName"
              value={person.firstName}
              onChange={handleChange}
            />
          </label>
          <label>
            Last Name:&#9;
            <input
              type="text"
              name="lastName"
              value={person.lastName}
              onChange={handleChange}
            />
          </label>
          <label>
            E-mail:&#9;
            <input
              type="email"
              name="email"
              value={person.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Phone:&#9;
            <input
              type="tel"
              name="phone"
              value={person.phone}
              onChange={handleChange}
            />
          </label>
          <label>
            Address:&#9;
            <input
              type="text"
              name="address"
              value={person.address}
              onChange={handleChange}
            />
          </label>
          <button onClick={() => setIsEditMode(false)}>SAVE</button>
        </>
      ) : (
        <>
          <div className="fname">{person.firstName}</div>
          <div className="lname">{person.lastName}</div>
          <div className="email">{person.email}</div>
          <div className="phone">{person.phone}</div>
          <div className="address">{person.address}</div>
          <button onClick={() => setIsEditMode(true)}>EDIT</button>
        </>
      )}
    </section>
  );
}
