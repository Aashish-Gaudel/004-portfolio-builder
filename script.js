// Function to read form input and update live preview
function updatePreview() {
  document.getElementById('pvName').innerText = document.getElementById('nameInput').value || 'Your Name';
  document.getElementById('pvTitle').innerText = document.getElementById('titleInput').value || 'Your Title';
  document.getElementById('pvBio').innerText = document.getElementById('bioInput').value || 'Your bio...';
  document.getElementById('pvProjTitle').innerText = document.getElementById('projTitleInput').value || 'Project Title';
  document.getElementById('pvProjDesc').innerText = document.getElementById('projDescInput').value || 'Project details...';

  // Render skill tags dynamically
  const skillsContainer = document.getElementById('pvSkills');
  skillsContainer.innerHTML = '';
  const skills = document.getElementById('skillsInput').value.split(',');
  
  skills.forEach(skill => {
    const trimmed = skill.trim();
    if (trimmed) {
      const tag = document.createElement('span');
      tag.className = 'tag';
      tag.innerText = trimmed;
      skillsContainer.appendChild(tag);
    }
  });
}

// Add input listeners to all form controls for real-time rendering
document.querySelectorAll('input, textarea').forEach(input => {
  input.addEventListener('input', updatePreview);
});

// Render once initially on load
updatePreview();