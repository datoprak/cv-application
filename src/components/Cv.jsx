import { Divider } from "antd";

export default function Cv({ person, totalEdu, totalExp }) {
  const fullName = `${person.firstName} ${person.lastName}`;

  const getYear = value => {
    if (typeof value === "string") return value;
    else return value.year();
  };

  return (
    <div className="cv">
      <div className="header">
        <div className="name">{fullName}</div>
        <div className="other-info">
          <div className="email">
            <span className="material-symbols-outlined">mail</span>{" "}
            {person.email}
          </div>
          <div className="phone">
            <span className="material-symbols-outlined">call</span>
            {person.phone}
          </div>
          <div className="address">
            <span className="material-symbols-outlined">location_on</span>
            {person.address}
          </div>
        </div>
      </div>
      <div className="education-cv">
        <Divider>
          <div className="edu-divider">
            <span className="material-symbols-outlined">school</span>EDUCATION
          </div>
        </Divider>
        {totalEdu.length > 0 &&
          totalEdu.map(edu => {
            return (
              <>
                <div className="edu" key={edu.id}>
                  <div className="edu-left-side">
                    <div className="date">
                      {getYear(edu.startDate)}-{getYear(edu.endDate)}
                    </div>
                    <div className="location">{edu.location}</div>
                  </div>
                  <div className="edu-right-side">
                    <div className="school">{edu.school}</div>
                    <div className="degree">{edu.degree}</div>
                  </div>
                </div>
                <Divider></Divider>
              </>
            );
          })}
      </div>
      <div className="experience-cv">
        <Divider>
          <div className="exp-divider">
            <span className="material-symbols-outlined">work</span>EXPERIENCE
          </div>
        </Divider>
        {totalExp.length > 0 &&
          totalExp.map(exp => {
            return (
              <>
                <div className="exp" key={exp.id}>
                  <div className="exp-left-side">
                    <div className="date">
                      {getYear(exp.startDate)} - {getYear(exp.endDate)}
                    </div>
                    <div className="location">{exp.location}</div>
                  </div>
                  <div className="exp-right-side">
                    <div className="company">{exp.title} at {exp.company}</div>
                    <div className="description">{exp.description}</div>
                  </div>
                </div>
                <Divider></Divider>
              </>
            );
          })}
      </div>
    </div>
  );
}
