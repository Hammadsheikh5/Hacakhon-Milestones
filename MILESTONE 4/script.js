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
    var resumeHTML = "\n        <h2 contenteditable=\"true\"><b>".concat(name, " Resume</b></h2>\n        <h3>Personal Information</h3>\n        <p><b>Name :</b><span contenteditable=\"true\"> ").concat(name, "</span></p> \n        <p><b>Email :</b> <span contenteditable=\"true\"> ").concat(email, "</span></p>\n        <p><b>Phone :</b> <span contenteditable=\"true\"> ").concat(phone, "</span></p>\n        <h3>Education</h3>\n        <p contenteditable=\"true\"><b>").concat(education, "</b></p>\n        <h3>Experience</h3>\n        <p contenteditable=\"true\"><b>").concat(experience, "</b></p>\n        <h3>Skills</h3>\n        <p contenteditable=\"true\"><b>").concat(skills, "</b></p>    ");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing');
    }
});
