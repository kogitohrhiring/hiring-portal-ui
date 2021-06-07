module.exports = controller = {
    getJobs: (req, res) => {
        res.send([
            {
                id: "1234",
                name: "SE",
                location: "BLR",
                category: "Engg",
                jobSummary: "Sample Description"
            }
        ]);
    },
    getjob: (req, res) => {
        res.send(
            {
                id: "1234",
                name: "Software Engineer",
                location: "Bangalore",
                category: "Engineering",
                jobSummary: "The Red Hat Software Engineering team is looking for a Software Engineer to join our Managed-Tenants Site Reliability Engineering (MT-SRE) team in Bangalore, India. In this role, you will help architect, modify, improve, and support the platform running user-facing Software-as-a-Service (SaaS) and managed service offerings on top of Red Hat OpenShift. Using your expertise in SRE principles of automation and continuous improvement, you will help create an environment where availability, reliability, and security are threaded through the entire application life cycle, not treated as an afterthought. As a Senior Software Engineer, you will write new software as required to automate the building, testing, deployment, promotion, monitoring, alerting, and maintenance of Red Hat's growing suite of cloud-native applications. As part of a rapidly growing team, you will also provide mentorship to colleagues.",
                responsibilites: [
                    "Establish and enforce SRE best practices through platform constraints and high-fidelity system modeling",
                    "Develop secure service architecture using cloud-native technologies coupled with traditional security approaches",
                    "Develop systems, primarily in Python and Golang, to prevent outages through automatic scanning and remediation",
                    "Participate in an on-call rotation for rapid incident response."
                ],
                skills: [
                  "Bachelor's or Master's degree in computer science, engineering, math, or an equivalent degree or experience",
                  "Proficiency with building applications and web-services using modern programming languages",
                  "Understanding of distributed systems and common distributed system failure domains",
                  "Background writing reliable software and automation",
                  "Ability to effectively work in a globally distributed team"
                ]
            }
        );
    }
}