var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
//handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    //collect ipput values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    //generate the resume content dynamically
    //  we use backtick here 
    var resumeHTML = "\n        <h2><b>Your Resume</b></h2>\n        <h3>Personal Information</h3>\n        <p><b>Name :</b> ".concat(name, "</p>\n        <p><b>Email :</b> ").concat(email, "</p>\n        <p><b>Phone :</b> ").concat(phone, "</p>\n        <h3>Education</h3>\n        <p><b>").concat(education, "</b></p>\n        <h3>Experience</h3>\n        <p><b>").concat(experience, "</b></p>\n        <h3>Skills</h3>\n        <p><b>").concat(skills, "</b></p>    ");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing');
    }
});
