export default function Cv({ person, totalEdu, totalExp }) {
  let fullName = `${person.firstName} ${person.lastName}`;
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
              <div className="edu">
                <div className="date">
                  {edu.startDate} - {edu.endDate}
                </div>
                <div className="school">{edu.school}</div>
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
              <div className="exp">
                <div className="date">
                  {exp.startDate} - {exp.endDate}
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
