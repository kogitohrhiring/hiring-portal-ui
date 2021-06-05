export interface Job {
    id: string;
    name : string;
    location: string;
    category: string;
    jobSummary: string;
    responsibilites?: string[];
    skills?: string[];
}