export default function Cv({ person, totalEdu, totalExp }) {
  const fullName = `${person.firstName} ${person.lastName}`;

  const getYear = value => {
    if(typeof value === "string") return value
    else return value.year()
  };

  return (
    <div className="cv">
      <div className="header">
        <div className="name">{fullName}</div>
        <div className="email"> {person.email} </div>
        <div className="phone"> {person.phone} </div>
        <div className="address"> {person.address} </div>
      </div>
      <div className="education-cv">
        <div className="edu-header">Education</div>
        {totalEdu.length > 0 &&
          totalEdu.map(edu => {
            return (
              <div className="edu" key={edu.id}>
                <div className="date">
                  {getYear(edu.startDate)}-{getYear(edu.endDate)}
                </div>
                <div className="school" style={{ color: "red" }}>
                  {edu.school}
                  {edu.id}
                </div>
                <div className="location">{edu.location}</div>
                <div className="degree">{edu.degree}</div>
              </div>
            );
          })}
      </div>
      <div className="experience-cv">
        <div className="exp-header">Experience</div>
        {totalExp.length > 0 &&
          totalExp.map(exp => {
            return (
              <div className="exp" key={exp.id}>
                <div className="date">
                  {getYear(exp.startDate)} - {getYear(exp.endDate)}
                </div>
                <div className="company">{exp.company}</div>
                <div className="location">{exp.location}</div>
                <div className="description">{exp.description}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
