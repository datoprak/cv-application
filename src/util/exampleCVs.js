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

const EMPTY_CV = {
  person: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
  },
  totalEdu: [
    {
      id: "",
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: "",
    },
  ],
  totalExp: [
    {
      id: "",
      company: "",
      title: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
    },
  ],
};

export { EXAMPLE_CV, EMPTY_CV };
