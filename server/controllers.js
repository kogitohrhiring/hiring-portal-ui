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
        res.send([
            {
                id: "1234",
                name: "SE",
                location: "BLR",
                category: "Engg",
                jobSummary: "Sample Description"
            }
        ]);
    }
}