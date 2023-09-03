// Skills array
const skills = ['Machine learning', 'Java Programming', 'Advance Python', 'Web-Developer', 'Android Developer', 'Canva Designer'];

// Get the skills element and its container
const skillsElementContainer = document.getElementById('dynamicSkillsContainer');
const skillsElement = document.getElementById('dynamicSkills');

// Variable to keep track of the current skill index
let currentSkillIndex = 0;

// Function to change the skills dynamically
function changeDynamicSkills() {
  // Get the current skill from the skills array
  const currentSkill = skills[currentSkillIndex];

  // Add fade-out class to apply fade-out animation
  skillsElementContainer.classList.add('fade-out');

  // Wait for the fade-out animation to complete
  setTimeout(() => {
    // Set the new skill
    skillsElement.textContent = currentSkill;

    // Remove the fade-out class
    skillsElementContainer.classList.remove('fade-out');
  }, 400);

  // Increment the skill index
  currentSkillIndex++;

  // Reset the skill index if it exceeds the array length
  if (currentSkillIndex >= skills.length) {
    currentSkillIndex = 0;
  }
}

// Call the function initially
changeDynamicSkills();

setInterval(changeDynamicSkills, 4000);





document.addEventListener("DOMContentLoaded", function () {
  const skillLinks = document.querySelectorAll(".list-group-item");
  const skillTabs = document.querySelectorAll(".tab-pane");

  let currentIndex = 0;
  let timeLeft = 0;
  const totalSeconds = 5; // Total seconds for each skill display

  function showSkill(index) {
    for (let i = 0; i < skillLinks.length; i++) {
      if (i === index) {
        skillLinks[i].classList.add("active");
        skillTabs[i].classList.add("show", "active");
      } else {
        skillLinks[i].classList.remove("active");
        skillTabs[i].classList.remove("show", "active");
      }
    }
  }

  function updateSkillAndProgressBar() {
    timeLeft--;
    if (timeLeft <= 0) {
      currentIndex = (currentIndex + 1) % skillLinks.length;
      timeLeft = totalSeconds;
      showSkill(currentIndex);
    }

    const progressBar = document.getElementById("progress-bar");
    progressBar.style.width = ((totalSeconds - timeLeft) / totalSeconds) * 100 + "%";
  }

  // Show the first skill initially
  showSkill(currentIndex);

  // Start updating the skill and progress bar
  setInterval(updateSkillAndProgressBar, 1000); // Update every second

  // Initial setup of the progress bar
  updateSkillAndProgressBar();
});
