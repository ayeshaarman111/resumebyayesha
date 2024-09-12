const form = document.getElementById('resume-form') as HTMLFormElement;
const outputName = document.getElementById('output-name') as HTMLSpanElement;
const outputEmail = document.getElementById('output-email') as HTMLSpanElement;
const outputEducation = document.getElementById('output-education') as HTMLSpanElement;
const outputExperience = document.getElementById('output-experience') as HTMLSpanElement;
const outputSkills = document.getElementById('output-skills') as HTMLSpanElement;
const resumeOutput = document.getElementById('resume-output') as HTMLDivElement;

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Capture user input
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;

    // Display the resume
    outputName.textContent = name;
    outputEmail.textContent = email;
    outputEducation.textContent = education;
    outputExperience.textContent = experience;
    outputSkills.textContent = skills.split(',').map(skill => skill.trim()).join(', ');

    // Show the resume section
    resumeOutput.style.display = 'block';
});