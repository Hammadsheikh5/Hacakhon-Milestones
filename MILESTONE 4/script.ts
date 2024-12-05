

const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

//handle form submission
form.addEventListener('submit' ,(event : Event)=>{
     event.preventDefault();

 
     //collect ipput values
     const name= (document.getElementById('name') as HTMLInputElement).value
     const email= (document.getElementById('email') as HTMLInputElement).value
     const phone= (document.getElementById('phone')  as HTMLInputElement).value
     const education= (document.getElementById('education') as HTMLInputElement).value
     const experience= (document.getElementById('experience') as HTMLInputElement).value
     const skills= (document.getElementById('skills') as HTMLInputElement).value


     //generate the resume content dynamically
    //  we use backtick here 

     const resumeHTML = `
        <h2><b>Your Resume</b></h2>
        <h3>Personal Information</h3>
        <p contenteditable="true"><b>Name :</b> ${name}</p>
        <p contenteditable="true"><b>Email :</b> ${email}</p>
        <p contenteditable="true"><b>Phone :</b> ${phone}</p>
        <h3>Education</h3>
        <p contenteditable="true"><b>${education}</b></p>
        <h3>Experience</h3>
        <p contenteditable="true"><b>${experience}</b></p>
        <h3>Skills</h3>
        <p contenteditable="true"><b>${skills}</b></p>    `


        if(resumeDisplayElement){
            resumeDisplayElement.innerHTML = resumeHTML;
        }else{
            console.error('The resume display element is missing')
        }
})