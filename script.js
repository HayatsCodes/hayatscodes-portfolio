function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


// Function to toggle dark mode
function toggleDarkMode() {
  // Toggle the 'dark-mode' class on the body
  document.body.classList.toggle('dark-mode');
  console.log('toggled!!!!');
  
  // Check if dark mode is enabled and save the user preference
  const isDarkModeEnabled = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkModeEnabled', isDarkModeEnabled);
}

// Check for user's dark mode preference on page load
document.addEventListener('DOMContentLoaded', () => {
  const darkModePreference = localStorage.getItem('darkModeEnabled');
  
  // If the user previously enabled dark mode, apply it on page load
  if (darkModePreference === 'true') {
    document.body.classList.add('dark-mode');
  }
});
