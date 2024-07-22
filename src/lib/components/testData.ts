import type { Education, Experience, Info, LicensesCertifications, Skills, Summary } from "./components.types"

export type Resume = {
  info: Info;
  summary: Summary;
  experience: Experience;
  education: Education;
  certs: LicensesCertifications;
  skills: Skills;
}

export const myInfo: Resume = {
  info: {
    name: "Daniel Rees",
    email: "temp@email.com",
    linkedinURL: "https://www.linkedin.com",
  },
  summary: {
    accomplishments: [
      "1 year as a Senior software developer maintaining and extending a high traffic, multicloud system in the financial sector",
      "2 years experience as a Senior Software Reliability Engineer focussing on incident management tooling and observability",
      "5 years experience as a Software Developer with a background in quality engineering specializing in Go, Java and the Spring framework"
    ]
  },
  experience: {
    jobs: [
      {
        emplorer: "Form3",
        jobTitle: "Senior Software Developer",
        accomplishments: [""],
        periodEmployed: {
          start: new Date(Date.parse("March 2023")),
          end: new Date("July 2024"),
        },
      },
      {
        emplorer: "",
        jobTitle: "",
        accomplishments: [""],
        periodEmployed: {
          start: new Date(),
          end: new Date(),
        },
      },
      {
        emplorer: "",
        jobTitle: "",
        accomplishments: [""],
        periodEmployed: {
          start: new Date(),
          end: new Date(),
        },
      },
    ],
  },
  education: {
    items: [
      {
        credential: "",
        institution: "",
        studyPeriod: { start: new Date(), end: new Date() },
        description: "",
      }
    ]
  },
  certs: {
    certifications: [
      {
        title: "",
        provider: "",
        issued: new Date(),
        expires: new Date(),
      }
    ]
  },
  skills: {
    skills: ["skill"]
  }
}
