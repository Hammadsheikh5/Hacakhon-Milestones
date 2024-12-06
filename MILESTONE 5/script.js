var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
var downloadPdfButton = document.getElementById('download-btn');
var urlButton = document.getElementById('url-btn');
var getUrlLink = document.getElementById('get-url-link');
var copyLinkButton = document.getElementById('copy-link-button');
// Disable buttons initially
urlButton.disabled = true;
copyLinkButton.disabled = true;
// Initialize a variable to store the dynamically generated unique URL for sharing the resume
var uniqueUrl = "";
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Collect input values
    var name = document.getElementById('name').value;
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Save form data in localStorage
    var resumeData = { name: name, email: email, phone: phone, education: education, experience: experience, skills: skills, uniqueUrl: uniqueUrl };
    localStorage.setItem(username, JSON.stringify(resumeData));
    // Generate the resume content dynamically
    var resumeHTML = "\n        <h2 contenteditable=\"true\"><b>".concat(name, "'s Resume</b></h2>\n        <h3>Personal Information</h3>\n        <p><b>Name:</b> <span contenteditable=\"true\">").concat(name, "</span></p>\n        <p><b>Email:</b> <span contenteditable=\"true\">").concat(email, "</span></p>\n        <p><b>Phone:</b> <span contenteditable=\"true\">").concat(phone, "</span></p>\n        <h3>Education</h3>\n        <p contenteditable=\"true\"><b>").concat(education, "</b></p>\n        <h3>Experience</h3>\n        <p contenteditable=\"true\"><b>").concat(experience, "</b></p>\n        <h3>Skills</h3>\n        <p contenteditable=\"true\"><b>").concat(skills, "</b></p>\n    ");
    resumeDisplayElement.innerHTML = resumeHTML;
    // Enable buttons
    urlButton.disabled = false;
    copyLinkButton.disabled = false;
    // Handle download as PDF
    downloadPdfButton.addEventListener('click', function () {
        var printWindow = window.open('', '', 'width=800,height=600');
        printWindow === null || printWindow === void 0 ? void 0 : printWindow.document.write("<html><head><title>".concat(name, "'s Resume</title></head><body>").concat(resumeHTML, "</body></html>"));
        printWindow === null || printWindow === void 0 ? void 0 : printWindow.document.close();
        printWindow === null || printWindow === void 0 ? void 0 : printWindow.focus();
        printWindow === null || printWindow === void 0 ? void 0 : printWindow.print();
        printWindow === null || printWindow === void 0 ? void 0 : printWindow.close();
    });
    // Generate a unique URL
    var myName = username.toLowerCase().replace(/\s+/g, "-");
    var baseUrl = window.location.origin + window.location.pathname;
    uniqueUrl = "".concat(baseUrl, "?user=").concat(myName, "/resume");
    // Set the unique URL for sharing
    urlButton.addEventListener('click', function () {
        getUrlLink.setAttribute("href", uniqueUrl);
    });
    // Add event listener for the "Copy Address" button
    copyLinkButton.addEventListener('click', function () {
        navigator.clipboard.writeText(uniqueUrl).then(function () {
            alert("Copy Successfully");
        });
    });
});
// Auto-populate resume from URL
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var user = urlParams.get('user');
    if (user) {
        var resumeData = localStorage.getItem(user);
        if (resumeData) {
            var _a = JSON.parse(resumeData), name_1 = _a.name, email = _a.email, phone = _a.phone, education = _a.education, experience = _a.experience, skills = _a.skills;
            var resumeHTML_1 = "\n                <h2 contenteditable=\"true\"><b>".concat(name_1, "'s Resume</b></h2>\n                <h3>Personal Information</h3>\n                <p><b>Name:</b> <span contenteditable=\"true\">").concat(name_1, "</span></p>\n                <p><b>Email:</b> <span contenteditable=\"true\">").concat(email, "</span></p>\n                <p><b>Phone:</b> <span contenteditable=\"true\">").concat(phone, "</span></p>\n                <h3>Education</h3>\n                <p contenteditable=\"true\"><b>").concat(education, "</b></p>\n                <h3>Experience</h3>\n                <p contenteditable=\"true\"><b>").concat(experience, "</b></p>\n                <h3>Skills</h3>\n                <p contenteditable=\"true\"><b>").concat(skills, "</b></p>\n            ");
            resumeDisplayElement.innerHTML = resumeHTML_1;
            // Enable buttons as a new tab
            urlButton.disabled = false;
            copyLinkButton.disabled = false;
            // Add event listener for the "Copy Address" button as a new tab
            copyLinkButton.addEventListener('click', function () {
                navigator.clipboard.writeText(uniqueUrl).then(function () {
                    alert("Copy Successfully");
                });
            });
            // Handle download as PDF as a new tab
            downloadPdfButton.addEventListener('click', function () {
                var printWindow = window.open('', '', 'width=800,height=600');
                printWindow === null || printWindow === void 0 ? void 0 : printWindow.document.write("<html><head><title>".concat(name_1, "'s Resume</title></head><body>").concat(resumeHTML_1, "</body></html>"));
                printWindow === null || printWindow === void 0 ? void 0 : printWindow.document.close();
                printWindow === null || printWindow === void 0 ? void 0 : printWindow.focus();
                printWindow === null || printWindow === void 0 ? void 0 : printWindow.print();
                printWindow === null || printWindow === void 0 ? void 0 : printWindow.close();
            });
        }
    }
});
