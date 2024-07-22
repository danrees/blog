
export type Info = {
  name: string;
  email: string;
  linkedinURL: string;
}

export type Summary = {
  accomplishments: string[];
}

export type DateRange = {
  start: Date;
  end: Date;
}

export type Job = {
  emplorer: string;
  jobTitle: string;
  periodEmployed: DateRange;
  accomplishments: string[];
}
export type Experience = {
  jobs: Job[];
}

export type EducationItem = {
  institution: string;
  credential: string;
  studyPeriod: DateRange;
  description: string;
}

export type Education = {
  items: EducationItem[];
}

export type Certification = {
  title: string;
  provider: string;
  issued: Date;
  expires: Date;

}

export type LicensesCertifications = {
  certifications: Certification[]
}

export type Skills = {
  skills: string[];
}


