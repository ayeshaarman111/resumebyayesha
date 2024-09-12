var form = document.getElementById('resume-form');
var outputName = document.getElementById('output-name');
var outputEmail = document.getElementById('output-email');
var outputEducation = document.getElementById('output-education');
var outputExperience = document.getElementById('output-experience');
var outputSkills = document.getElementById('output-skills');
var resumeOutput = document.getElementById('resume-output');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Capture user input
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Display the resume
    outputName.textContent = name;
    outputEmail.textContent = email;
    outputEducation.textContent = education;
    outputExperience.textContent = experience;
    outputSkills.textContent = skills.split(',').map(function (skill) { return skill.trim(); }).join(', ');
    // Show the resume section
    resumeOutput.style.display = 'block';
});
