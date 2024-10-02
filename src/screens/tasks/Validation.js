// validation.js

export const validateForm = (formData) => {
    let errors = {};
    if (!formData.project) errors.project = "Project is required";
    if (!formData.issueType) errors.issueType = "Issue Type is required";
    if (!formData.summary) errors.summary = "Summary is required";
    if (!formData.reporter) errors.reporter = "Reporter is required";
    if (!formData.priority) errors.priority = "Priority is required";
    if (!formData.labels) errors.labels = "Labels is required";
    if (!formData.linkedIssue) errors.linkedIssue = "Linked Issue is required";
    if (!formData.assignee) errors.assignee = "Assignee Type is required";
    if (!formData.sprint) errors.sprint = "Sprint is required";


    return errors;
};
